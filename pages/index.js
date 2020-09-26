import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import InfoBar from "../components/InfoBar/InfoBar";
import Map from "../components/Map";

export default function Home({ initialData }) {
  const [ipValue, setIipValue] = useState("");
  const [data, setData] = useState(initialData);
  const [searchType, setSearchType] = useState("");
  console.log(initialData);

  const fetchNewData = async () => {
    // Verify if t
    if (ipValue === "") {
      searchType("");
    } else {
      if (
        /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
          ipValue
        )
      ) {
        setSearchType("&ipAddress=");
      } else {
        setSearchType("&domain=");
      }
    }
    const req = await fetch(
      `https://geo.ipify.org/api/v1?apiKey=${process.env.API_TOKEN}${searchType}${ipValue}`
    );
    // Change how to error work
    const newData = await req.json();

    setData(newData);
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
      />
      <main>
        <InfoBar data={data} />
        <Map />
      </main>
    </>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://geo.ipify.org/api/v1?apiKey=${process.env.API_TOKEN}`
  );
  const initialData = await res.json();
  // Pass data to the page via props
  return { props: { initialData } };
}
