export type DayTrip = [
  number, // Date
  Array<string>, // Location
  Array<string>, // Game Type
  Array<number>, // Buy In
  Array<number>, // Color Up
  Array<number>, // Session Time (Hours)
  Array<string>, // Played With
  Array<string>, // Key Takeaways
];
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
export const LUXOR = "Luxor";
export const MANDALAY_BAY = "Mandalay Bay";
export const MGM = "MGM";
export const MGM_GRAND = "MGM Grand";
export const MIRAGE = "Mirage";
export const OSHEAS = "O'Sheas";
export const PALAZZO = "Palazzo";
export const PALMS = "Palms";
export const PARIS = "Paris";
export const PARK_MGM = "Park MGM";
export const PLANET_HOLLYWOOD = "Planet Hollywood";
export const RESORTS_WORLD = "Resorts World";
export const VENETIAN = "Venetian";
export const VP = "Venetian/Palazzo";
export const WYNN = "Wynn";

export const NEGATIVE_LINE_COLOR_VALUE = "#FF10F0";
export const POSITIVE_LINE_COLOR = "#39FF14";
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
