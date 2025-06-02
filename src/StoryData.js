// src/StoryData.js

export const storyFinnish = [
  "Leo: Äiti! Minulla on nälkä! <br> Äiti: Kohta syödään. <br> Leo: Mutta minulla on nälkä nyt! <br> Äiti: Etsi ruokaa metsästä. <br> Leo: Okei. <br> Viiden minuutin päästä Leo tulee takaisin. <br> Leo: Äiti! Minä löysin pähkinän. <br> Äiti: Se on kastanja, pähkinän näköinen mutta eri asia. <br> Orava juoksee Leon luo ja ottaa kastanjan. <br> Leo: Äiti! Orava varasti kastanjan. <br> Isä: Ruoka on valmista! <br> Perhe syö soijamakkaraa. <br> Isä syö lihamakkaraa. Hän on allerginen soijalle. <br> Kaikki ovat väsyneitä. <br> Orava makaa oksalla. <br> Se pieraisee niin että sen häntä heilahtaa. Loppu. ❤️"
];

export const storyFinnishWords = storyFinnish[0].split(" ");

export const storyEnglish = [
  "Leo: Mom! I'm hungry! <br> Mom: We'll eat soon. <br> Leo: But I'm hungry now! <br> Mom: Go find food in the forest. <br> Leo: Okay. <br> Five minutes later Leo comes back. <br> Leo: Mom! I found a nut. <br> Mom: It's a chestnut, looks like a nut but is another thing. <br> A squirrel runs to Leo and takes the chestnut. <br> Leo: Mom! The squirrel stole the chestnut. <br> Dad: Food is ready! <br> The family eats soy sausage. <br> Dad eats meat sausage. He is allergic to soy. <br> Everyone is tired. <br> The squirrel lies on a branch. <br> It farts so that its tail flaps. The end. ❤️"
];

export const storyEnglishWords = storyEnglish[0].split(" ");

export const storySpokenFinnish = [
  "Leo: Äiti! Mul on nälkä! <br> Äiti: Koht syödään. <br> Leo: Mut mul on nälkä nyt! <br> Äiti: Eti ruokaa metästä. <br> Leo: Okei. <br> Viis minsaa myöhemmi Leo tulee takas. <br> Leo: Äiti! Mä löysin pähkinän. <br> Äiti: Se on kastanja, pähkinän näköne mut eri juttu. <br> Orava juoksee Leon luo ja nappaa kastanjan. <br> Leo: Äiti! Orava vei kastanjan. <br> Isä: Ruoka on valmist! <br> Perhe syö soijamakkaraa. <br> Isä syö lihamakkaraa. Se on allergine soijal. <br> Kaikki on väsyneit. <br> Orava makaa oksal. <br> Se pierasee nii et sen häntä heilahtaa. Loppu. ❤️"
];

export const storySpokenFinnishWords = storySpokenFinnish[0].split(" ");

const splitByBr = (wordArray) => {
  const lines = [];
  let currentLine = [];

  wordArray.forEach((word) => {
    if (word === '<br>') {
      lines.push(currentLine);
      currentLine = [];
    } else {
      currentLine.push(word);
    }
  });

  if (currentLine.length > 0) {
    lines.push(currentLine);
  }

  return lines;
};

export const finnishLines = splitByBr(storyFinnishWords);
export const englishLines = splitByBr(storyEnglishWords);
export const spokenLines = splitByBr(storySpokenFinnishWords);



export const FinnishToEnglishTranslationsIndex = [
  // Line 0: "Leo: Äiti! Minulla on nälkä!" -> "Leo: Mom! I'm hungry!"
  [0, [1, 2], 3],

  // Line 1: "Äiti: Kohta syödään." -> "Mom: We'll eat soon."
  [2, [0, 1], 3],

  // Line 2: "Leo: Mutta minulla on nälkä nyt!" -> "Leo: But I'm hungry now!"
  [0, [1, 2], 3, 4],

  // Line 3: "Äiti: Etsi ruokaa metsästä." -> "Mom: Go find food in the forest."
  [0, 1, [2, 3, 4]],

  // Line 4: "Leo: Okei." -> "Leo: Okay."
  [0, 1]
];


export const FinnishTranslationIndex = [
  // Line 0: Leo: Äiti! Minulla on nälkä!
  [0, 1, [2, 3], 4],

  // Line 1: Äiti: Kohta syödään.
  [0, 1, 2],

  // Line 2: Leo: Mutta minulla on nälkä nyt!
  [0, 1, [2, 3], 4, 5],

  // Line 3: Äiti: Etsi ruokaa metsästä.
  [0, 1, 2, 3],

  // Line 4: Leo: Okei.
  [0, 1],

  // Line 5: Viiden minuutin päästä Leo tulee takaisin.
  [0, 1, 2, 3, 4, 5],

  // Line 6: Leo: Äiti! Minä löysin pähkinän.
  [0, 1, 2, 3, 4],

  // Line 7: Äiti: Se on kastanja, pähkinän näköinen mutta eri asia.
  // Line 7: Mom: It's a chestnut, looks like a nut but is another thing.

  [0, [1, 2], 3, 4, 5, 6, 7],

  // Line 8: Orava juoksee Leon luo ja ottaa kastanjan.
  // Line 8: A squirrel runs to Leo and takes the chestnut.
  [0, 1, 2, 3, 4, 5, 6],
  
  // Line 9: Leo: Äiti! Orava varasti kastanjan.
  // Line 9: Leo: Mom! The squirrel stole the chestnut.
  [0, 1, 2, 3, 4],

  // Line 10: Isä: Ruoka on valmista!
  [0, 1, 2, 3],

  // Line 11: Perhe syö soijamakkaraa.
  [0, 1, 2],

  // Line 12: Isä syö lihamakkaraa. Hän on allerginen soijalle.
    // Line 12: Dad eats meat sausage. He is allergic to soy.

  [0, 1, 2, 3, 4, 5, 6],

  // Line 13: Kaikki ovat väsyneitä.
  [0, 1, 2],

  // Line 14: Orava makaa oksalla.
  [0, 1, 2],

  // Line 15: Se pieraisee niin että sen häntä heilahtaa.
    // Line 15: It farts so that its tail flaps.

  [0, 1, 2, 3, 4, 5, 6, 7]
];

