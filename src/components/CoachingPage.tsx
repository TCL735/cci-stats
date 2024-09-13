import React from "react";
import { NEUTRAL_TEXT_COLOR, THEME_TEXT_COLOR } from "../types";

export const CoachingPage = () => {
  return (
    <div className={`ml-3 pt-4 ${NEUTRAL_TEXT_COLOR}`}>
      <h3 className={`font-extrabold ${THEME_TEXT_COLOR}`}>Coaching</h3>
      <br />
      <p className="text-pretty">
        There are many different coaches all with different coaching styles.
        Ideally, we suggest matching your current level of play and knowledge to
        the coach that bests suits these parameters. Some coaches cover it all
        from basics to advance but each have their own specializatrion. This can
        be, for example: Dice Throwing, Dice Setting, Dice Reading, Betting,
        Game Play Operating Systems and Strategy. Finding the right coach also
        depends on the personality match - some only teach “their” system or way
        whiles others focus more on a bespoke or custom approach. Identify what
        you’re trying to learn and then talk to the coach to see if there’s a
        match.
      </p>
      <br />
      <p className="text-pretty">
        Below is a list (in alphabetical order) of coaches & or classes/events
        all worth checking out (ie vetted). We believe each coach has their
        particular merits and strengths. This list is a work in progress and
        will be updated over time. Last updated 8/30/24.
      </p>
      <br />
      <a
        href="https://www.axispowercraps.com/"
        target="_blank"
        rel="noreferrer"
        className={`${THEME_TEXT_COLOR} hover:text-white`}
      >
        <span>Axis Power Craps (Heavy Haltom) / Texas</span>
      </a>
      <br />
      <br />
      <a
        href="https://www.dicecoach.com/"
        target="_blank"
        rel="noreferrer"
        className={`${THEME_TEXT_COLOR} hover:text-white`}
      >
        <span>Dice Coach (Beau Parker) / Las Vegas</span>
      </a>
      <br />
      <br />
      <a
        href="https://wagemembers.com/tony-leo/"
        target="_blank"
        rel="noreferrer"
        className={`${THEME_TEXT_COLOR} hover:text-white`}
      >
        <span>WAGE (Tony Leo) / Las Vegas</span>
      </a>
      <br />
      <br />
      <p className="text-pretty">
        To any and all coaches & schools: If you would like to be listed as a
        coach and are willing to be vetted by a Casino Tears Rep please feel
        free to contact us. We don’t endorse what we haven’t tried and/or
        experienced ourselves.
      </p>
      <br />
      <p className="text-pretty">
        To any student looking to learn or take a lesson please feel free to
        contact us at noseven@casinotears.com. If you would like a personal
        referral feel free to reach out as we are happy to help and offer our
        opinion.{" "}
      </p>
      <br />
    </div>
  );
};
