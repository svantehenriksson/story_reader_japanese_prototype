// src/StoryData.js

export const storyTitle = "Luca saapuu Suomeen"; // "Luca arrives in Finland";

export const storyFinnish = `
Luca on lentokentä-llä. <br> 
Luca on väsynyt. <br> 
Luca juo kahvi-a. <br> 
Kahvi on kallis-ta. <br> 
Kahvi on vähän outo-a. <br> 
Mutta kahvi auttaa. <br> 
Suomalai-set juo-vat tätä joka päivä? <br> 
Luca ets-ii bussi-a. <br> 
Bussi tul-ee. <br> 
Kuljettaja ei puhu englanti-a. <br> 
Kuljettaja ei puhu mitään. <br> 
Luca sanoo: “Hei.” <br> 
Kuljettaja ei sano mitään. <br> 
Ulkona sataa lun-ta. <br> 
Paljon lun-ta. <br> 
On kylmä. <br> 
Tosi kylmä. <br> 
Lumi on kaunis-ta. <br> 
Luca hymyil-ee. <br> 
Tämä on Suomi.`; 

export const FinnishEndingsIndex = [
  [3],
  [],
  [3],
  [3],
  [4],
  [],
  [1, 3],
  [2, 4],
  [2],
  [4],
  [],
  [],
  [],
  [3],
  [2],
  [],
  [],
  [3],
  [2],
  []
];

  //"Luca on lentokentä-llä. <br> Luca on väsynyt. <br> Luca juo kahvi-a. <br> Kahvi on kallis-ta. <br> Kahvi on vähän outo-a. <br> Mutta kahvi auttaa. <br> Suomalai-set juo-vat tätä joka päivä?"
  //"Leo: Äiti! Minulla on nälkä! <br> Äiti: Kohta syödään. <br> Leo: Mutta minulla on nälkä nyt! <br> Äiti: Etsi ruokaa metsästä. <br> Leo: Okei. <br> Viiden minuutin päästä Leo tulee takaisin. <br> Leo: Äiti! Minä löysin pähkinän. <br> Äiti: Se on kastanja, pähkinän näköinen mutta eri asia. <br> Orava juoksee Leon luo ja ottaa kastanjan. <br> Leo: Äiti! Orava varasti kastanjan. <br> Isä: Ruoka on valmista! <br> Perhe syö soijamakkaraa. <br> Isä syö lihamakkaraa. Hän on allerginen soijalle. <br> Kaikki ovat väsyneitä. <br> Orava makaa oksalla. <br> Se pieraisee niin että sen häntä heilahtaa. Loppu. ❤️"


//export const storyFinnishWords = storyFinnish[0].replace(/-/g, ' ').split(" ");      
export const storyFinnishWords = storyFinnish.replace(/-/g, ' ').split(" ");             

//storyFinnish[0].split(" ");


export const storyEnglish = `
Luca is at the airport. <br> 
Luca is tired. <br> 
Luca drinks coffee. <br> 
The coffee is expensive. <br> 
The coffee is a bit strange. <br> 
But the coffee helps. <br> 
Finns drink this every day? <br> 
Luca is looking for the bus. <br> 
The bus arrives. <br> 
The driver doesn’t speak English. <br> 
The driver doesn’t say anything. <br> 
Luca says: “Hi.” <br> 
The driver doesn’t say anything. <br> 
It’s snowing outside. <br> 
A lot of snow. <br> 
It’s cold. <br> 
Really cold. <br> 
The snow is beautiful. <br> 
Luca smiles. <br> 
This is Finland.
`;

export const storyEnglishWords = storyEnglish.replace(/-/g, ' ').split(" ");

