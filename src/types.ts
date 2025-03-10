export type DayTrip2024 = [
  number, // Date - 0
  Array<string>, // Location - 1
  Array<string>, // Game Type - 2
  Array<number>, // Buy In - 3
  Array<number>, // Color - 4
  Array<number>, // Session Time (Hours) - 5
  Array<string>, // Crew - 6
  Array<string>, // Bonus - 7
  Array<string>, // Takeaways - 8
];

export type DayTrip = {
  date: number;
  location: string[];
  gameType: string[];
  featureBet: string[];
  buyIn: number[];
  colorUp: number[];
  crew: string[];
  dealers: string[];
  floorBox: string[];
  notes: string[];
};

export type HandleConsecutiveRepeatValueAs = "first" | "last" | "always";
export type TableRowDataType = string | number;
export type WindowDimensions = {
  height: number;
  width: number;
};

export const AIRPORT = "Airport";
export const ARIA = "Aria";
export const ARIA_AND_BELLAGIO = "Aria & Bellagio";
export const BELLAGIO = "Bellagio";
export const CAESARS_PALACE = "Caesars Palace";
export const CASINO_ROYALE = "Casino Royale";
export const CET = "CET";
export const CIRCA_AND_D = "Cira and D";
export const COSMO = "Cosmopolitan";
export const CROMWELL = "Cromwell";
export const DURANGO = "Durango";
export const EL_CORTEZ = "El Cortez";
export const ENCORE = "Encore";
export const EXCALIBUR = "Excalibur";
export const FLAMINGO = "Flamingo";
export const FONTAINEBLEAU = "Fontainebleau";
export const HARRAHS = "Harrah's";
export const HORSESHOE = "Horseshoe";
export const LUXOR = "Luxor";
export const MANDALAY_BAY = "Mandalay Bay";
export const MGM = "MGM";
export const MGM_GRAND = "MGM Grand";
export const MIRAGE = "Mirage";
export const MOHEGAN_AT_VIRGIN = "Mohegan @ Virgin";
export const OSHEAS = "O'Sheas";
export const PALAZZO = "Palazzo";
export const PALMS = "Palms";
export const PARIS = "Paris";
export const PARK_MGM = "Park MGM";
export const PLANET_HOLLYWOOD = "Planet Hollywood";
export const RESORTS_WORLD = "Resorts World";
export const RIO = "Rio";
export const VENETIAN = "Venetian";
export const VP = "Venetian/Palazzo";
export const WYNN = "Wynn";

export const NEGATIVE_LINE_COLOR_VALUE = "#FF10F0";
export const POSITIVE_LINE_COLOR_VALUE = "#39FF14";
export const THEME_COLOR_VALUE = "#C48125";
export const NEUTRAL_COLOR_VALUE = "#C5C5C5";
export const TOOLTIP_COLOR_VALUE = "#3B3B3B";

export const NEGATIVE_CURRENCY_TEXT_COLOR = "text-[#FF10F0]";
export const POSITIVE_CURRENCY_TEXT_COLOR = "text-[#39FF14]";
export const THEME_TEXT_COLOR = "text-[#C48125]";
export const NEUTRAL_TEXT_COLOR = "text-[#C5C5C5]";
export const THEME_TOOLTIP_COLOR = "bg-[#C48125]";
export const SELECTED_BORDER_STYLE = "border-b-[0.2rem] border-[#C48125]/100";

export const ECHARTS_SETTINGS = {
  replaceMerge: ["series"],
};

export const INSTAGRAM_LINK = "https://www.instagram.com/casinotearspodcast/";
export const THE_PODCAST_LINK = "https://www.casinotears.com/subscribe/";

export const enum TABS {
  STATS_2025 = "2025 Stats",
  STATS_2024 = "2024 Stats",
  INSTAGRAM = "Instagram",
  NEWS_NOTES = "News & Notes",
  THE_PODCAST = "The Podcast",
  MERCH = "Merch",
  COACHING = "Coaching",
}

export const enum ROUTES {
  STATS_2025 = "/stats/2025",
  STATS_2024 = "/stats/2024",
  INSTAGRAM = "/instagram",
  NEWS_NOTES = "/news-notes",
  THE_PODCAST = "/podcast",
  MERCH = "/merch",
  COACHING = "/coaching",
}
