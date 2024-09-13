import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";
import { Tabs } from "@mantine/core";
import { tenTon2024 } from "./data";
import { StatsTracker } from "./components/StatsTracker";
import {
  NEGATIVE_LINE_COLOR_VALUE,
  ROUTES,
  SELECTED_BORDER_STYLE,
  TABS,
  THEME_TEXT_COLOR,
} from "./types";
import { useWindowDimensions } from "./utils";
import { AboutUs } from "./components/AboutUs";
import { CoachingPage } from "./components/CoachingPage";

export const Navigation = () => {
  const { height } = useWindowDimensions();
  const panelRef = useRef<HTMLDivElement>(null);
  const [panelHeight, setPanelHeight] = useState<string>("h-screen");
  const [activeTab, setActiveTab] = useState<string | null>(
    TABS.COLOR_COMIN_IN,
  );

  useEffect(() => {
    if (Number(panelRef?.current?.clientHeight) >= height) {
      setPanelHeight("h-max");
    } else {
      setPanelHeight("h-screen");
    }
  }, [activeTab, height, panelRef]);

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
              activeTab === TABS.COLOR_COMIN_IN
                ? SELECTED_BORDER_STYLE
                : "border-black/100"
            } ${THEME_TEXT_COLOR}`}
            value={TABS.COLOR_COMIN_IN}
          >
            <Link to={ROUTES.ABOUT_US}>{TABS.COLOR_COMIN_IN}</Link>
          </Tabs.Tab>
          <Tabs.Tab
            className={`px-4 py-3 hover:text-white ${
              activeTab === TABS.STATS_2024
                ? SELECTED_BORDER_STYLE
                : "border-black/100"
            } ${THEME_TEXT_COLOR}`}
            value={TABS.STATS_2024}
          >
            <Link to={ROUTES.STATS_2024}>{TABS.STATS_2024}</Link>
          </Tabs.Tab>
          <Tabs.Tab
            className={`px-4 py-3 hover:text-white ${
              activeTab === TABS.COACHING
                ? SELECTED_BORDER_STYLE
                : "border-black/100"
            } ${THEME_TEXT_COLOR}`}
            value={TABS.COACHING}
          >
            <Link to={ROUTES.COACHING}>{TABS.COACHING}</Link>
          </Tabs.Tab>
        </Tabs.List>
        <Tabs.Panel className={`${panelHeight}`} value={activeTab!}>
          <div ref={panelRef}>
            <Outlet />
          </div>
        </Tabs.Panel>
      </Tabs>
    </div>
  );
};

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" index element={<AboutUs />} />
          <Route path={ROUTES.ABOUT_US} element={<AboutUs />} />
          <Route
            path={ROUTES.STATS_2024}
            element={
              <StatsTracker
                dayTrips={tenTon2024}
                label={`Ten Ton is Number 1's Win/Loss`}
                lineColor={NEGATIVE_LINE_COLOR_VALUE}
              />
            }
          />
          <Route path={ROUTES.COACHING} element={<CoachingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
