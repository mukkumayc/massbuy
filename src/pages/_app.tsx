import React from "react";
import { Provider } from "react-redux";
import store from "../store";
import type { AppProps } from "next/app";
import AuthChecker from "../components/AuthChecker";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/styles.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <div className="App">
      <Provider store={store}>
        <AuthChecker>
          <Component {...pageProps} />
        </AuthChecker>
        {/* <NavBar {...appProps} />
          <MessageModal {...messageModalProps} /> */}
      </Provider>
    </div>
  );
}

export default App;
