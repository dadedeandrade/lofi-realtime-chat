import { motion } from "framer-motion";
import { Provider } from "react-redux";
import { store } from "../app/store";
import "../src/styles/globalStyle.css";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import theme from "../theme";
import "@fontsource/open-sans/700.css";
import { IconContext } from "react-icons";

export default function MyApp({ Component, pageProps, router }) {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <IconContext.Provider value={{ className: "shared-class", size: "45" }}>
          <CSSReset />
          <motion.div
            key={router.route}
            initial="pageInitial"
            animate="pageAnimate"
            transition={{ delay: 1 }}
            variants={{
              pageInitial: {
                opacity: 0,
              },
              pageAnimate: {
                opacity: 1,
              },
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </IconContext.Provider>
      </ChakraProvider>
    </Provider>
  );
}
