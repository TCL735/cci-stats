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
import {
  INSTAGRAM_LINK,
  POSITIVE_CURRENCY_TEXT_COLOR,
  ROUTES,
  SELECTED_BORDER_STYLE,
  TABS,
  THEME_TEXT_COLOR,
  THE_PODCAST_LINK,
} from "./types";
import { getTabFromLocation, Table2025Context, TenTon2025 } from "./utils";
import { NewsNotes } from "./components/NewsNotes";
import { ThePodcast } from "./components/ThePodcast";
import { Instagram } from "./components/Instagram";

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

  const handleTabChange = (tab: string | null) => {
    if (tab === TABS.INSTAGRAM) {
      window.open(INSTAGRAM_LINK, "_blank", "noreferrer");
    } else if (tab === TABS.THE_PODCAST) {
      window.open(THE_PODCAST_LINK, "_blank", "noreferrer");
    }
  };
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
      <Tabs
        value={activeTab}
        variant="default"
        keepMounted={false}
        onChange={handleTabChange}
      >
        <Tabs.List className="flex flex-nowrap flex-row justify-start border-b-0">
          <Link to={ROUTES.STATS_2025}>
            <Tabs.Tab
              className={`px-4 py-3 hover:text-white ${
                activeTab === TABS.STATS_2025
                  ? SELECTED_BORDER_STYLE
                  : "border-black/100"
              } ${THEME_TEXT_COLOR}`}
              value={TABS.STATS_2025}
            >
              {TABS.STATS_2025}
            </Tabs.Tab>
          </Link>
          <Link to={ROUTES.INSTAGRAM}>
            <Tabs.Tab
              className={`px-4 py-3 hover:text-white ${
                activeTab === TABS.INSTAGRAM
                  ? SELECTED_BORDER_STYLE
                  : "border-black/100"
              } ${POSITIVE_CURRENCY_TEXT_COLOR}`}
              value={TABS.INSTAGRAM}
            >
              {TABS.INSTAGRAM}
            </Tabs.Tab>
          </Link>
          <Link to={ROUTES.NEWS_NOTES}>
            <Tabs.Tab
              className={`px-4 py-3 hover:text-white ${
                activeTab === TABS.NEWS_NOTES
                  ? SELECTED_BORDER_STYLE
                  : "border-black/100"
              } ${THEME_TEXT_COLOR}`}
              value={TABS.NEWS_NOTES}
            >
              {TABS.NEWS_NOTES}
            </Tabs.Tab>
          </Link>
          <Link to={ROUTES.THE_PODCAST}>
            <Tabs.Tab
              className={`px-4 py-3 hover:text-white ${
                activeTab === TABS.THE_PODCAST
                  ? SELECTED_BORDER_STYLE
                  : "border-black/100"
              } ${THEME_TEXT_COLOR}`}
              value={TABS.THE_PODCAST}
            >
              {TABS.THE_PODCAST}
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

const Stats2025 = () => (
  <Table2025Context.Provider value={TenTon2025}>
    <StatsTracker
      label={`Ten Ton is Number 1's Win/Loss`}
      endLabelOffset={[-50, -15]}
    />
  </Table2025Context.Provider>
);

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="/" index element={<Stats2025 />} />
          <Route path={ROUTES.STATS_2025} element={<Stats2025 />} />
          <Route path={ROUTES.INSTAGRAM} element={<Instagram />} />
          <Route path={ROUTES.NEWS_NOTES} element={<NewsNotes />} />
          <Route path={ROUTES.THE_PODCAST} element={<ThePodcast />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