export const EnglishTranslationIndex = [
  // Line 0: Leo: Mom! I'm hungry!
  [0, 1, 2, 3],

  // Line 1: Mom: We'll eat soon.
  [0, 3, [1, 2]],

  // Line 2: Leo: But I'm hungry now!
  [0, 1, 2, 3, 4],

  // Line 3: Mom: Go find food in the forest.
  [0, [1, 2], 3, [4, 5, 6]],

  // Line 4: Leo: Okay.
  [0, 1],

  // Line 5: Five minutes later Leo comes back.
  [0, 1, 2, 3, 4, 5],

  // Line 6: Leo: Mom! I found a nut.
  [0, 1, 2, 3, [4, 50]],

  // Line 7: Mom: It's a chestnut, looks like a nut but is another thing.
  [0, 1, [2, 3], [6,7], [4,5], 8, 10, 11],

  // Line 8: A squirrel runs to Leo and takes the chestnut.
  [[0, 1], 2, 4, 3, 5, 6, [7, 8]],

  // Line 9: Leo: Mom! The squirrel stole the chestnut.
  [0, 1, [2, 3], 4, [5, 6]],

  // Line 10: Dad: Food is ready!
  [0, 1, 2, 3],

  // Line 11: The family eats soy sausage.
  [[0, 1], 2, [3, 4]],

  // Line 12: Dad eats meat sausage. He is allergic to soy.
  [0, 1, [2, 3], 4, 5, 6, [7, 8]],

  // Line 13: Everyone is tired.
  [0, 1, 2],

  // Line 14: The squirrel lies on a branch.
  [[0, 1], 2, [3, 4, 5]],

  // Line 15: It farts so that its tail flaps.
  [0, 1, 2, 3, 4, 5, 6, [7, 8]]

];

export const words = [" Leo,",
    " äiti,",
    " minulla",
    " on",
    " nälkä",
    " äiti,",
    " kohta",
    " syödään,",
    " leo,",
    " mutta",
    " minulla",
    " on",
    " nälkä",
    " nyt,",
    " äiti,",
    " etsi",
    " ruokaa",
    " metsästä,",
    " leo,",
    " okei,",
    " viiden",
    " minutin",
    " päästä",
    " leo",
    " tulee",
    " takaisin,",
    " leo,",
    " äiti,",
    " minä",
    " löysin",
    " pähkinän,",
    " äiti,",
    " se",
    " on",
    " kastan",
    " ja",
    " pähkinän",
    " näköinen,",
    " mutta",
    " eri",
    " asia,",
    " orava",
    " juokseen",
    " leonluo",
    " ja",
    " ottaa",
    " kastanian,",
    " leo,",
    " äiti,",
    " orava",
    " varasti",
    "kastanjan,",
    " isä,",
    " ruokaa",
    " on",
    " valmistaa,",
    " perhe",
    "syä",
    " sojamakkaraa,",
    " isä",
    "syä",
    " lihamakkaraa,",
    " hän",
    " on",
    " allerginen",
    " sojalle,",
    " kaikki",
    "ovat",
    " väsyneitä,",
    " orava",
    "makaa",
    " oksalla,",
    " se",
    " pieräiseen",
    " niin,",
    " että",
    " sen",
    " häntä",
    " heilachtaa",
    " loppuu."
  ];

export const  startTimes = [0.0,
    0.84,
    1.8,
    2.02,
    2.22,
    2.64,
    3.66,
    4.22,
    5.18,
    5.82,
    6.12,
    6.42,
    6.6,
    6.94,
    7.74,
    8.44,
    8.68,
    9.04,
    10.14,
    10.8,
    11.68,
    12.06,
    12.46,
    12.78,
    13.0,
    13.2,
    14.18,
    15.08,
    15.82,
    15.98,
    16.3,
    17.16,
    18.02,
    18.08,
    18.2,
    18.62,
    18.76,
    19.36,
    19.86,
    20.02,
    20.32,
    21.12,
    21.38,
    21.74,
    22.34,
    22.74,
    23.04,
    24.72,
    25.82,
    26.84,
    27.1,
    27.8,
    29.04,
    29.36,
    30.58,
    30.72,
    31.74,
    32.03,
    32.22,
    33.54,
    33.72,
    33.96,
    35.1,
    35.2,
    35.34,
    35.86,
    37.08,
    37.32,
    37.58,
    38.98,
    39.2,
    39.56,
    40.52,
    40.6,
    41.08,
    41.62,
    41.74,
    41.96,
    42.32,
    43.12
  ];





