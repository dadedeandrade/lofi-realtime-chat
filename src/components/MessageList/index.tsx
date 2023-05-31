import React from "react";
import { Box, Text, Image } from "@chakra-ui/react";
import { colors } from "../../../theme/colors";
import { IMessage } from "./types";
import { motion } from "framer-motion";

interface MessageListProps {
  messageList: IMessage[];
}

export function MessageList(props: MessageListProps): JSX.Element {
  return (
    <Box
      as="ul"
      overflow="auto"
      display="flex"
      flexDirection="column-reverse"
      flex={1}
      color={colors.neutrals["neutrals-000"]}
      marginBottom="16px"
    >
      {props.messageList.map((currentMessage) => {
        const onErrorHandler = (
          event: React.SyntheticEvent<HTMLImageElement>
        ) => {
          event.currentTarget.onerror = null; // prevents looping
          event.currentTarget.src = "./../randomUser.jpeg";
        };

        const stickerURL = ":stickerURL:";
        const isSticker = currentMessage.text.startsWith(stickerURL);

        return (
          <Text
            key={currentMessage.id}
            as="li"
            borderRadius="5px"
            padding="6px"
            marginBottom="12px"
            _hover={{
              backgroundColor: colors.neutrals["neutrals-7000"],
            }}
          >
            <Box marginBottom="8px" display="flex" alignItems="center">
              <Image
                width="20px"
                height="20px"
                borderRadius="50%"
                display="inline-block"
                marginRight="8px"
                src={`https://github.com/${currentMessage.from}.png`}
                onError={onErrorHandler}
              />
              <Text as="strong">
                {currentMessage.from
                  ? currentMessage.from
                  : "Nameless (Usuário Sem Github)"}
              </Text>
              <Text
                fontSize="10px"
                marginLeft="8px"
                color={colors.neutrals["neutrals-300"]}
                as="span"
              >
                {currentMessage.created_at}
              </Text>
            </Box>
            {isSticker ? (
              <Image src={currentMessage.text.replace(stickerURL, "")} />
            ) : (
              currentMessage.text
            )}
          </Text>
        );
      })}
    </Box>
  );
}
