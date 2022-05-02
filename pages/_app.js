import Root from "../components/App/Root";

import "../styles/index.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Root>
      <Component {...pageProps} />
    </Root>
  );
}

export default MyApp;
