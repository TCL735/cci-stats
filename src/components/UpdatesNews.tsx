import React from "react";
import { NEUTRAL_TEXT_COLOR, THEME_TEXT_COLOR } from "../types";

export const UpdatesNews = () => {
  return (
    <div className={`ml-3 pt-4 ${NEUTRAL_TEXT_COLOR}`}>
      <h3 className={`font-extrabold ${THEME_TEXT_COLOR}`}>Updates & News</h3>
      <br />
      <p className="text-pretty">
        1.21.25 - Version 2.0 of CCI.Vegas should be live/active on Feb 1 just
        in time for the start of the 2025 Craps Hunting Season. The major update
        to this will be incorporating either an image or image link providing
        the classic end of session rack picture proof. The site will work in
        tandem with our{" "}
        <a
          href=" https://www.instagram.com/casinotearspodcast/"
          target="_blank"
          rel="noreferrer"
          className={`${THEME_TEXT_COLOR} hover:text-white`}
        >
          <span>Instagram</span>
        </a>{" "}
        which provides more or less real time tracking of my casino sessions
        with stories from where I play along with pre and post session pics.{" "}
      </p>
      <br />
      <p className="text-pretty">
        2024 was a good test run and I learned a lot - most importantly tracking
        is difficult especially when you’re playing multiple sessions while
        doing a ton of other things on top of getting sick. Right before our 3
        day class experience is when I slacked and then it was quickly downhill
        from there. It was almost like when you stop going to the gym and then
        have a tough time starting again. In retrospect it turns out this was a
        really inopportune time to fall off as I had one helluva 4th quarter
        (Nov thru Jan) with a massive 5 figure run. This would have looked oh so
        impressive on the graph with those neon green spikes.{" "}
      </p>
      <br />
      <p className="text-pretty">
        Regardless, lots and lots of helpful data was gleaned from the results
        that were analyzed in 2024. Craps is a work in progress and this
        definitely helped me take an objective look at various factors at play.
        I’m hoping to be one of the only ones out here providing this data as
        social media gambling influencers only show you the good….not the
        bad…and definitely not the ugly.
      </p>
      <br />
      <p>Ten Ton</p>
      <br />
    </div>
  );
};
