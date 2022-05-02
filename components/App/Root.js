import React from "react";
import Head from "next/head";
import { Provider } from "react-redux";

// State setting
import store from "../../store/store";

const Root = ({ children }) => {
  return (
    <>
      <Head>
        <title>{process.env.APP_NAME}</title>
        <meta charSet="UTF-8" />
        <meta name="description" content="DEscription" />
        <meta name="keywords" content="JS" />
        <meta name="author" content="John Doe" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <Provider store={store}>{children}</Provider>
    </>
  );
};

export default Root;
