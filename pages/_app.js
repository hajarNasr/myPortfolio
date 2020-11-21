import "../styles/globals.css";
import Head from "next/head";
import Logo from "../components/Logo";
import MainNavbar from "../components/MainNavbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <html lang="en" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using Nextjs" />
      </Head>
      <Logo />
      <div className="page">
        <Component {...pageProps} />
      </div>
      <MainNavbar />
    </>
  );
}

export default MyApp;
