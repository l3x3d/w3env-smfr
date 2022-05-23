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
import { injected } from "../components/wallet/connectors";


export default function Home() {

    const {active, account, library, connector, activate, deactivate } = useWeb3React()

    async function connect() {
      try{
        await activate(injected)
        localStorage.setItem('isWalletConnected', true)
      } catch (ex) {
        console.log(ex)
      }
    }

    async function disconnect() {
      try{
        deactivate()
        localStorage.setItem('isWalletConnected', 'false')
      } catch (ex) {
        console.log(ex)
      }
    }

    useEffect(() => {
      const connectWalletOnPageLoad = async () => {
        if (localStorage?.getItem('isWalletConnected') === 'true') {
          try {
            await activate(injected)
            localStorage.setItem('isWalletConnected', true)
          } catch(ex) {
            console.log(ex)
        }
      }
    }
    /*connectWalletOnPageLoad()*/
  }, [])
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
