import React from "react";
import { NEUTRAL_TEXT_COLOR } from "../types";

export const Merch = () => {
  return (
    <div className={`ml-3 pt-4 ${NEUTRAL_TEXT_COLOR}`}>
      <a
        href="https://www.casinotears.vegas/3mg/"
        target="_blank"
        rel="noreferrer"
        className={`flex flex-row justify-start w-[400px] gap-[40px]`}
      >
        <div>
          <div>MONTHLY MYSTERY MERCH</div>
          <div>GIVEAWAY - Casino Tears Podcast</div>
          <div>Official Store</div>
          <div className={`text-gray-500`}>casinotears.vegas</div>
        </div>
        <div>
          <img
            width={100}
            height={100}
            alt="casino tears podcast"
            src="/Logo_CasinoTears_1400.jpg"
          ></img>
        </div>
      </a>
      <br />
    </div>
  );
};
