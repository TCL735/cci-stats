import React from "react";
import { INSTAGRAM_LINK, NEUTRAL_TEXT_COLOR, THEME_TEXT_COLOR } from "../types";

export const Instagram = () => {
  return (
    <div className={`ml-3 pt-4 ${NEUTRAL_TEXT_COLOR}`}>
      <a
        href={INSTAGRAM_LINK}
        target="_blank"
        rel="noreferrer"
        className={`${THEME_TEXT_COLOR} hover:text-white`}
      >
        <span>
          FOLLOW ON{" "}
          <img
            height={100}
            width={100}
            alt="instagram logo"
            src="/instagram-logo-name-scaled.jpg"
          />
          FOR LIVE UPDATES
        </span>
      </a>
    </div>
  );
};
