import { colors } from "../colors";
import { mode } from "@chakra-ui/theme-tools";

export const Text = {
  baseStyle: (props: any) => ({
    color: mode(
      colors.primary["primary-400"],
      colors.primary["primary-500"]
    )(props),
  }),
  variants: {
    secondary: (props: any) => ({
      color: mode(
        colors.neutrals["neutrals-400"],
        colors.neutrals["neutrals-500"]
      )(props),
    }),
  },
};
