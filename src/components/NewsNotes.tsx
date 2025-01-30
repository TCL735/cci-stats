import React from "react";
import { NEUTRAL_TEXT_COLOR, THEME_TEXT_COLOR } from "../types";

export const NewsNotes = () => (
  <>
    <AboutUs />
    <UpdatesNews />
  </>
);

export const AboutUs = () => {
  return (
    <div className={`ml-3 pt-4 ${NEUTRAL_TEXT_COLOR}`}>
      <h3 className={`font-extrabold ${THEME_TEXT_COLOR}`}>About Us</h3>
      <br />
      <p className="text-pretty">
        Ten Ton Is Number 1 (or Ten Ton as his friends call him) co-hosts the
        popular gambling podcast{" "}
        <a
          href="https://www.casinotears.com/"
          target="_blank"
          rel="noreferrer"
          className={`${THEME_TEXT_COLOR} hover:text-white`}
        >
          <span>Casino Tears</span>
        </a>{" "}
        with Ed “Roll2Win” Robinson. Casino Tears focuses primarily on craps
        players and serious connoisseurs of the game.
      </p>
      <br />
      <p className="text-pretty">
        Discipline and accountability are issues that every craps player, let
        alone every gambler, struggles with. Accountability, to a much lesser
        extent, is often times conveniently overlooked because it can be a real
        tough pill to swallow. In addition, and in many cases, it might not be
        too convenient or fit too nicely into a player’s self described
        narrative as a “winner” or “ being the best”.
      </p>
      <br />
      <p className="text-pretty">
        That said, since Ten Ton lives in Vegas and is actually “doing the damn
        thing” as a craps player then he better be able to walk the walk. Thus…
        Color-Comin-In (or as we like to call it, CCI.Vegas) was born. CCI is a
        simple interactive way to track win/loss progress for the year. In a
        very Tron inspired way we can see our bank roll travel up into the neon
        green zone or down into the neon pink. The former is preferred of
        course. 😊
      </p>
      <br />
      <p className="text-pretty">
        CCI also tracks other interesting details of the sessions that one may
        find relevant. For example: did I shoot, from where, what set, who I
        played with, how long I played, what prop bets were played etc etc.
        These are all details that I personally find value in looking back on
        during any post session self-evaluation. CCI is very much a work in
        progress. Will we be up over the course of the year? Will we be down? To
        be continued...
      </p>
      <br />
      <p className="text-pretty">
        I would like to thank my friend Vegas Day Tripper for inspiring me with
        this idea and TCL for building and designing the page. I hope the
        transparency of our play will not only provide historical insight but
        more importantly raise topics for deeper investigation that ideally lead
        to valuable lessons along with a positive paydays.
      </p>
      <br />
      <p className="text-pretty">
        If you’re interested in participating with cci.vegas{" "}
        <a
          href="mailto:noseven@casinotears.com"
          target="_blank"
          rel="noreferrer"
          className={`${THEME_TEXT_COLOR} hover:text-white`}
        >
          <span>email us</span>
        </a>{" "}
        or call our vent line @ 229-NoSeven
      </p>
      <br />
      <p>Good Luck Hunting Craps!</p>
      <p>Ten Ton</p>
      <br />
    </div>
  );
};

export const UpdatesNews = () => {
  return (
    <div className={`ml-3 pt-4 ${NEUTRAL_TEXT_COLOR}`}>
      <h3 className={`font-extrabold ${THEME_TEXT_COLOR}`}>Updates & News</h3>
      <br />
      <p className="text-pretty">
        1.21.25 - Version 2.0 of CCI.Vegas goes live/active on Feb 1 just in
        time for the start of the 2025 Craps Hunting Season. The major update to
        this will be incorporating either an image or image link providing the
        classic end of session rack picture proof. The site will work in tandem
        with our{" "}
        <a
          href="https://www.instagram.com/casinotearspodcast/"
          target="_blank"
          rel="noreferrer"
          className={`${THEME_TEXT_COLOR} hover:text-white`}
        >
          <span>Instagram</span>
        </a>{" "}
        which provides "real time” tracking of my casino sessions along with IG
        stories spotlighting the events of the evening with pre and post session
        pics.{" "}
      </p>
      <br />
      <p className="text-pretty">
        Re 2024 - it was a good test run and I learned a lot - most importantly
        tracking is very difficult especially when you’re playing multiple
        sessions while doing a ton of other things like having a full time job,
        a weekly podcast, a life ….etc etc etc. Right before our 3 day class
        experience in Nov was when I fell off with the tracking. Horrible timing
        as I went on to have one helluva end to the 2024 craps hunting season.{" "}
      </p>
      <br />
      <p className="text-pretty">
        Lots and lots of helpful insights were gleaned from the 2024 data
        analysis though. This tracking helped me take an objective look at a few
        factors of my play which ultimately led to some major improvements. I’m
        hoping to be one of the only social media gambling influencers to
        provide this kind of honest/real data because if you’re out there
        believing all these slots, sports betting, black jack etc etc
        influencers are winning players…..well….I have a bridge to sell you and
        my contact info is listed above 😊
      </p>
      <br />
      <p>Ten Ton is Number 1</p>
      <br />
    </div>
  );
};
