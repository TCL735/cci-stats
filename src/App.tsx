import React, { useEffect, useRef, useState } from "react";
import { Tabs } from "@mantine/core";
import { tenTon2024 } from "./data";
import { StatsTracker } from "./components/StatsTracker";
import {
  NEGATIVE_LINE_COLOR_VALUE,
  NEUTRAL_TEXT_COLOR,
  SELECTED_BORDER_STYLE,
  THEME_TEXT_COLOR,
} from "./types";
import { useWindowDimensions } from "./utils";

export const App = () => {
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<string | null>("About");
  const [backgroundHeight, setBackgroundHeight] = useState<string>("h-screen");
  const { height } = useWindowDimensions();

  useEffect(() => {
    if (aboutUsRef?.current) {
      if (aboutUsRef.current.clientHeight >= height) {
        setBackgroundHeight("h-max");
      } else {
        setBackgroundHeight("h-screen");
      }
    }
  }, [aboutUsRef, height]);

  return (
    <div className="bg-black">
      <Tabs
        value={activeTab}
        onChange={setActiveTab}
        variant="default"
        keepMounted={false}
      >
        <Tabs.List className="flex flex-row flex-wrap justify-start border-b-0">
          <Tabs.Tab
            className={`px-4 py-3 hover:text-white ${
              activeTab === "TenTon"
                ? SELECTED_BORDER_STYLE
                : "border-black/100"
            } ${THEME_TEXT_COLOR}`}
            value="TenTon"
          >
            Ten Ton 2024
          </Tabs.Tab>
          <Tabs.Tab
            className={`px-4 py-3 hover:text-white ${
              activeTab === "About" ? SELECTED_BORDER_STYLE : "border-black/100"
            } ${THEME_TEXT_COLOR}`}
            value="About"
          >
            About
          </Tabs.Tab>
        </Tabs.List>

        {activeTab ? (
          activeTab === "About" ? (
            <Tabs.Panel
              value={activeTab}
              className={`ml-3 pt-4 ${NEUTRAL_TEXT_COLOR} ${backgroundHeight}`}
            >
              <div ref={aboutUsRef}>
                <h3 className={`font-extrabold ${THEME_TEXT_COLOR}`}>
                  About us
                </h3>
                <br />
                <p className="text-pretty">
                  Ten Ton Is Number 1 (or Ten Ton as his friends call him) is
                  co-host of the popular gambling podcast Casino Tears which
                  focuses primarily on craps players and serious connoisseurs of
                  the game.
                </p>
                <br />
                <p className="text-pretty">
                  Discipline and accountability are issues that every craps
                  player let alone every gambler struggles with. Accountability,
                  to a much lesser extent, is often times conveniently
                  overlooked because it can be a real tough pill to swallow. In
                  addition, and in many cases, it might not be too convenient or
                  fit too nicely into a player’s self described narrative as a
                  “winner” or “the best” (read social media/content /strategy
                  hawker).
                </p>
                <br />
                <p className="text-pretty">
                  That said, if we’re gonna live in Vegas and talk about craps
                  and do the damn thing then we better be able to walk the walk.
                  Thus… Color-Comin-In (or as we like to call it, CCI.Vegas) was
                  born. CCI is a simple interactive way to track win/loss
                  progress for the year. In a very Tron inspired way we can see
                  our bank roll travel up into the neon green zone or down into
                  the neon pink. The later is preferred of course 😊
                </p>
                <br />
                <p className="text-pretty">
                  CCI also tracks other interesting details of the sessions that
                  one may find relevant. For example: if I shoot or don’t shoot,
                  who I played with, how long I played, what prop bets were
                  played etc etc. These are all details that I personally find
                  value in looking back on during any post session
                  self-evaluation. CCI is very much a work in progress. Will we
                  be up over the course of the year? Will we be down? To be
                  continued...
                </p>
                <br />
                <p className="text-pretty">
                  I would like to thank my friend Vegas Day Tripper for
                  inspiring me with this idea and TCL for building and designing
                  the page. I hope the transparency of our play will not only
                  provide historical insight but more importantly raise topics
                  for deeper investigation that ideally lead to valuable lessons
                  along with a positive paydays.
                </p>
                <br />
                <p className="text-pretty">
                  If you’re interested in participating with cci.vegas email us
                  or call our vent line @ 229-NoSeven
                </p>
                <br />
                <p>Good Luck Hunting Craps!</p>
                <p>Ten Ton</p>
              </div>
            </Tabs.Panel>
          ) : (
            <Tabs.Panel value={activeTab} className="pt-4">
              <a
                href="https://www.casinotears.com/"
                target="_blank"
                rel="noreferrer"
                className={`ml-3 ${THEME_TEXT_COLOR} hover:text-white`}
              >
                <span>Casino Tears Podcast</span>
              </a>
              <StatsTracker
                dayTrips={tenTon2024}
                label={`Ten Ton is Number 1's Win/Loss`}
                lineColor={NEGATIVE_LINE_COLOR_VALUE}
              />
            </Tabs.Panel>
          )
        ) : null}
      </Tabs>
    </div>
  );
};
