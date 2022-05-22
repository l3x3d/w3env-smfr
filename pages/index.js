import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import { NextSeo } from "next-seo";

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
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
