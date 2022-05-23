import React from 'react'
import Marquee from 'react-fast-marquee';
import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import { injected } from "../components/wallet/connectors";
import { InjectedConnector } from '@web3-react/injected-connector';




export default function Main() {

  return (

    <section class="text-gray-600 body-font">
      <div class="max-w-5xl pt-52 pb-24 mx-auto">
        <h1 class="text-80 text-center font-4 lh-6 ld-04 font-bold text-white mb-6">
          smowlmfers
        </h1>
        <Marquee class="text-2xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-700 text-right"
                 speed="16"
                 gradientColor="[0,0,0]"
                 gradient="false"
                 gradient="false"
                 direction="right">



         supply: 1337   price: 0.01337 ________ whitelist: 1 free mint per wallet ________ minting monday the 23rd @ 3pm pst  ________

            </Marquee>



        <Marquee class="text-3xl font-4 font-semibold lh-6 ld-04 pb-11 text-gray-700 text-center"
                 speed="24"
                 gradientColor="[0,0,0]"
                 gradient="false"
                 direction="right">


      420 free mints for whitelist ________  wl free mint @ 3 - 3:15pm pst  ________  public mint @ 3:15pm pst  ________
      </Marquee>
          <br />
          <br />

      <div className="ml-6 text-center">
          <a
            className="inline-flex items-center py-3 font-semibold tracking-tighter text-black transition duration-500 ease-in-out transform bg-transparent ml-11 bg-gradient-to-r from-red-400 to-red-800 px-14 text-md md:mt-0 focus:shadow-outline"

          >
            <div className="flex text-lg animate-pulse">

              <button className="justify-center">MINT ON ETHERSCAN</button>
            </div>
          </a>
          <a
            className="inline-flex items-center py-3 font-semibold tracking-tighter text-black transition duration-500 ease-in-out transform bg-transparent ml-11 bg-gradient-to-r from-red-400 to-red-800 px-14 text-md md:mt-0 focus:shadow-outline"
            href="https://twitter.com/smowlmfers"
          >
            <div className="flex text-lg animate-pulse">

              <button className="justify-center">CONTRACT ON OFFICIAL TWITTER</button>

            </div>
          </a>
        </div>
      </div>

      <div className="container flex flex-col items-center justify-center mx-auto">
        <img
          className="object-cover object-center w-3/4 mb-10 border shadow-md g327"
          alt=""
          src="./images/smfr-assets/smowlmfer 3.png"></img>
      </div>
      <h2 className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-7xl md:text-6xl">
        get yourself some smowlmfers
      </h2>
      <h3 className="pt-40 mb-1 text-2xl font-semibold tracking-tighter text-center text-gray-200 lg:text-5xl md:text-4xl">
       theoretical mints
      </h3>
      <p className="mx-auto text-xl text-center text-gray-300 font-normal leading-relaxed fs521 lg:w-2/3">
      </p>


      <div className="container flex flex-col items-center justify-center mx-auto pt-12 pb-24 max-w-6xl mx-auto fsac4 md:px-1 px-3">
        <div class="ktq4">
          <img className="object-cover object-center mb-10 border shadow-md g327"
               alt=""
               src="./images/smfr-assets/smowlmfer 1.png"></img>
          <h3 class="pt-3 font-semibold .text-lg text-white">

          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">

          </p>
        </div>

        <div class="ktq4">
          <img className="object-cover object-center mb-10 border shadow-md g327"
               alt=""
               src="./images/smfr-assets/smowlmfer 2.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">

          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">

          </p>
        </div>

        <div class="ktq4">
          <img className="object-cover object-center mb-10 border shadow-md g327"
               alt=""
               src="./images/smfr-assets/smowlmfer 3.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">

          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">

          </p>
        </div>

        <div class="ktq4">
          <img className="object-cover object-center mb-10 border shadow-md g327"
               alt=""
               src="./images/smfr-assets/smowlmfer 4.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">

          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">

          </p>
        </div>

        <div class="ktq4">
          <img className="object-cover object-center mb-10 border shadow-md g327"
               alt=""
               src="./images/smfr-assets/smowlmfer 5.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">

          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">

          </p>
        </div>

        <div class="ktq4">
          <img className="object-cover object-center mb-10 border shadow-md g327"
               alt=""
               src="./images/smfr-assets/smowlmfer 6.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">

          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">

          </p>
        </div>
        <div class="ktq4">
          <img className="object-cover object-center mb-10 border shadow-md g327"
               alt=""
               src="./images/smfr-assets/smowlmfer 7.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">

          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">

          </p>
        </div>

        <div class="ktq4">
          <img className="object-cover object-center mb-10 border shadow-md g327"
               alt=""
               src="./images/smfr-assets/smowlmfer 8.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">

          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">

          </p>
        </div>

        <div class="ktq4">
          <img className="object-cover object-center mb-10 border shadow-md g327"
               alt=""
               src="./images/smfr-assets/smowlmfer 9.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">

          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">

          </p>
        </div>

        <div class="ktq4">
          <img className="object-cover object-center mb-10 border shadow-md g327"
               alt=""
               src="./images/smfr-assets/smowlmfer 10.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">

          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">

          </p>
        </div>

        <div class="ktq4">
          <img className="object-cover object-center mb-10 border shadow-md g327"
               alt=""
               src="./images/smfr-assets/smowlmfer 11.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">

          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">

          </p>
        </div>

        <div class="ktq4">
          <img className="object-cover object-center mb-10 border shadow-md g327"
               alt=""
               src="./images/smfr-assets/smowlmfer 12.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">

          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">

          </p>
        </div>

        <div class="ktq4">
          <img className="object-cover object-center mb-10 border shadow-md g327"
               alt=""
               src="./images/smfr-assets/smowlmfer 13.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">

          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">

          </p>
        </div>

        <div class="ktq4">
          <img className="object-cover object-center mb-10 border shadow-md g327"
               alt=""
               src="./images/smfr-assets/smowlmfer 14.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">

          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">

          </p>
        </div>

        <div class="ktq4">
          <img className="object-cover object-center mb-10 border shadow-md g327"
               alt=""
               src="./images/smfr-assets/smowlmfer 15.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">

          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">

          </p>
        </div>

        <div class="ktq4">
          <img className="object-cover object-center mb-10 border shadow-md g327"
               alt=""
               src="./images/smfr-assets/smowlmfer 16.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">

          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">

          </p>
        </div>

        <div class="ktq4">
          <img className="object-cover object-center mb-10 border shadow-md g327"
               alt=""
               src="./images/smfr-assets/smowlmfer 17.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">

          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">

          </p>
        </div>

        <div class="ktq4">
          <img className="object-cover object-center mb-10 border shadow-md g327"
               alt=""
               src="./images/smfr-assets/smowlmfer 18.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">

          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">

          </p>
        </div>

        <div class="ktq4">
          <img className="object-cover object-center mb-10 border shadow-md g327"
               alt=""
               src="./images/smfr-assets/smowlmfer 19.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">

          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">

          </p>
        </div>

        <div class="ktq4">
          <img className="object-cover object-center mb-10 border shadow-md g327"
               alt=""
               src="./images/smfr-assets/smowlmfer 20.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">

          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">

          </p>
        </div>

        <div class="ktq4">
          <img className="object-cover object-center mb-10 border shadow-md g327"
               alt=""
               src="./images/smfr-assets/smowlmfer 21.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">

          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">

          </p>
        </div>

        <div class="ktq4">
          <img className="object-cover object-center mb-10 border shadow-md g327"
               alt=""
               src="./images/smfr-assets/smowlmfer 22.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">

          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">

          </p>
        </div>

        <div class="ktq4">
          <img className="object-cover object-center mb-10 border shadow-md g327"
               alt=""
               src="./images/smfr-assets/smowlmfer 23.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">

          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">

          </p>
        </div>

        <div class="ktq4">
          <img className="object-cover object-center mb-10 border shadow-md g327"
               alt=""
               src="./images/smfr-assets/smowlmfer 24.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">

          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">

          </p>
        </div>

        <div class="ktq4">
          <img className="object-cover object-center mb-10 border shadow-md g327"
               alt=""
               src="./images/smfr-assets/smowlmfer 25.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">

          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">

          </p>
        </div>

        <div class="ktq4">
          <img className="object-cover object-center mb-10 border shadow-md g327"
               alt=""
               src="./images/smfr-assets/smowlmfer 26.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">

          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">

          </p>
        </div>

        <div class="ktq4">
          <img className="object-cover object-center mb-10 border shadow-md g327"
               alt=""
               src="./images/smfr-assets/smowlmfer 27.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">

          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">

          </p>
        </div>

        <div class="ktq4">
          <img className="object-cover object-center mb-10 border shadow-md g327"
               alt=""
               src="./images/smfr-assets/smowlmfer 28.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">

          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">

          </p>
        </div>

        <div class="ktq4">
          <img className="object-cover object-center mb-10 border shadow-md g327"
               alt=""
               src="./images/smfr-assets/smowlmfer 29.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">

          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">

          </p>
        </div>

        <div class="ktq4">
          <img className="object-cover object-center mb-10 border shadow-md g327"
               alt=""
               src="./images/smfr-assets/smowlmfer 30.png"></img>
          <h3 class="pt-3 font-semibold text-lg text-white">

          </h3>
          <p class="pt-2 value-text text-md text-gray-200 fkrr1">

          </p>
        </div>

      </div>

    </section>
  );
}
