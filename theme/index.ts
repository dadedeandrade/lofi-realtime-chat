import { extendTheme, StyleFunctionProps } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { colors } from "./colors";
import { Text } from "./components/Text";

const customTheme = extendTheme({
  colors: colors,

  components: {
    Text,
  },

  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: mode(colors.default, colors.default)(props),
        bg: mode(
          colors.primary["primary-900"],
          colors.primary["primary-800"]
        )(props),
      },
    }),
  },
});

export default customTheme;
