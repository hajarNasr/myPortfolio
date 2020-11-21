import Head from "next/head";
import Main from "../components/Main";

export default function Home() {
  return (
    <div className="page">
      <Head>
        <title>Hajar Nasr</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main />
    </div>
  );
}
