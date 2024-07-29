import React, { useState } from "react";
import { Tabs } from "@mantine/core";
import { tenTon2024 } from "./data";
import { StatsTracker } from "./components/StatsTracker";
import { NEGATIVE_LINE_COLOR } from "./types";

export const App = () => {
  const [activeTab, setActiveTab] = useState<string | null>("About");

  return (
    <div className="App">
      <Tabs value={activeTab} onChange={setActiveTab}>
        <Tabs.List className="flex flex-row flex-wrap justify-start border-b-[0.125rem]">
          <Tabs.Tab
            className={`px-4 py-3 ${
              activeTab === "TenTon"
                ? "border-b-[0.125rem] border-blue-500/100"
                : ""
            }`}
            value="TenTon"
          >
            Ten Ton 2024
          </Tabs.Tab>
          <Tabs.Tab
            className={`px-4 py-3 ${
              activeTab === "About"
                ? "border-b-[0.125rem] border-blue-500/100"
                : ""
            }`}
            value="About"
          >
            About
          </Tabs.Tab>
        </Tabs.List>

        {activeTab ? (
          activeTab === "About" ? (
            <Tabs.Panel value={activeTab} className="ml-3 pt-4">
              <div>Click on a tab to see stats</div>
            </Tabs.Panel>
          ) : (
            <Tabs.Panel value={activeTab} className="pt-4">
              <a
                href="https://www.casinotears.com/"
                target="_blank"
                rel="noreferrer"
                className="ml-3 text-[#c48125]"
              >
                <span>Casino Tears Podcast</span>
              </a>
              <StatsTracker
                dayTrips={tenTon2024}
                label={`Ten Ton is Number 1's Win/Loss`}
                lineColor={NEGATIVE_LINE_COLOR}
              />
            </Tabs.Panel>
          )
        ) : null}
      </Tabs>
    </div>
  );
};
