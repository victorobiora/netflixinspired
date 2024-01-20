import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "@/store/nStore";
import Head from "next/head";

export default function App({ Component, pageProps }) {

  return (
    <Provider store={store}>
            <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
