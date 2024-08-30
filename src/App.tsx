import React, { useEffect, useRef, useState } from "react";
import { Tabs } from "@mantine/core";
import { tenTon2024 } from "./data";
import { StatsTracker } from "./components/StatsTracker";
import {
  NEGATIVE_LINE_COLOR_VALUE,
  NEUTRAL_TEXT_COLOR,
  SELECTED_BORDER_STYLE,
  TABS,
  THEME_TEXT_COLOR,
} from "./types";
import { useWindowDimensions } from "./utils";
import { AboutUs } from "./components/AboutUs";
import { CoachingPage } from "./components/CoachingPage";

export const App = () => {
  const [activeTab, setActiveTab] = useState<string | null>(
    TABS.COLOR_COMIN_IN,
  );

  const aboutUsRef = useRef<HTMLDivElement>(null);
  const coachingRef = useRef<HTMLDivElement>(null);
  const [aboutUsHeight, setAboutUsHeight] = useState<string>("h-screen");
  const [coachingHeight, setCoachingHeight] = useState<string>("h-screen");

  const { height } = useWindowDimensions();

  useEffect(() => {
    if (aboutUsRef?.current) {
      if (aboutUsRef.current.clientHeight >= height) {
        setAboutUsHeight("h-max");
      } else {
        setAboutUsHeight("h-screen");
      }
    }

    if (coachingRef?.current) {
      if (coachingRef.current.clientHeight >= height) {
        setCoachingHeight("h-max");
      } else {
        setCoachingHeight("h-screen");
      }
    }
  }, [aboutUsRef, coachingRef, height]);

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
              activeTab === TABS.STATS_2024
                ? SELECTED_BORDER_STYLE
                : "border-black/100"
            } ${THEME_TEXT_COLOR}`}
            value={TABS.STATS_2024}
          >
            {TABS.STATS_2024}
          </Tabs.Tab>
          <Tabs.Tab
            className={`px-4 py-3 hover:text-white ${
              activeTab === TABS.COLOR_COMIN_IN
                ? SELECTED_BORDER_STYLE
                : "border-black/100"
            } ${THEME_TEXT_COLOR}`}
            value={TABS.COLOR_COMIN_IN}
          >
            {TABS.COLOR_COMIN_IN}
          </Tabs.Tab>
          <Tabs.Tab
            className={`px-4 py-3 hover:text-white ${
              activeTab === TABS.COACHING
                ? SELECTED_BORDER_STYLE
                : "border-black/100"
            } ${THEME_TEXT_COLOR}`}
            value={TABS.COACHING}
          >
            {TABS.COACHING}
          </Tabs.Tab>
        </Tabs.List>

        {activeTab === TABS.STATS_2024 && (
          <Tabs.Panel value={activeTab} className="pt-4">
            <StatsTracker
              dayTrips={tenTon2024}
              label={`Ten Ton is Number 1's Win/Loss`}
              lineColor={NEGATIVE_LINE_COLOR_VALUE}
            />
          </Tabs.Panel>
        )}
        {activeTab === TABS.COLOR_COMIN_IN && (
          <Tabs.Panel
            value={activeTab}
            className={`ml-3 pt-4 ${NEUTRAL_TEXT_COLOR} ${aboutUsHeight}`}
          >
            <AboutUs ref={aboutUsRef} />
          </Tabs.Panel>
        )}
        {activeTab === TABS.COACHING && (
          <Tabs.Panel
            value={activeTab}
            className={`ml-3 pt-4 ${NEUTRAL_TEXT_COLOR} ${coachingHeight}`}
          >
            <CoachingPage ref={coachingRef} />
          </Tabs.Panel>
        )}
      </Tabs>
    </div>
  );
};
