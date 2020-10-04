import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import InfoBar from "../components/InfoBar/InfoBar";
import dynamic from "next/dynamic";

const MapWithNoSSR = dynamic(() => import("../components/MapComponent"), {
  ssr: false,
});

export default function Home({ initialData }) {
  const [ipValue, setIipValue] = useState("");
  const [data, setData] = useState(initialData);
  const [searchType, setSearchType] = useState("");
  const [errorApi, setErrorApi] = useState(false);

  const fetchNewData = async () => {
    const req = await fetch(
      `https://geo.ipify.org/api/v1?apiKey=${process.env.API_TOKEN}${searchType}${ipValue}`
    );
    if (!req.ok) {
      setErrorApi(true);
    } else {
      setErrorApi(false);
      const newData = await req.json();
      setData(newData);
    }
  };

  return (
    <>
      <Head>
        <title>🗺The BEST IP Address Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Page */}
      <Header
        ipValue={ipValue}
        setIipValue={setIipValue}
        fetchNewData={fetchNewData}
        setSearchType={setSearchType}
      />
      <main>
        <InfoBar data={data} errorApi={errorApi} />
        <MapWithNoSSR data={data}/>
      </main>
    </>
  );
}

// This gets called on every request
export async function getStaticProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://geo.ipify.org/api/v1?apiKey=${process.env.API_TOKEN}`
  );
  const initialData = await res.json();
  console.log("ENV," + process.env.API_TOKEN);
  // Pass data to the page via props
  return { props: { initialData } };
}
