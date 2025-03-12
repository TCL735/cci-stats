import dayjs from "dayjs";

import {
  ARIA,
  BELLAGIO,
  CAESARS_PALACE,
  CROMWELL,
  DURANGO,
  DayTrip,
  DayTrip2024,
  FLAMINGO,
  FONTAINEBLEAU,
  HARRAHS,
  HORSESHOE,
  MOHEGAN_AT_VIRGIN,
  OSHEAS,
  PALMS,
  PARIS,
  PLANET_HOLLYWOOD,
  RIO,
} from "./types";

export const tenTon2024: Array<DayTrip2024> = [
  [
    dayjs("2024-07-13").valueOf(),
    [DURANGO],
    ["$10 w/ ATS - DNS"],
    [2000],
    [2459],
    [1],
    ["Craps RN"],
    ["Y-HS"],
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
    ["Y-HT"],
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
    ["Y-HT"],
    ["Night /  hit tall 1x / up early "],
  ],
  [
    dayjs("2024-07-22").valueOf(),
    [PARIS],
    ["$25 Crapless w/ Repeater"],
    [5000],
    [5021],
    [2.25],
    ["Hypeman"],
    ["Y- R2x"],
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
    ["N"],
    ["Played too big too fast / no bonus hits"],
  ],
  [
    dayjs("2024-07-25").valueOf(),
    [PARIS],
    ["$15 w/ ATS + $25 Crapless w/ Repeater"],
    [5000],
    [0],
    [2],
    ["Wisco330"],
    ["N"],
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
    ["Y-HT"],
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
    ["N", "Y-HS"],
    ["Slow bleed / 18 Shooters at least / No bonus", "~ 30 rolls / hit small"],
  ],
  [
    dayjs("2024-07-31").valueOf(),
    [CROMWELL, OSHEAS, PARIS],
    [
      "$25 w/ ATS and Fire Bet",
      "$15 w/ ATS and Fire Bet",
      "$25 Crapless w/ Repeater",
    ],
    [2000, 2000, 4200],
    [100, 0, 7421],
    [1, 0.45, 2],
    ["Hypeman", "Hypeman", "Hypeman"],
    ["N", "N", "Y- R3x"],
    [
      "3 strikes and out / horrible everything",
      "shot 1x / crowded / potential for greatness",
      "~ 21 rolls / hit repeater 3x",
    ],
  ],
  [
    dayjs("2024-08-01").valueOf(),
    [ARIA, CAESARS_PALACE, PLANET_HOLLYWOOD],
    ["$25 Crapless w/ ATS", "$25 Crapless w/ ATS", "$15 Crapless w/ Repeater"],
    [5000, 10000, 10000],
    [3600, 9500, 9228],
    [0.45, 2, 2],
    ["Hypeman", "Hypeman", "Hypeman"],
    ["N", "Y-HT", "N"],
    [
      "no magic / nothing working/ should've called it",
      "set up for greatness / (5) couldnt lay for all / shot was on / shouldnt have left",
      "shot 1x / total grind - tired - loved crew",
    ],
  ],
  [
    dayjs("2024-08-07").valueOf(),
    [HORSESHOE],
    ["$15 Crapless w/ Repeater"],
    [10000],
    [5840],
    [1.5],
    ["Hypeman"],
    ["N"],
    ["shit show / 15 shooters / 3 strikes / all<10"],
  ],
  [
    dayjs("2024-08-08").valueOf(),
    [PLANET_HOLLYWOOD, PARIS],
    ["$15 w/ ATS", "$15 Crapless w/ Repeater"],
    [9228, 10000],
    [9910, 10615],
    [2.5, 1],
    ["Hypeman", "Byrdman / Hypeman"],
    ["N", "Y- R1x"],
    [
      "bittersweet /  shot 2x/ down big early / ~ 35+ roll 64-63 Set",
      "Byrdman hot hand ~ 20+ rolls /",
    ],
  ],
  [
    dayjs("2024-08-09").valueOf(),
    [PLANET_HOLLYWOOD],
    ["$15 w/ ATS"],
    [9900],
    [16037],
    [2.5],
    ["Byrdman / Hypeman / EnerJing"],
    ["Y-HA"],
    ["EnerJing hit ATS from straight out / 1x shot decent ~10"],
  ],
  [
    dayjs("2024-08-10").valueOf(),
    [CAESARS_PALACE],
    ["$25 Crapless w/ ATS + $25 w /Repeater"],
    [9500],
    [9545],
    [1],
    ["Byrdman"],
    ["Y- R3x"],
    ["shot 4x / HW set / 19 roller w/9 8's/ shouldve left up 12%"],
  ],
  [
    dayjs("2024-08-11").valueOf(),
    [PLANET_HOLLYWOOD],
    ["$15 w/ ATS"],
    [10000],
    [7000],
    [1.5],
    ["Byrdman / EnerJing"],
    ["N"],
    ["shot 2x / too crowded / needed more time to dial in"],
  ],
  [
    dayjs("2024-08-16").valueOf(),
    [CAESARS_PALACE],
    ["$25 w/ATS $25 w /Repeater"],
    [9500],
    [11919],
    [1],
    ["G-Ray"],
    ["Y- R5x"],
    [
      "shot 2x / HW set / 30+ roller hit the repeater 2,5,9,10,12/ should have only bet big on self / table 401 is the shit / Kobayashi activated",
    ],
  ],
  [
    dayjs("2024-08-27").valueOf(),
    [PLANET_HOLLYWOOD, PLANET_HOLLYWOOD],
    ["$25 w/ ATS", "$25 w/ ATS"],
    [10000, 10000],
    [10860, 20235],
    [1.5, 1.5],
    [
      "Justice Jen / Jester / Special Delivery",
      "Special Delivery / Jester / Dean The Machine / Justice Jen",
    ],
    ["Y-HT", "Y-HA"],
    [
      "solid crew to shoot with /shot 1x  ~ 18 / Hit tall / HW set",
      "shot 1x  ~ teens / HW set / needed 3&10 / DTM w/41 roller Made'em All 100$HT and 250H4",
    ],
  ],
  [
    dayjs("2024-08-28").valueOf(),
    [PLANET_HOLLYWOOD, PARIS],
    ["$25 w/ ATS", "$50 w/ ATS"],
    [10000, 10000],
    [11426, 10110],
    [2.5, 0.5],
    ["Hypeman + big crew from the last couple days", "Geedub"],
    ["Y-HS", "N"],
    [
      "shot 1x very late / poor rol dbl pitched 6-1 HW set / Hype had roll of night made 4k on it just needed 12 for all",
      "shot 1x  ~ teens / HW set / needed 4&12 / late freezing in there had trouble griping the dice / ",
    ],
  ],
  [
    dayjs("2024-08-29").valueOf(),
    [PLANET_HOLLYWOOD],
    ["$25 w/ ATS"],
    [10000],
    [6000],
    [3],
    ["Hypeman / EnerJing / Yo Chef / Jester"],
    ["N"],
    [
      "shot 2x / horrible HW + 42-62 / horrorshow / tired stayed too long played hail mary at end was incomplete",
    ],
  ],
  [
    dayjs("2024-08-30").valueOf(),
    [CAESARS_PALACE, ARIA],
    ["$50 w/ Repeater", "$25 w/ ATS"],
    [10000, 10000],
    [9500, 10500],
    [2.5, 2],
    ["Solo", "Solo"],
    ["N", "Y-HT2x"],
    [
      "shot 3x / horrible mutliple sets /  felt great shot just wasnt on 3 strikes and out",
      "shot 6x / glacier cold to start / down big / 2 massive rolls with 64/32 / Hit tall twice",
    ],
  ],
  [
    dayjs("2024-09-02").valueOf(),
    [PLANET_HOLLYWOOD],
    ["$15 w/ ATS"],
    [7950],
    [6303],
    [2.5],
    ["Hypeman / EnerJing"],
    ["N"],
    [
      "shot 4x / no set worked / switched tables / grindy grindy mess could never get going / weird energy",
    ],
  ],
  [
    dayjs("2024-09-06").valueOf(),
    [ARIA],
    ["$25 w/ ATS"],
    [5000],
    [13165],
    [1],
    ["The TableMaker"],
    ["Y-HS+HA"],
    [
      "shot 2x / fav table / starteded solid hit hop 9 with 64 32 / never down / Hit small / stayed for newbie who Hit All / Layed 9 for 24 dice hit a girl's hand and landed on 9 for the big win!",
    ],
  ],
  [
    dayjs("2024-09-07").valueOf(),
    [CAESARS_PALACE, BELLAGIO],
    ["$25 w/ ATS", "$25 w/ ATS"],
    [9500, 5000],
    [6635, 6670],
    [1.5, 1.5],
    ["The TableMaker / Pro Craps / BoGust / Alan G", "The TableMaker"],
    ["N", "Y-HS"],
    [
      "Table / shot 2x / Looked good just couldn't get over the hump / Perfect scenario 5 shooters / Table cool very nice crew",
      "Shot twice / Second was best HW set / Hit small couldnt close it / Best roll at the table",
    ],
  ],
  [
    dayjs("2024-09-08").valueOf(),
    [ARIA],
    ["$25 w/ ATS"],
    [5000],
    [5011],
    [1],
    ["The TableMaker"],
    ["N"],
    ["Shot twice 3x / favorite table / 3 diff sets couldnt get over the hump"],
  ],
  [
    dayjs("2024-09-16").valueOf(),
    [ARIA],
    ["$25 w/ ATS"],
    [10000],
    [10205],
    [1],
    ["Solo"],
    ["Y-HT"],
    [
      "Shot 1x / great groupd of dealers / HW set / solid roll ~ teens / was tired and grumpy so didnt stay",
    ],
  ],
  [
    dayjs("2024-09-19").valueOf(),
    [PALMS],
    ["$15 w/ ATS - DNS"],
    [2500],
    [3012],
    [0.5],
    ["Solo"],
    ["Y-HT"],
    [
      "DNS even tho had position / 3 shooters random Hit tall / 2 reds after stick change / was tired & cold and up 20% so kobayashi",
    ],
  ],
  [
    dayjs("2024-09-23").valueOf(),
    [PLANET_HOLLYWOOD],
    ["$15 w/ ATS"],
    [10000],
    [7870],
    [1],
    ["Hypeman"],
    ["N"],
    [
      "shot 1x  PSO /  6-1 HW set / perfect small ball play early on / 4 PSO in row / betting too big too early on randoms",
    ],
  ],
  [
    dayjs("2024-09-24").valueOf(),
    [PARIS],
    ["$25 w/ ATS $25 Crapless"],
    [10000],
    [3500],
    [1.5],
    ["Hypeman"],
    ["N"],
    [
      "shot 5x / HW + 64/32 / mechanics + betting mistakes / SR1 54/45 2x solid rolls but all wrong betting moves",
    ],
  ],
  [
    dayjs("2024-10-04").valueOf(),
    [MOHEGAN_AT_VIRGIN],
    ["$15 w/ Repeater"],
    [3000],
    [2450],
    [1.5],
    ["Dice Setters"],
    ["Y-R1x"],
    [
      "*.775 DICE* shot 2x / 64/32 then HW / mechanics felt great true results / SL2 &1 / soft bounce dice sat down quick / worth playing again / mellow good vibe / boths 7's comaneci's",
    ],
  ],
  [
    dayjs("2024-10-05").valueOf(),
    [DURANGO, DURANGO],
    ["$15 w/ ATS", "$15  Craps + Crapless both w/ ATS "],
    [2400, 10000],
    [0, 10103],
    [1.5, 1],
    ["Dr Sean / Craps RN", "Solo"],
    ["Y-HS", "N"],
    [
      "shot 3x /HW 64/32 21/32 / table tad bouncy / midnight 3x + aces with 21 set / biggest leak still qualifying + betting too much on randoms + chasing a bit / patience to wait for dice not there / tired / good vibe in casino",
      "shot 2x craps / 2x crapless64/32 workhorse w/ TT2HTD got up early / switched to crapless bet small on all shooters / decent rolls experimented with21/32 set one number away from both sides on both rolls/ biggest win was mindset patience",
    ],
  ],
  [
    dayjs("2024-10-10").valueOf(),
    [MOHEGAN_AT_VIRGIN],
    ["$15 w/ Repeater"],
    [5000],
    [6710],
    [1.5],
    ["Dice Setters"],
    ["Y-R1x"],
    [
      "shot 8x + SL2 / multiple sets 21/23 produced / unforgiving was how Jeff described it / lobs worked best / all rolls ~ < 10 except one able to get to table max (3K) on 10 and layed both 4 & 10 on repeater side",
    ],
  ],
  [
    dayjs("2024-10-12").valueOf(),
    [PLANET_HOLLYWOOD],
    ["$15 w/ ATS"],
    [7750],
    [7410],
    [2],
    ["Jester / Texarkajon"],
    ["N"],
    [
      "SL2 / multiple sets 14/12, 21/32 / choppy but got expected results / 7 when dice kicking to left / total grind game / never up",
    ],
  ],
  [
    dayjs("2024-10-13").valueOf(),
    [CAESARS_PALACE],
    ["$50 w/ Repeater"],
    [10000],
    [11115],
    [1],
    ["Texarkajon"],
    ["Y-R4x"],
    [
      "each shot 2x / 1/4/12 got exepected results / first roll in double digits / Texarkajon at least a 26 roller 4,5,9,10 repeaters which i layed due to being down at start of roll / high pt up 1.7",
    ],
  ],
  [
    dayjs("2024-10-14").valueOf(),
    [PLANET_HOLLYWOOD, PARIS],
    ["$15 w/ ATS", "$25 Crapless"],
    [7400, 3500],
    [8527, 2000],
    [1, 0.5],
    ["Secret Asian Man", "Secret Asian Man"],
    ["Y-HT2x", "N"],
    [
      "shot 3x / 1/4/12 got desired results / experimenting with new hybrid don't system / was 12 away from making all / left when it got too crowded / easy night was never down",
      "Absolute horrorshow + shitshow /  3 strikes and I was out / never had a roll longer than 4 / The curse at this crapless table is real / What voodoo preistess do I need to see about this",
    ],
  ],
  [
    dayjs("2024-10-16").valueOf(),
    [RIO],
    ["$15 w/ ATS"],
    [2400],
    [0],
    [2],
    ["MadHatter"],
    ["N"],
    [
      "18 shooters total / shot 3x / maye 2 rolls total over 10 barely / table bounce soft not great / didnt bet according to buy in / should've been < 200/shooter instead of my 600 on myself / tired frustrated waiting for this spot to open / solidified my stance on never playing a table with more than 3-4 players on it/ if stayed true to the TT2HT i would have broke even",
    ],
  ],
  [
    dayjs("2024-10-17").valueOf(),
    [ARIA],
    ["$25 w/ ATS"],
    [10000],
    [10075],
    [2.5],
    ["Solo"],
    ["Y-HT&S"],
    [
      "shot 4x/ 3rd time comeback roll 42/62 set epic roll needed 12 / dont bettor situation on podcast",
    ],
  ],
  [
    dayjs("2024-10-20").valueOf(),
    [ARIA],
    ["$25 w/ ATS"],
    [10000],
    [11025],
    [3],
    ["Solo"],
    ["Y-HT2x"],
    [
      "fav table mostly to myself / got lots of practice in/ needed 4 for the all layed it for 4k/ sets worked 42/62 / 64/32 / 21/32 14/12 all giving expected results / great session / minimal spewing",
    ],
  ],
  [
    dayjs("2024-10-28").valueOf(),
    [CAESARS_PALACE],
    ["$25 w/ Repeater"],
    [5100],
    [8150],
    [2],
    ["Moonshine Melvin / Wisco330"],
    ["Y-R3x"],
    [
      "shot primarily one set 21/32 got exepected results / 3 of 3 rolls double digits one was high 20's with 4 points made / stayed true to the TT2HTD betting system w/ mulitple repeaters made but imporatntly also paid w/ lay bets / played repeaters like a beethoven / last roll was a sayanora dealor roll / also minimized random shooter betting - mostly made my own way",
    ],
  ],
  [
    dayjs("2024-10-29").valueOf(),
    [HORSESHOE],
    ["$15 Crapless w/ no & w/ ATS"],
    [10000],
    [12106],
    [1.5],
    ["Ed / Mudslide / Sweet Lou"],
    ["Y-HS"],
    [
      "shot 1x at each table / 21/32 zero contril looked like shit prolly ave roll count / Ed had a great roll needed the 10 for all / lay it for 3k / continued to bet small on randoms / side note never playing a table w/ a bonus",
    ],
  ],
];

