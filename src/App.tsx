import React, { useState } from "react";
import { Tabs } from "@mantine/core";
import { tenTon2024 } from "./data";
import { StatsTracker } from "./components/StatsTracker";
import {
  NEGATIVE_LINE_COLOR_VALUE,
  SELECTED_BORDER_STYLE,
  THEME_TEXT_COLOR,
} from "./types";

export const App = () => {
  const [activeTab, setActiveTab] = useState<string | null>("About");

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
            className={`px-4 py-3 ${
              activeTab === "TenTon"
                ? SELECTED_BORDER_STYLE
                : "border-black/100"
            } ${THEME_TEXT_COLOR}`}
            value="TenTon"
          >
            Ten Ton 2024
          </Tabs.Tab>
          <Tabs.Tab
            className={`px-4 py-3 ${
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
              className={`ml-3 pt-4 ${THEME_TEXT_COLOR} h-screen`}
            >
              <span>Click on a tab to see stats</span>
            </Tabs.Panel>
          ) : (
            <Tabs.Panel value={activeTab} className="pt-4">
              <a
                href="https://www.casinotears.com/"
                target="_blank"
                rel="noreferrer"
                className={`ml-3 ${THEME_TEXT_COLOR}`}
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
