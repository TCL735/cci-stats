import { createContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import {
  ARIA_AND_BELLAGIO,
  ARIA,
  BELLAGIO,
  CAESARS_PALACE,
  CET,
  CIRCA_AND_D,
  COSMO,
  CROMWELL,
  DayTrip,
  DayTrip2024,
  DURANGO,
  ENCORE,
  EXCALIBUR,
  FLAMINGO,
  FONTAINEBLEAU,
  HORSESHOE,
  LUXOR,
  MANDALAY_BAY,
  MGM_GRAND,
  MGM,
  MIRAGE,
  MOHEGAN_AT_VIRGIN,
  NEGATIVE_CURRENCY_TEXT_COLOR,
  OSHEAS,
  PALAZZO,
  PALMS,
  PARIS,
  PARK_MGM,
  PLANET_HOLLYWOOD,
  POSITIVE_CURRENCY_TEXT_COLOR,
  RESORTS_WORLD,
  RIO,
  ROUTES,
  TableRowDataType,
  TABS,
  VENETIAN,
  VP,
  WindowDimensions,
  WYNN,
  HARRAHS,
} from "./types";
import { tenTon2024, tenTon2025 } from "./data";

export const getRewardsProgram = (location: string): string => {
  switch (location) {
    case ARIA:
    case ARIA_AND_BELLAGIO:
    case BELLAGIO:
    case EXCALIBUR:
    case LUXOR:
    case MANDALAY_BAY:
    case MGM:
    case MGM_GRAND:
    case PARK_MGM:
      return MGM;

    case PALAZZO:
    case VENETIAN:
    case VP:
      return "Venetian Rewards";

    case COSMO:
      return "Identity";

    case CIRCA_AND_D:
      return "One";

    case RESORTS_WORLD:
      return "Genting";

    case MIRAGE:
      return "Unity";

    case ENCORE:
    case WYNN:
      return "Wynn";

    case CAESARS_PALACE:
    case CROMWELL:
    case FLAMINGO:
    case HARRAHS:
    case HORSESHOE:
    case OSHEAS:
    case PARIS:
    case PLANET_HOLLYWOOD:
      return CET;

    case FONTAINEBLEAU:
      return "Fontainebleau Rewards";

    case DURANGO:
      return "my|Rewards Boarding Pass";

    case PALMS:
      return "Club Serrano";

    case MOHEGAN_AT_VIRGIN:
      return "Momentum";

    case RIO:
      return "Rio Rewards";

    default:
      return location;
  }
};

export interface TableRowsData2024 {
  dayTrips: DayTrip2024[];
  wholeTripColors: string[];
  locationColors: string[];
  tripNumbers: number[];
  tripDates: number[];
  tripPrograms: string[];
  tripLocations: string[];
  tripGameTypes: string[];
  tripBuyIns: number[];
  tripColorUps: number[];
  tripSessionHours: number[];
  tripCrew: string[];
  tripBonus: string[];
  tripTakeaways: string[];
  tripResults: number[];
  totalBuyIns: number;
  totalColorUps: number;
  totalWinLoss: number;
}

export const create2024RowData = (
  dayTrips: DayTrip2024[],
  positiveColor = "black",
  negativeColor = "red",
): TableRowsData2024 => {
  const wholeTripColors: string[] = [];
  const locationColors: string[] = [];
  const tripNumbers: number[] = [];
  const tripDates: number[] = [];
  const tripPrograms: string[] = [];
  const tripLocations: string[] = [];
  const tripGameTypes: string[] = [];
  const tripBuyIns: number[] = [];
  const tripColorUps: number[] = [];
  const tripSessionHours: number[] = [];
  const tripCrew: string[] = [];
  const tripBonus: string[] = [];
  const tripTakeaways: string[] = [];
  const tripResults: number[] = [];

  dayTrips.forEach((daytrip, index) => {
    const [
      dateValue,
      locations,
      gameTypes,
      buyIns,
      colorUps,
      sessionHours,
      crew,
      bonus,
      takeaways,
    ] = daytrip;

    const results = colorUps.map(
      (result: number, index: number) => result - buyIns[index],
    );

    const resultsTotal = results.reduce((total: number, result: number) => {
      return (total += result);
    }, 0);

    for (let i = locations.length - 1; i >= 0; i -= 1) {
      wholeTripColors.push(resultsTotal >= 0 ? positiveColor : negativeColor);
      locationColors.push(results[i] >= 0 ? positiveColor : negativeColor);
      tripNumbers.push(index + 1);
      tripDates.push(dateValue);
      tripPrograms.push(getRewardsProgram(locations[i]));
      tripLocations.push(locations[i]);
      tripGameTypes.push(gameTypes[i]);
      tripBuyIns.push(buyIns[i]);
      tripColorUps.push(colorUps[i]);
      tripSessionHours.push(sessionHours[i]);
      tripCrew.push(crew[i]);
      tripBonus.push(bonus[i]);
      tripTakeaways.push(takeaways[i]);
      tripResults.push(results[i]);
    }
  });

  const totalBuyIns = tripBuyIns.reduce(
    (total, amount) => (total += amount),
    0,
  );

  const totalColorUps = tripColorUps.reduce(
    (total, amount) => (total += amount),
    0,
  );

  const totalWinLoss = tripResults.reduce(
    (total, amount) => (total += amount),
    0,
  );

  return {
    dayTrips,
    wholeTripColors,
    locationColors,
    tripNumbers,
    tripDates,
    tripPrograms,
    tripLocations,
    tripGameTypes,
    tripBuyIns,
    tripColorUps,
    tripSessionHours,
    tripCrew,
    tripBonus,
    tripTakeaways,
    tripResults,
    totalBuyIns,
    totalColorUps,
    totalWinLoss,
  };
};

export interface TableRowsData {
  dayTrips: DayTrip[];
  wholeTripColors: string[];
  locationColors: string[];
  tripNumbers: number[];
  tripDates: number[];
  tripPrograms: string[];
  tripLocations: string[];
  tripGameTypes: string[];
  tripFeatureBets: string[];
  tripBuyIns: number[];
  tripColorUps: number[];
  tripCrew: string[];
  tripDealers: string[];
  tripFloorBoxes: string[];
  tripNotes: string[];
  tripResults: number[];
  totalBuyIns: number;
  totalColorUps: number;
  totalWinLoss: number;
}

export const createRowData = (
  dayTrips: DayTrip[],
  positiveColor = "black",
  negativeColor = "red",
): TableRowsData => {
  const wholeTripColors: string[] = [];
  const locationColors: string[] = [];
  const tripNumbers: number[] = [];
  const tripDates: number[] = [];
  const tripPrograms: string[] = [];
  const tripLocations: string[] = [];
  const tripGameTypes: string[] = [];
  const tripFeatureBets: string[] = [];
  const tripBuyIns: number[] = [];
  const tripColorUps: number[] = [];
  const tripCrew: string[] = [];
  const tripDealers: string[] = [];
  const tripFloorBoxes: string[] = [];
  const tripNotes: string[] = [];
  const tripResults: number[] = [];

  dayTrips.forEach((daytrip, index) => {
    const {
      date: dateValue,
      location,
      gameType,
      featureBet,
      buyIn,
      colorUp,
      crew,
      dealers,
      floorBox,
      notes,
    } = daytrip;

    const results = colorUp.map(
      (result: number, index: number) => result - buyIn[index],
    );

    const resultsTotal = results.reduce((total: number, result: number) => {
      return (total += result);
    }, 0);

    for (let i = location.length - 1; i >= 0; i -= 1) {
      wholeTripColors.push(resultsTotal >= 0 ? positiveColor : negativeColor);
      locationColors.push(results[i] >= 0 ? positiveColor : negativeColor);
      tripNumbers.push(index + 1);
      tripDates.push(dateValue);
      tripPrograms.push(getRewardsProgram(location[i]));
      tripLocations.push(location[i]);
      tripGameTypes.push(gameType[i]);
      tripFeatureBets.push(featureBet[i]);
      tripBuyIns.push(buyIn[i]);
      tripColorUps.push(colorUp[i]);
      tripCrew.push(crew[i]);
      tripDealers.push(dealers[i]);
      tripFloorBoxes.push(floorBox[i]);
      tripNotes.push(notes[i]);
      tripResults.push(results[i]);
    }
  });

  const totalBuyIns = tripBuyIns.reduce(
    (total, amount) => (total += amount),
    0,
  );

  const totalColorUps = tripColorUps.reduce(
    (total, amount) => (total += amount),
    0,
  );

  const totalWinLoss = tripResults.reduce(
    (total, amount) => (total += amount),
    0,
  );

  return {
    dayTrips,
    wholeTripColors,
    locationColors,
    tripNumbers,
    tripDates,
    tripPrograms,
    tripLocations,
    tripGameTypes,
    tripFeatureBets,
    tripBuyIns,
    tripColorUps,
    tripCrew,
    tripDealers,
    tripFloorBoxes,
    tripNotes,
    tripResults,
    totalBuyIns,
    totalColorUps,
    totalWinLoss,
  };
};

export const dateFormatter = (d: TableRowDataType) => {
  const result = dayjs(d).format("M/DD/YYYY");
  if (result === "Invalid Date") {
    return "";
  }
  return result;
};

export const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export const currencyFormatter = (v: TableRowDataType): string => {
  const f = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
  return f.format(v as number);
};

export const getTabFromLocation = (pathname: string): TABS => {
  switch (pathname) {
    case ROUTES.STATS_2025:
      return TABS.STATS_2025;

    case ROUTES.STATS_2024:
      return TABS.STATS_2024;

    case ROUTES.INSTAGRAM:
      return TABS.INSTAGRAM;

    case ROUTES.NEWS_NOTES:
      return TABS.NEWS_NOTES;

    case ROUTES.THE_PODCAST:
      return TABS.THE_PODCAST;

    case ROUTES.MERCH:
      return TABS.MERCH;

    case ROUTES.COACHING:
      return TABS.COACHING;

    default:
      return TABS.STATS_2025;
  }
};

export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    height,
    width,
  };
};