export const tenTon2025: Array<DayTrip> = [
  {
    date: dayjs("2025-01-04").valueOf(),
    location: [CAESARS_PALACE],
    gameType: ["$25 Craps"],
    featureBet: ["Repeater"],
    buyIn: [20000],
    colorUp: [12545],
    crew: ["Bump Jon"],
    dealers: ["A"],
    floorBox: ["A+"],
    notes: ["1k repeaters / forcing game / deviated from plan"],
  },
  {
    date: dayjs("2025-01-16").valueOf(),
    location: [HARRAHS],
    gameType: ["$25 Crapless"],
    featureBet: ["Repeater"],
    buyIn: [3000],
    colorUp: [4000],
    crew: ["Oz"],
    dealers: ["B"],
    floorBox: ["B"],
    notes: ["tabel nice - 54/45 worked shot 2x"],
  },
  {
    date: dayjs("2025-01-17").valueOf(),
    location: [ARIA],
    gameType: ["$25 Crapless"],
    featureBet: ["ATS"],
    buyIn: [3000],
    colorUp: [14025],
    crew: ["G Ray"],
    dealers: ["A+"],
    floorBox: ["A+"],
    notes: ["capitalized on RR big roll / >70k shooter/ hit all"],
  },
  {
    date: dayjs("2025-01-19").valueOf(),
    location: [PLANET_HOLLYWOOD],
    gameType: ["$25 Craps"],
    featureBet: ["ATS"],
    buyIn: [2500],
    colorUp: [2000],
    crew: ["Special Delivery"],
    dealers: ["B-"],
    floorBox: ["B"],
    notes: ["lukewarm table / shot not on / couple sides hit"],
  },
  {
    date: dayjs("2025-01-20").valueOf(),
    location: [ARIA],
    gameType: ["$25 Crapless"],
    featureBet: ["ATS"],
    buyIn: [10000],
    colorUp: [14140],
    crew: ["Solo"],
    dealers: ["A"],
    floorBox: ["A+"],
    notes: ["capitalized on RR big roll / virgin shooter"],
  },
  {
    date: dayjs("2025-01-25").valueOf(),
    location: [PLANET_HOLLYWOOD],
    gameType: ["$15 Crapless"],
    featureBet: ["None"],
    buyIn: [2000],
    colorUp: [320],
    crew: ["220 Inside"],
    dealers: ["B"],
    floorBox: ["B"],
    notes: ["lukewarm table / shot not on / couple sides hit"],
  },
  {
    date: dayjs("2025-01-26").valueOf(),
    location: [ARIA],
    gameType: ["$25 Crapless"],
    featureBet: ["ATS"],
    buyIn: [10000],
    colorUp: [18825],
    crew: ["Solo"],
    dealers: ["A+"],
    floorBox: ["A+"],
    notes: ["5/6 6/5 set / big roll / needed 3 for all / "],
  },
  {
    date: dayjs("2025-01-31").valueOf(),
    location: [ARIA],
    gameType: ["$25 Crapless"],
    featureBet: ["ATS"],
    buyIn: [15000],
    colorUp: [78],
    crew: ["Solo"],
    dealers: ["A"],
    floorBox: ["A"],
    notes: [
      "overall cold table / overextended presses with very few double digit rolls / called for a very conservative grindy game / shot was not on",
    ],
  },
  {
    date: dayjs("2025-02-01").valueOf(),
    location: [CAESARS_PALACE, BELLAGIO],
    gameType: ["$25 Craps", "$50 Crapless"],
    featureBet: ["Repeater", "ATS"],
    buyIn: [10000, 5000],
    colorUp: [55, 23],
    crew: ["Solo", "Solo"],
    dealers: ["B", "A+"],
    floorBox: ["B", "A"],
    notes: [
      "played big / forcing game / not at fav table",
      "played big / tight landing zone",
    ],
  },
  {
    date: dayjs("2025-02-02").valueOf(),
    location: [ARIA],
    gameType: ["$25 Crapless"],
    featureBet: ["ATS"],
    buyIn: [10000],
    colorUp: [42660],
    crew: ["Solo"],
    dealers: ["A+"],
    floorBox: ["A+"],
    notes: ["5/6 6/5 set w/flip / 4 rolls / hit all then small 2x"],
  },
  {
    date: dayjs("2025-02-09").valueOf(),
    location: [FONTAINEBLEAU],
    gameType: ["$25 Craps"],
    featureBet: ["ATS"],
    buyIn: [2000],
    colorUp: [2209],
    crew: ["Lazy Dog"],
    dealers: ["A"],
    floorBox: ["B"],
    notes: [
      "shot 3x / 14ft table / hard kick to the left on all 7's / I want to like the place",
    ],
  },
  {
    date: dayjs("2025-02-10").valueOf(),
    location: [ARIA, FLAMINGO],
    gameType: ["$25 Craps", "$15 Crapless"],
    featureBet: ["ATS", "ATS / Repeater"],
    buyIn: [10000, 3800],
    colorUp: [8000, 15],
    crew: ["Solo", "59 Chevy"],
    dealers: ["A+", "C"],
    floorBox: ["A+", "B-"],
    notes: [
      "shot 1 time / could've been tighter on randoms",
      "insane kick bounce to table / crew slow unenthusiastic / ATS limit 100",
    ],
  },
  {
    date: dayjs("2025-02-11").valueOf(),
    location: [PALMS],
    gameType: ["$15 Craps"],
    featureBet: ["ATS"],
    buyIn: [1900],
    colorUp: [20],
    crew: ["Bump Jon"],
    dealers: ["A"],
    floorBox: ["B+"],
    notes: [
      "new felts / very beatable table / true bounce / cool crew / close to crushing this table multiple times / ATS limit 100/25/100",
    ],
  },
  {
    date: dayjs("2025-02-19").valueOf(),
    location: [PALMS],
    gameType: ["$15 Craps"],
    featureBet: ["ATS"],
    buyIn: [2500],
    colorUp: [2566],
    crew: ["Bump Jon, Madhatter"],
    dealers: ["B"],
    floorBox: ["A+"],
    notes: [
      "old school grindy session shot 3x / floor gets extra credit great dude",
    ],
  },
  {
    date: dayjs("2025-02-20").valueOf(),
    location: [PALMS],
    gameType: ["$15 Craps"],
    featureBet: ["ATS"],
    buyIn: [2500],
    colorUp: [2420],
    crew: ["Bump Jon, Madhatter"],
    dealers: ["B+"],
    floorBox: ["A+"],
    notes: [
      "another grindy session / hit small / tables are true / thins out after 11",
    ],
  },
  {
    date: dayjs("2025-02-21").valueOf(),
    location: [ARIA],
    gameType: ["$25 Craps/Crapless"],
    featureBet: ["ATS"],
    buyIn: [8000],
    colorUp: [0],
    crew: ["Solo"],
    dealers: ["A+"],
    floorBox: ["A+"],
    notes: ["swinging for fences / day late and a dollar short on everything"],
  },
  {
    date: dayjs("2025-02-24").valueOf(),
    location: [PALMS],
    gameType: ["$25 Craps"],
    featureBet: ["ATS"],
    buyIn: [2400],
    colorUp: [5880],
    crew: ["Bump Jon"],
    dealers: ["B"],
    floorBox: ["B"],
    notes: ["grindy / exact opposite results for set using / bj hit small"],
  },
  {
    date: dayjs("2025-02-26").valueOf(),
    location: [PALMS],
    gameType: ["$15 Craps"],
    featureBet: ["ATS"],
    buyIn: [14900],
    colorUp: [17450],
    crew: ["Bump Jon"],
    dealers: ["B+"],
    floorBox: ["A"],
    notes: [
      "back table / must shoot into hook / bj hit small / floors Giang + Chris great",
    ],
  },
  {
    date: dayjs("2025-02-27").valueOf(),
    location: [ARIA],
    gameType: ["$25 Craps/Crapless"],
    featureBet: ["ATS"],
    buyIn: [10000],
    colorUp: [0],
    crew: ["Solo"],
    dealers: ["A+"],
    floorBox: ["A+"],
    notes: ["swinging for fences / day late and a dollar short on everything"],
  },
  {
    date: dayjs("2025-02-28").valueOf(),
    location: [PALMS],
    gameType: ["$15 Craps"],
    featureBet: ["ATS"],
    buyIn: [10000],
    colorUp: [0],
    crew: ["Bump Jon"],
    dealers: ["A-"],
    floorBox: ["B"],
    notes: [
      "large betting / across / Hit Small 12 away from All / Experimenting with sets",
    ],
  },
  {
    date: dayjs("2025-03-01").valueOf(),
    location: [PALMS],
    gameType: ["$15 Craps"],
    featureBet: ["ATS"],
    buyIn: [2000],
    colorUp: [0],
    crew: ["Bump Jon"],
    dealers: ["A-"],
    floorBox: ["B"],
    notes: [""],
  },
  {
    date: dayjs("2025-03-02").valueOf(),
    location: [PALMS],
    gameType: ["$15 Craps"],
    featureBet: ["ATS"],
    buyIn: [5000],
    colorUp: [5020],
    crew: ["Bump Jon"],
    dealers: ["A"],
    floorBox: ["A"],
    notes: [
      "hit small 2x / missed all by 12 2x / working within 3 different 5th column dice sets 21/12 62/26 vs 56/65 / floors chris and gianx super cool chill on the players side. Ivan, Alan G, Pono, Craps RN there",
    ],
  },
  {
    date: dayjs("2025-03-03").valueOf(),
    location: [PALMS],
    gameType: ["$15 Craps"],
    featureBet: ["ATS"],
    buyIn: [5000],
    colorUp: [10220],
    crew: ["Bump Jon"],
    dealers: ["A"],
    floorBox: ["A"],
    notes: [
      "hit small 2x / missed all by 12 2x / working within 3 different 5th column dice sets 21/12 62/26 vs 56/65 / floors chris and gianx super cool chill on the players side. Ivan, Alan G, Pono, Craps RN there",
    ],
  },
  {
    date: dayjs("2025-03-06").valueOf(),
    location: [PALMS],
    gameType: ["$15 Craps"],
    featureBet: ["ATS"],
    buyIn: [5000],
    colorUp: [3500],
    crew: ["Bump Jon, Ed"],
    dealers: ["A"],
    floorBox: ["A"],
    notes: [
      "grindy / mistake made was not leaving when only down 200 / loss preventable",
    ],
  },
  {
    date: dayjs("2025-03-07").valueOf(),
    location: [BELLAGIO],
    gameType: ["$25 Crapless"],
    featureBet: ["ATS"],
    buyIn: [5000],
    colorUp: [1000],
    crew: ["Ed, Moonshine, Stentplacer"],
    dealers: ["B"],
    floorBox: ["B"],
    notes: [
      "exactly why I don't play in daytime / tired zero mental game / great table just cold / loss was preventable",
    ],
  },
  {
    date: dayjs("2025-03-08").valueOf(),
    location: [PALMS],
    gameType: ["$25 Craps"],
    featureBet: ["ATS"],
    buyIn: [13500],
    colorUp: [11000],
    crew: ["Class"],
    dealers: ["A"],
    floorBox: ["A"],
    notes: [
      "*** outlier DNS / gave action to casino / floor Mace / great dude",
    ],
  },
  {
    date: dayjs("2025-03-09").valueOf(),
    location: [PALMS],
    gameType: ["$25 Craps"],
    featureBet: ["ATS"],
    buyIn: [11000],
    colorUp: [7000],
    crew: ["Class"],
    dealers: ["A"],
    floorBox: ["A"],
    notes: [
      "*** outlier DNS / gave action to casino / floor Mace / great dude",
    ],
  },
  {
    date: dayjs("2025-03-10").valueOf(),
    location: [PALMS],
    gameType: ["$15 Craps"],
    featureBet: ["ATS"],
    buyIn: [7000],
    colorUp: [18230],
    crew: ["Ed, J-Bird, Moonshine +"],
    dealers: ["A"],
    floorBox: ["A"],
    notes: ["shot 5x 56/65 / detailed on podcast / farve"],
  },
];