export const storySpokenFinnish = `
Luca on lentokentä-l. <br> 
Luca on väsyny. <br> 
Luca juo kahvi-i. <br> 
Kahvi on kallis-t. <br> 
Kahvi on vähän outo-o. <br> 
Mut kahvi auttaa. <br> 
Suomalai-set juo- tätä joka päivä?" <br> 
Luca ett-ii bussi-i. <br> 
Bussi tul-ee. <br> 
Kuljettaja ei puhu englanti-i. <br> 
Kuljettaja ei puhu mitää. <br> 
Luca sanoo: “Hei.” <br> 
Kuljettaja ei sano mitää. <br> 
Ulkona sataa lun-ta. <br> 
Paljon lun-ta. <br> 
On kylmä. <br> 
Tosi kylmä. <br> 
Lumi on kaunis-t. <br> 
Luca hymyil-ee. <br> 
Tää on Suomi.
`;

//export const storySpokenFinnishWords = storySpokenFinnish[0].split(" ");
export const storySpokenFinnishWords = storySpokenFinnish.replace(/-/g, ' ').split(" ");             


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






/*
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
*/

export const FinnishTranslationIndex = [
  // Line 0: Luca on lentokentällä.
  [0, 1, 2, 3],

  // Line 1: Luca on väsynyt.
  [0, 1, 2],

  // Line 2: Luca juo kahvia.
  [0, 1, [2, 3]],

  // Line 3: Kahvi on kallista.
  [0, 1, [2,3]],

  // Line 4: Kahvi on vähän outo-a.
  [0, 1, 2, [3, 4]],
  
  // Line 5: Mutta kahvi auttaa.
  [0, 1, 2],
  
  // Line 6: Suomalaiset juo-vat tätä joka päivä?
  [[0, 1], [2, 3], 4, 5, 6],

  //Line 7: Luca ets-ii bussi-a. 
  [0, [1, 2], [3, 4]],

  //Line 8: Bussi tul-ee.
  [0, 1, 2],

  //Line 9: Kuljettaja ei puhu englanti-a.
  [0, 1, 2, [3, 4]],

  //Line 10: Kuljettaja ei puhu mitään.
  [0, 1, 2, 3],

  //Line 11: Luca sanoo: "Hei."
  [0, 1, 2],
  
  //Line 12: Kuljettaja ei sano mitään. 
  [0, 1, 2, 3],

  //Line 13: Ulkona sataa lunta. 
  [0, [1, 2]],

  //Line 14: Paljon lun-ta.
  [0, [1, 2]],

  //Line 15: On kylmä.
  [0, 1],

  //Line 16: Tosi kylmä.
  [0, 1],

  //Line 17: Lumi on kaunis-ta.
  [0, 1, [2, 3]],

  //Line 18: Luca hymyil-ee.
  [0, [1, 2]],

  //Line 19: Tämä on Suomi.
  [0, 1, 2]

];



export const EnglishTranslationIndex = [
  // Line 0: Luca is at the airport.
  [0, 1, [3, 4], 2],

  // Line 1: Luca is tired.
  [0, 1, 2],

  // Line 2: Luca drinks coffee.
  [0, 1, 2],

  // Line 3: The coffee is expensive.
  [[0, 1], 2, 3],

  // Line 4: The coffee is a bit strange.
  [[0, 1], 2, [3, 4], 5],

  // Line 5: But the coffee helps.
  [0, [1, 2], 3],

  // Line 6: Finns drink this every day?
  [0, 1, 2, 3, 4],

  // Line 7: Luca is looking for the bus.
  [0, [1, 2], [3, 4]],

  // Line 8: The bus arrives.
  [[0, 1], 2],

  // Line 9: The driver doesn't speak English
  [[0, 1], 2, 3, 4],

  // Line 10: The driver doesn't say anything.
  [[0, 1], 2, 3, 4],

  // Line 11: Luca says: "Hi."
  [0, 1, 2],

  // Line 12: The driver doesn't say anything.
  [[0, 1], 2, 3, 4],

  //Line 13: It's snowing outside:
  [2, [0, 1]],

  // Line 14: A lot of snow.
  [[0, 1, 2], 3],

  // Line 15: It's cold.
  [0, 1],

  // Line 16: Really cold.
  [0, 1],

  // Line 17: The snow is beautiful.
  [[0, 1], 2, 3],
  
  // Line 18: Luca smiles.
  [0, 1],

  // Line 19: This is Finland.
  [0, 1, 2]

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





