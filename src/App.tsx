import React, { useEffect, useRef, useState } from "react";
import {
  HashRouter,
  Link,
  Outlet,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Tabs } from "@mantine/core";
import { StatsTracker } from "./components/StatsTracker";
import { ROUTES, SELECTED_BORDER_STYLE, TABS, THEME_TEXT_COLOR } from "./types";
import { getTabFromLocation, TableContext, TenTon2024 } from "./utils";
import { AboutUs } from "./components/AboutUs";
import { CoachingPage } from "./components/CoachingPage";
import { UpdatesNews } from "./components/UpdatesNews";

export const Navigation = () => {
  const panelRef = useRef<HTMLDivElement>(null);
  const [panelHeight, setPanelHeight] = useState<string>("");
  const [contentHeight, setContentHeight] = useState(0);
  const { pathname } = useLocation();
  const [activeTab, setActiveTab] = useState<string | null>(
    getTabFromLocation(pathname),
  );

  useEffect(() => {
    if (panelRef.current) {
      const observer = new ResizeObserver((entries) => {
        for (let entry of entries) {
          setContentHeight(entry.contentRect.height);
        }
      });

      observer.observe(panelRef.current);
      return () => {
        observer.disconnect();
      };
    }
  }, []);

  useEffect(() => {
    setActiveTab(getTabFromLocation(pathname));
  }, [pathname]);

  useEffect(() => {
    if (contentHeight >= window.innerHeight) {
      setPanelHeight("h-max");
    } else {
      setPanelHeight("h-screen");
    }
  }, [contentHeight]);

  return (
    <div className="bg-black">
      <Tabs value={activeTab} variant="default" keepMounted={false}>
        <Tabs.List className="flex flex-row flex-wrap justify-start border-b-0">
          <Link to={ROUTES.ABOUT_US}>
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
          </Link>
          <Link to={ROUTES.STATS_2024}>
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
          </Link>
          <Link to={ROUTES.UPDATES_NEWS}>
            <Tabs.Tab
              className={`px-4 py-3 hover:text-white ${
                activeTab === TABS.UPDATES_NEWS
                  ? SELECTED_BORDER_STYLE
                  : "border-black/100"
              } ${THEME_TEXT_COLOR}`}
              value={TABS.UPDATES_NEWS}
            >
              {TABS.UPDATES_NEWS}
            </Tabs.Tab>
          </Link>
          <Link to={ROUTES.COACHING}>
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
          </Link>
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
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" index element={<AboutUs />} />
          <Route path={ROUTES.ABOUT_US} element={<AboutUs />} />
          <Route path={ROUTES.UPDATES_NEWS} element={<UpdatesNews />} />
          <Route
            path={ROUTES.STATS_2024}
            element={
              <TableContext.Provider value={TenTon2024}>
                <StatsTracker label={`Ten Ton is Number 1's Win/Loss`} />
              </TableContext.Provider>
            }
          />
          <Route path={ROUTES.COACHING} element={<CoachingPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