const INITIAL_WINDOW_DIMENSIONS = {
  height: 0,
  width: 0,
};

export const useTrackerDimensions = (
  element: Element,
): WindowDimensions & {
  heightClass: string;
} => {
  const [trackerDimensions, setTrackerDimensions] = useState<WindowDimensions>(
    INITIAL_WINDOW_DIMENSIONS,
  );

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setTrackerDimensions({
          height: entry.contentRect.height,
          width: entry.contentRect.width,
        });
      }
    });

    if (element) {
      observer.observe(element);
    }

    return () => {
      observer.disconnect();
    };
  }, [element]);

  return {
    height: trackerDimensions.height,
    width: trackerDimensions.width,
    heightClass: getHeightClass(trackerDimensions.height),
  };
};

export const getHeightClass = (height: number): string => {
  if (height >= 800) {
    return "h-[710px]";
  }
  if (height >= 760) {
    return "h-[670px]";
  }
  if (height >= 720) {
    return "h-[630px]";
  }
  if (height >= 680) {
    return "h-[590px]";
  }
  if (height >= 640) {
    return "h-[550px]";
  }
  if (height >= 600) {
    return "h-[510px]";
  }
  return "h-[470px]";
};

export const TenTon2024 = create2024RowData(
  tenTon2024,
  POSITIVE_CURRENCY_TEXT_COLOR,
  NEGATIVE_CURRENCY_TEXT_COLOR,
);

export const TenTon2025 = createRowData(
  tenTon2025,
  POSITIVE_CURRENCY_TEXT_COLOR,
  NEGATIVE_CURRENCY_TEXT_COLOR,
);

export const Table2024Context = createContext(TenTon2024);
export const Table2025Context = createContext(TenTon2025);
