import React, { useState } from "react";
import { Tabs } from "@mantine/core";
import { dayTrips2023, dayTrips2024, tenTon2024 } from "./data";
import { StatsTracker } from "./components/StatsTracker";
import { DayTrip, NEGATIVE_LINE_COLOR } from "./types";

const getDayTrips = (value: string | null): DayTrip[] => {
  switch (value) {
    case "2023": {
      return dayTrips2023;
    }
    case "2024": {
      return dayTrips2024;
    }
    case "TenTon": {
      return tenTon2024;
    }
    default:
      return tenTon2024;
  }
};
export const App = () => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
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
              activeTab === "2024"
                ? "border-b-[0.125rem] border-blue-500/100"
                : ""
            }`}
            value="2024"
          >
            VDT 2024
          </Tabs.Tab>
          <Tabs.Tab
            className={`px-4 py-3 ${
              activeTab === "2023"
                ? "border-b-[0.125rem] border-blue-500/100"
                : ""
            }`}
            value="2023"
          >
            VDT 2023
          </Tabs.Tab>
        </Tabs.List>

        {activeTab ? (
          <Tabs.Panel value={activeTab}>
            <StatsTracker
              dayTrips={getDayTrips(activeTab)}
              label={activeTab}
              lineColor={NEGATIVE_LINE_COLOR}
            />
          </Tabs.Panel>
        ) : null}
      </Tabs>
    </div>
  );
};
