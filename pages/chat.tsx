import { Text, Center, Stack, Heading, Spinner, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { UserData, UserDataError } from "./chatTypes";

export default function ChatPage() {
  const [userData, setUserData] = useState<
    UserData | UserDataError | undefined
  >(undefined);

  useEffect(() => {
    const baseURL = window.location.origin;

    async function getUserData() {
      await fetch(`${baseURL}/api/getUserData`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setUserData(data);
        });
    }
    getUserData();
  }, []);

  return (
    <Stack>
      <Center>
        {!userData ? (
          <Spinner color="red" size={"xl"} />
        ) : (
          <VStack>
            <Heading>I'm sorry {userData.name}</Heading>
            <Text>This page is not ready yet :'(</Text>
          </VStack>
        )}
      </Center>
    </Stack>
  );
}
