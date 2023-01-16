import { motion } from "framer-motion";

import { Stack, VStack } from "@chakra-ui/react";

import { colors } from "../theme/colors";
import Login from "../src/components/Login";
import CreateAccount from "../src/components/CreateAccount";
import { useAppSelector } from "../app/hooks";

export default function HomePage() {
  const isRandomUser = useAppSelector((state) => state.randomUser.isRandomUser);

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      h="100vh"
      bg={colors.neutrals["neutrals-300"]}
      backgroundImage={
        "url(https://cdnb.artstation.com/p/assets/images/images/029/320/295/original/bogdan-mb0sco-coffeeanim.gif?1601147277)"
      }
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundBlendMode="multiply"
    >
      <VStack
        bg={colors.neutrals["neutrals-700"]}
        w="70%"
        maxWidth="700px"
        borderRadius="5px"
        padding="32px"
        margin="16px"
        boxShadow="0 2px 10px 0 rgb(0 0 0 / 20%)"
      >
        <motion.div initial={false}>
          {isRandomUser ? <CreateAccount /> : <Login />}
        </motion.div>
      </VStack>
    </Stack>
  );
}
