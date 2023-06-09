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
    </div>
  );
}
