import { createContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import {
  ARIA,
  ARIA_AND_BELLAGIO,
  BELLAGIO,
  CAESARS_PALACE,
  CET,
  CIRCA_AND_D,
  COSMO,
  CROMWELL,
  DURANGO,
  DayTrip,
  ENCORE,
  EXCALIBUR,
  FLAMINGO,
  FONTAINEBLEAU,
  HORSESHOE,
  LUXOR,
  MANDALAY_BAY,
  MGM,
  MGM_GRAND,
  MIRAGE,
  NEGATIVE_CURRENCY_TEXT_COLOR,
  OSHEAS,
  PALAZZO,
  PALMS,
  PARIS,
  PARK_MGM,
  PLANET_HOLLYWOOD,
  POSITIVE_CURRENCY_TEXT_COLOR,
  RESORTS_WORLD,
  TableRowDataType,
  VENETIAN,
  VP,
  WYNN,
  WindowDimensions,
} from "./types";
import { tenTon2024 } from "./data";

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
    case HORSESHOE:
    case OSHEAS:
    case PARIS:
    case PLANET_HOLLYWOOD:
      return CET;

    case FONTAINEBLEAU:
      return "Fontainebleau Rewards";

    case DURANGO:
      return "Stations";

    case PALMS:
      return "Club Serrano";

    default:
      return location;
  }
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
  tripBuyIns: number[];
  tripColorUps: number[];
  tripSessionHours: number[];
  tripPlayedWith: string[];
  tripTakeaways: string[];
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
  const tripBuyIns: number[] = [];
  const tripColorUps: number[] = [];
  const tripSessionHours: number[] = [];
  const tripPlayedWith: string[] = [];
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
      playedWith,
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
      tripPlayedWith.push(playedWith[i]);
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
    tripPlayedWith,
    tripTakeaways,
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

export const getWindowDimensions = () => {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    height,
    width,
  };
};

export const useWindowDimensions = (): WindowDimensions & {
  heightClass: string;
} => {
  const [windowDimensions, setWindowDimensions] = useState<WindowDimensions>(
    getWindowDimensions(),
  );
  const [heightClass, setHeightClass] = useState<string>(
    getHeightClass(windowDimensions.height),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
      setHeightClass(getHeightClass(getWindowDimensions().height));
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    height: windowDimensions.height,
    width: windowDimensions.width,
    heightClass,
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

export const TenTon2024 = createRowData(
  tenTon2024,
  POSITIVE_CURRENCY_TEXT_COLOR,
  NEGATIVE_CURRENCY_TEXT_COLOR,
);

export const TableContext = createContext(TenTon2024);
