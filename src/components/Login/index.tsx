import {
  Stack,
  VStack,
  FormControl,
  Text,
  Input,
  Heading,
  FormLabel,
  InputRightElement,
  InputGroup,
  IconButton,
  Button,
  HStack,
  Icon,
  Divider,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { toggleRandomUser } from "../../../app/features/toggleRandomUserSlice";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { colors } from "../../../theme/colors";
import { BsGithub } from "react-icons/bs";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const dispatch = useAppDispatch();

  return (
    <motion.div
      initial={{ x: -200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        width: "100%",
      }}
    >
      <VStack gap="15px" w="fit-content">
        <Heading color={colors.primary["primary-300"]} as="h2">
          🍃 Chillin 🍃
        </Heading>

        {/* <Text marginBottom="32" color={colors.neutrals["neutrals-400"]}>
                  Enjou your Coffe break
                </Text> */}

        <VStack>
          <Text color={colors.neutrals["neutrals-300"]}>Fazer login com:</Text>
          <HStack gap={15}>
            <IconButton
              onClick={(e) => alert("not ready yet :(")}
              bg={"transparent"}
              _hover={{
                background: "transparent",
                cursor: "pointer",
                transform: "scale(1.25)",
                transition: "transform .2s",
              }}
              boxSize={35}
              as={FaApple}
              aria-label={"Click to login with Apple ID"}
            />
            <IconButton
              onClick={(e) => alert("not ready yet :(")}
              _hover={{
                background: "transparent",
                cursor: "pointer",
                transform: "scale(1.25)",
                transition: "transform .2s",
              }}
              bg={"transparent"}
              boxSize={35}
              as={BsGithub}
              aria-label={"Click to login with a Github Account"}
            />
            <IconButton
              onClick={(e) => alert("not ready yet :(")}
              _hover={{
                background: "transparent",
                cursor: "pointer",
                transform: "scale(1.25)",
                transition: "transform .2s",
              }}
              bg={"transparent"}
              boxSize={35}
              as={FcGoogle}
              aria-label={"Click to login with a Google Account"}
            />
          </HStack>
        </VStack>

        <HStack w="100%">
          <Divider />
          <Text color={colors.neutrals["neutrals-300"]}>ou</Text>
          <Divider />
        </HStack>

        <VStack>
          <Text color={colors.neutrals["neutrals-300"]}>
            Não tem uma conta?
          </Text>
          <Text color={colors.neutrals["neutrals-300"]}>
            Clique{" "}
            <Link
              onClick={(e) => dispatch(toggleRandomUser())}
              color={colors.primary["primary-300"]}
            >
              aqui
            </Link>{" "}
            para entrar como convidado :)
          </Text>
        </VStack>
      </VStack>
    </motion.div>
  );
}
