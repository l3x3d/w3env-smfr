import React from "react";
import ReactDOM from 'react-dom';
import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";
import Marquee from 'react-fast-marquee';
import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import { injected } from "../components/wallet/connectors"

export default function Home() {
  
  return (
    <div className="text-black bg-black">
      <NextSeo
        title="smowlmfers"
        description="smowmfers mint page."
        canonical="smowlmfers.com"
        openGraph={{
          url: "https://smowlmfers.com",
        }}
      />
      <Head>
        <title>smowlmfers</title>
        <link rel="icon" href="./images/favicon.png" />



      </Head>

      <Header />

      <Main />

      <Footer />
    </div>
  );
}
