import React, { useState } from "react";
import { useRouter } from "next/router";
import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import { UserData } from "../../pages/chatTypes";
import { colors } from "../../theme/colors";

export function Header({ ...props }: UserData) {
  const [rerender, setRerender] = useState<boolean>(false);
  const router = useRouter();

  console.log(props);
  

  return (
    <Box
      style={{
        width: "100%",
        marginBottom: "16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text fontSize="2xl" fontWeight="bold">
        Chat
      </Text>

      <Box textAlign="center">
        <Text fontSize="md">Você está logado como:</Text>
        <Text fontSize="lg" fontWeight="bold">
          {props.name ? props.name : ""}
        </Text>
      </Box>

      <Button
        onClick={(e) => {
          localStorage.removeItem("accessToken");
          setRerender(!rerender);
          router.push('/')
        }}
        bg="transparent"
        color="#7e7e7e"
        p="8px 12px"
        _hover={{
          background: colors.neutrals["neutrals-200"],
        }}
        transitionDelay="2"
      >
        Logout
      </Button>
    </Box>
  );
}
