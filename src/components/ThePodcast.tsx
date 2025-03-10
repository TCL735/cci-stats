import React from "react";
import {
  NEUTRAL_TEXT_COLOR,
  THEME_TEXT_COLOR,
  THE_PODCAST_LINK,
} from "../types";

export const ThePodcast = () => {
  return (
    <div className={`ml-3 pt-4 ${NEUTRAL_TEXT_COLOR}`}>
      <a
        href={THE_PODCAST_LINK}
        target="_blank"
        rel="noreferrer"
        className={`${THEME_TEXT_COLOR} hover:text-white`}
      >
        <img alt="casino tears podcast" src="/Casino_Tears_Podcast.png"></img>
      </a>
    </div>
  );
};
