import React from "react";
import { NEUTRAL_TEXT_COLOR, THEME_TEXT_COLOR } from "../types";

export const Merch = () => {
  return (
    <div className={`ml-3 pt-4 ${NEUTRAL_TEXT_COLOR}`}>
      <a href="https://www.casinotears.vegas/" target="_blank" rel="noreferrer">
        <h3 className={`font-extrabold ${THEME_TEXT_COLOR}  hover:text-white`}>
          Shop Casino Tears Merchandise
        </h3>
      </a>
      <br />
    </div>
  );
};
