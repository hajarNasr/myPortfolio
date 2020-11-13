import "../styles/globals.css";
import Head from "next/head";
import Logo from "../components/Logo";
import MainNavbar from "../components/MainNavbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <html lang="en" />
      </Head>
      <Logo />
      <MainNavbar />
      <div className="page">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
