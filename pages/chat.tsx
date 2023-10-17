import {
  Text,
  Center,
  Stack,
  Heading,
  Spinner,
  VStack,
  Box,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { UserData } from "../src/types/chat";
import { colors } from "../theme/colors";
import { Header } from "../src/components/header";
import styles from "../src/styles/glassMorphism.module.css";
import { MessageList } from "../src/components/MessageList";
import { createClient } from "@supabase/supabase-js";
import { ButtonSendSticker } from "../src/components/buttonSendSticker";

const SUPA_URL = "https://jerfaxeghnnbhfxvvucu.supabase.co";
const SUPA_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MzgxMTE1NywiZXhwIjoxOTU5Mzg3MTU3fQ.wfDaJbPrC2EILmZl8R7tHgeTxIeTFx7m-i_c1gMTJK0";
const dbSupaInteraction = createClient(SUPA_URL, SUPA_KEY);

export default function ChatPage() {
  const [userData, setUserData] = useState<UserData | undefined>(undefined);

  useEffect(() => {
    const baseURL = window.location.origin;

    async function getUserData(): Promise<any> {
      await fetch(`${baseURL}/api/getUserData`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data: UserData) => {
          setUserData(data);
        });
    }
    getUserData();
  }, []);

  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  function listenerSupaBase(addMsg) {
    return dbSupaInteraction
      .from("mesHis")
      .on("INSERT", (liveResponse) => {
        addMsg(liveResponse.new);
      })
      .subscribe();
  }

  // const { data, error } = await dbSupaInteraction
  //   .from("mesHis")
  //   .select("*")
  //   .order("id", { ascending: false })
  //   .then(({ data }) => {
  //     setMessageList(data);
  //   });
  // listenerSupaBase((newMessage) => {
  //   console.log("newMessage: " + newMessage);
  //   setMessageList((realtimeListValue) => {
  //     return [newMessage, ...realtimeListValue];
  //   });
  // });

  function handleNewMessage(newMessage) {
    const message = {
      id: messageList.length + 1,
      from: userData?.login,
      text: newMessage,
      created_at: new Date().toLocaleDateString(),
    };
    dbSupaInteraction
      .from("mesHis")
      .insert([message])
      .then(({ data }) => {
      });

    setMessage("");
  }

  return (
    <Stack
      backgroundColor={colors.primary["primary-500"]}
      color={colors.neutrals["neutrals-000"]}
      display="flex"
      height="100vh"
      alignItems="center"
      justifyContent="center"
      backgroundImage={`url(https://cdna.artstation.com/p/assets/images/images/018/836/268/large/fajar-fazriansyah-master-10.jpg?1560916155)`}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundBlendMode="multiply"
      backgroundPosition="right"
    >
      <Center>
        {!userData ? (
          <Spinner color="red" size={"xl"} />
        ) : ( 
          <Stack
            display="flex"
            flexDirection="column"
            flex={1}
            boxShadow="0 2px 10px 0 rgb(0 0 0 / 20%)"
            borderRadius="5px"
            transition={"0.2"}
            height="100%"
            maxWidth={{ md: "55%", xs: "55%", sm: "65%" }}
            maxHeight="75vh"
            padding="32px"
            className={styles.glassMorphismOutside}
          >
            <Header {...userData} />
            <Stack
              position="relative"
              display="flex"
              flex={1}
              height="80%"
              flexDirection="column"
              borderRadius="5px"
              padding="16px"
              className={styles.glassMorphismInside}
            >
              <MessageList messageList={messageList} />

              <Box
                as="form"
                display="flex"
                alignItems="center"
                // value={messageList[0]}
              >
                <Textarea
                  placeholder="Insira sua mensagem aqui..."
                  value={message}
                  resize="none"
                  borderRadius="5px"
                  padding="6px 8px"
                  backgroundColor={colors.neutrals["neutrals-800"]}
                  marginRight="12px"
                  color={colors.neutrals["neutrals-200"]}
                  onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                    setMessage(event.target.value);
                  }}
                  onKeyPress={(
                    event: React.KeyboardEvent<HTMLTextAreaElement>
                  ) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      handleNewMessage(message);
                    }
                  }}
                />
                <ButtonSendSticker
                  onStickerClick={(sticker: string) => {
                    handleNewMessage(":stickerURL:" + sticker);
                  }}
                />
              </Box>
            </Stack>
          </Stack>
        )}
      </Center>
    </Stack>
  );
}
