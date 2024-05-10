import { appWithTranslation } from 'next-i18next';
import "../styles/Home.css";
const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(MyApp);


