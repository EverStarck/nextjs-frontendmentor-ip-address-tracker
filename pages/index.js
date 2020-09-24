import Head from "next/head";
import Header from "../components/Header/Header";
import InfoBar from "../components/InfoBar/InfoBar";
import Map from "../components/Map";

export default function Home() {
  return (
    <>
      <Head>
        <title>🗺The BEST IP Address Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Page */}
      <Header />
      <main>
        <InfoBar/>
        <Map/>
      </main>
    </>
  );
}
