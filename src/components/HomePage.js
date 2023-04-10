import React from "react";
import Layout from "@theme/Layout";
import { useColorMode } from "@docusaurus/theme-common";

export default function HomePage() {
  const { colorMode } = useColorMode();

  return (
    <div
      style={{
        padding: 10,
      }}
    >
      <div
        style={{
          display: "flex",

          flexDirection: "row",
        }}
        className="d-flex d-sm-none"
      >
        <div className="container-fluid d-flex flex-column text-center">
          <p
            className="display-4 font-weight-bold mb-2"
            style={{
              fontSize: 40,
              fontFamily: "Noto Sans",
              fontWeight: "bold",
              marginBottom: 10,
              lineHeight: 1,
              marginTop: 160,
            }}
          >
            <b>Every onchain name</b>
          </p>
          <p className="lead">
            Everyname's advanced API fetches wallet addresses and names from any
            blockchain name service <br></br> <br></br>Search <b>any</b> onchain
            name .eth .sol .tez .algo .fn .dot .btc .bnb .stark .rsk .cosmos
          </p>
          <a
            href="/overview/whatIs"
            style={{
              borderRadius: 12,
              background: "#e33737",
              width: 150,
              padding: 15,
              color: "white",
            }}
            class="button"
          >
            Learn more
          </a>
        </div>

        <div className="">
          <img
            width="1400"
            src="https://cdn.discordapp.com/attachments/1013716252562296833/1085577222481514556/graphic-removebg-preview.png"
          ></img>
        </div>
      </div>
      {/*       <h1 style={{ marginBottom: 50, marginTop: 20 }}>everyname API</h1> */}
      {/*     <div class="hero-split">
        <div class="get-1">
          <div class="text-block">
            <span>
              <br />
              &nbsp;"query":"
            </span>
            <span
              data-colors="#F9CB40"
              data-delay="77"
              data-words="emin.avax,changpeng.bnb,muneeb.btc,gavin.dot,vitalik.eth,dapperlabs.fn,anatoly.sol,breitman.tez,jaekwon.cosmos"
              class="typer"
              style="color: rgb(249, 203, 64);"
            >
              emin
            </span>
            <span>
              ",
              <br />
              &nbsp;"token": "API_KEY"
              <br />
            </span>
          </div>
        </div>
        <div class="get-2">
          <div class="text-block">
            <span class="text-span">
              <br />
              &nbsp;"address":"
            </span>
            <span
              data-colors="#F9CB40"
              data-delay="20"
              data-words="0x5ceBbdD7BA6820ff6cC0fEab04543EdfDDECf2D7,0xb61cfc121e7c19e44e903279ab8717c5083d0775,SP132QXWFJ11WWXPW4JBTM9FP6XE8MZWB8AF206FX,0xd705F75564d89d4B9ac08B69357fc332365cBFb5,0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045,0x9a9f3436400eef97,3v84jbUYvfZqmTFTK1H3B2txnUQZGRLET9nJ9qMjXgkF,tz2SoxV4W1coqzxLaPA5kvWMXACGgA5eR7Bf,stars1nyf9avczgpztphv6cmqpw68ysc3g5am69hwlxj"
              class="typer"
              style="color: rgb(249, 203, 64);"
            >
              0xb61cfc121e7c
            </span>
            <span class="text-span-3">
              ",
              <br />
              &nbsp;"network": "
            </span>
            <span
              data-colors="#F9CB40"
              data-delay="252"
              data-words="avax,bnb,btc,dot,eth,fn,sol,tez,cos"
              class="typer"
              style="color: rgb(249, 203, 64);"
            >
              avax
            </span>
            <span class="text-span-2">
              ",
              <br />
              &nbsp;"token": "API_KEY"
              <br />
            </span>
            <br />
          </div>
        </div>
      </div> */}
    </div>
  );
}
