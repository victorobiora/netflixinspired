import "@/styles/globals.css";
import { Provider } from "react-redux";
import store from "@/store/nStore";
import NavBar from "@/components/NavBar";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>

      <Component {...pageProps} />
    </Provider>
  );
}
