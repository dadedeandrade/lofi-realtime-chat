import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useState } from "react";
import { toggleRandomUser } from "../../../app/features/toggleRandomUserSlice";
import { useAppDispatch } from "../../../app/hooks";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { colors } from "../../../theme/colors";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function CreateAccount() {
  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);
  const [username, setUsername] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <motion.div
      transition={{ delay: 0 }}
      initial={{ x: 200, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      <VStack gap={"10px"}>
        <Button
          leftIcon={<ArrowBackIcon />}
          borderRadius="5px"
          bg={colors.primary["primary-500"]}
          _hover={{ background: colors.primary["primary-600"] }}
          padding="10px"
          onClick={(e) => dispatch(toggleRandomUser())}
        >
          Voltar
        </Button>

        {/* Futura implementacao de criacao de usuario e login */}
        {/* <FormControl>
          <FormLabel color={colors.neutrals["neutrals-200"]}>E-mail</FormLabel>
          <Input
            type="email"
            border={"none"}
            focusBorderColor="primary.500"
            _hover={{ borderColor: "primary.500" }}
            background={colors.neutrals["neutrals-800"]}
            color={colors.neutrals["neutrals-400"]}
            padding={"8px 12px"}
            w="100%"
            borderRadius={"5px"}
            placeholder="ex: sample@sample.com"
          />
        </FormControl>

        <FormControl>
          <FormLabel color={colors.neutrals["neutrals-200"]}>Senha</FormLabel>
          <InputGroup size="md">
            <Input
              border={"none"}
              focusBorderColor="primary.500"
              _hover={{ borderColor: "primary.500" }}
              background={colors.neutrals["neutrals-800"]}
              color={colors.neutrals["neutrals-400"]}
              padding={"8px 12px"}
              w="100%"
              borderRadius={"5px"}
              type={show ? "text" : "password"}
              placeholder="Enter password"
            />
            <InputRightElement
              width={"15%"}
              height={"100%"}
              children={
                <IconButton
                  bg={"transparent"}
                  _hover={{ background: "transparent" }}
                  onClick={handleClick}
                  aria-label="Button that shows or hide password"
                  as={show ? AiFillEyeInvisible : AiFillEye}
                />
              }
            />
          </InputGroup>
        </FormControl> */}

        <FormControl>
          <FormHelperText
            marginBottom={`15px`}
            color={colors.neutrals["neutrals-200"]}
          >
            Escolha um nome legal e começe a conversar :)
          </FormHelperText>
          <Input
            border={"none"}
            focusBorderColor="primary.500"
            _hover={{ borderColor: "primary.500" }}
            background={colors.neutrals["neutrals-800"]}
            color={colors.neutrals["neutrals-400"]}
            padding={"8px 12px"}
            w="100%"
            borderRadius={"5px"}
            type={show ? "text" : "password"}
            placeholder="Nome"
          />
        </FormControl>

        <Button
          background={colors.primary["primary-500"]}
          color={colors.default}
          padding={"8px 12px"}
          w="100%"
          borderRadius={"2px"}
          marginTop={"25px"}
          type="submit"
          _hover={{ background: colors.primary["primary-600"] }}
          onClick={(e) => alert("Not ready yet :(")}
        >
          Entrar como convidado
        </Button>
      </VStack>
    </motion.div>
  );
}
