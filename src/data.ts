import dayjs from "dayjs";

import {
  ARIA,
  BELLAGIO,
  CAESARS_PALACE,
  CROMWELL,
  DURANGO,
  DayTrip,
  OSHEAS,
  PALMS,
  PARIS,
  PLANET_HOLLYWOOD,
} from "./types";

export const tenTon2024: Array<DayTrip> = [
  [
    dayjs("2024-07-13").valueOf(),
    [DURANGO],
    ["$10 w/ ATS - DNS"],
    [2000],
    [2459],
    [1],
    ["Craps RN"],
    ["Afternoon / didn't lay 8 for all"],
  ],
  [
    dayjs("2024-07-20").valueOf(),
    [CAESARS_PALACE],
    ["$25 & $50 Crapless w/ ATS"],
    [5000],
    [4775],
    [2.5],
    ["Hypeman"],
    ["Night /  hit tall 1x / up early"],
  ],
  [
    dayjs("2024-07-21").valueOf(),
    [CAESARS_PALACE],
    ["$25 Crapless w/ ATS"],
    [4775],
    [5700],
    [2],
    ["Hypeman"],
    ["Night /  hit tall 1x / up early "],
  ],
  [
    dayjs("2024-07-22").valueOf(),
    [PARIS],
    ["$25 Crapless w/ Repeater"],
    [5000],
    [5021],
    [2.25],
    ["Hyperman"],
    ["Put myself in postion to win / hit repeater 2x"],
  ],
  [
    dayjs("2024-07-23").valueOf(),
    [BELLAGIO],
    ["$50 Crapless w/ ATS - DNS"],
    [5000],
    [2301],
    [0.5],
    ["VegasDaytripper"],
    ["Played too big too fast / no bonus hits"],
  ],
  [
    dayjs("2024-07-25").valueOf(),
    [PARIS],
    ["$15 w/ ATS $25 Crapless w/ Repeater"],
    [5000],
    [0],
    [2],
    ["Wisco330"],
    ["Played from behind the entire night"],
  ],
  [
    dayjs("2024-07-26").valueOf(),
    [PALMS],
    ["$15 w/ ATS - DNS"],
    [3000],
    [5454],
    [2],
    ["Wisco330"],
    ["5 shooters - caught 2 good ones / Hit tall"],
  ],
  [
    dayjs("2024-07-29").valueOf(),
    [PALMS, ARIA],
    ["$15 w/ ATS - DNS", "$25 w/ ATS"],
    [3000, 5000],
    [1075, 7450],
    [2, 2],
    ["GMan", "Solo"],
    ["Slow bleed / 18 Shooters at least / No bonus", "~ 30 rolls / hit small"],
  ],
  [
    dayjs("2024-07-31").valueOf(),
    [CROMWELL, OSHEAS, PARIS],
    [
      "$25 Crapless w/ Repeater",
      "$15 w/ ATS and Fire Bet",
      "$25 Crapless w/ Repeater",
    ],
    [2000, 2000, 4200],
    [100, 0, 7421],
    [1, 0.45, 2],
    ["Hyperman", "Hyperman", "Hyperman"],
    [
      "3 strikes and out / horrible everything",
      "shot 1x / crowded / potential for greatness",
      "~ 21 rolls / hit repeater 3x",
    ],
  ],
  [
    dayjs("2024-08-01").valueOf(),
    [CAESARS_PALACE, PLANET_HOLLYWOOD],
    ["$25 Crapless w/ ATS", "$15 Crapless w/ Repeater "],
    [10000, 10000],
    [9500, 9228],
    [2, 2],
    ["Hypeman", "Hypeman"],
    [
      "set up for greatness / (5) couldnt lay for all / shot was on / shouldnt have left",
      "shot 1x / total grind - tired - loved crew",
    ],
  ],
];
