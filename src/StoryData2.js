export const storyTitle = "Luca hissi-ssä"; // "Luca in the elevator";

export const storyFinnish = `
Luca menee hissi-in. <br> 
Hissi-ssä on nainen. <br> 
Nainen seiso-o hiljaa. <br> 
Luca seiso-o myös hiljaa. <br> 
Luca katso-o nais-ta. <br> 
Nainen katso-o Luca-a. <br> 
Luca sano-o: "Hei." <br> 
Nainen sano-o: "Moi." <br> 
Nainen hymyil-ee. <br> 
Luca hymyil-ee myös. <br> 
Luca kysy-y: "Mikä sinun nime-si on?" <br> 
Nainen sano-o: "Aino." <br> 
Luca sano-o: "Minun nimi on Luca." <br> 
Luca sano-o: "Asun toise-ssa kerrokse-ssa." <br> 
Aino sano-o: "Asun yläkerra-ssa-si." <br> 
Hissi pysähty-y. <br> 
Ding! <br> 
Luca astu-u ulos.`; 

export const FinnishEndingsIndex = [
  [2],
  [2],
  [2],
  [2],
  [2],
  [2],
  [2],
  [2],
  [2],
  [2],
  [2],
  [2],
  [2],
  [2],
  [2],
  [2],
  [],
  [2]
];

export const storyFinnishWords = storyFinnish.replace(/-/g, ' ').split(" ");             

export const storyEnglish = `
Luca gets into the elevator. <br> 
There is a woman in the elevator. <br> 
The woman stands silently. <br> 
Luca also stands silently. <br> 
Luca looks at the woman. <br> 
The woman looks at Luca. <br> 
Luca says: "Hello." <br> 
The woman says: "Hi." <br> 
The woman smiles. <br> 
Luca smiles as well. <br> 
Luca asks: "What's your name?" <br> 
The woman says: "Aino." <br> 
Luca says: "My name is Luca." <br> 
Luca says: "I live on the second floor." <br> 
Aino says: "I live upstairs from you." <br> 
The elevator stops. <br> 
Ding! <br> 
Luca steps out.
`;

export const storyEnglishWords = storyEnglish.replace(/-/g, ' ').split(" ");

export const storySpokenFinnish = `
Luca menee hissi-i. <br> 
Hissi-ssä on nainen. <br> 
Nainen seiso-o hiljaa. <br> 
Luca seiso-o myös hiljaa. <br> 
Luca katso-o nais-ta. <br> 
Nainen katso-o Luca-a. <br> 
Luca sano-o: "Hei." <br> 
Nainen sano-o: "Moi." <br> 
Nainen hymyil-ee. <br> 
Luca hymyil-ee myös. <br> 
Luca kysy-y: "Mikä sinun nime-si on?" <br> 
Nainen sano-o: "Aino." <br> 
Luca sano-o: "Minun nimi on Luca." <br> 
Luca sano-o: "Asun toise-ssa kerrokse-ssa." <br> 
Aino sano-o: "Asun yläkerra-ssa-si." <br> 
Hissi pysähty-y. <br> 
Ding! <br> 
Luca astu-u ulos.
`;

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

export const FinnishTranslationIndex = [
  // Line 0: Luca menee hissi-in.
  [0, 1, [2, 3]],

  // Line 1: Hissi-ssä on nainen.
  [[0, 1], 2, 3],

  // Line 2: Nainen seiso-o hiljaa.
  [0, [1, 2], 3],

  // Line 3: Luca seiso-o myös hiljaa.
  [0, [1, 2], 3, 4],

  // Line 4: Luca katso-o nais-ta.
  [0, [1, 2], [3, 4]],

  // Line 5: Nainen katso-o Luca-a.
  [0, [1, 2], [3, 4]],

  // Line 6: Luca sano-o: "Hei."
  [0, [1, 2], 3],

  // Line 7: Nainen sano-o: "Moi."
  [0, [1, 2], 3],

  // Line 8: Nainen hymyil-ee.
  [0, [1, 2]],

  // Line 9: Luca hymyil-ee myös.
  [0, [1, 2], 3],

  // Line 10: Luca kysy-y: "Mikä sinun nime-si on?"
  [0, [1, 2], 3, [4, 5], [6, 7], 8, 9],

  // Line 11: Nainen sano-o: "Aino."
  [0, [1, 2], 3],

  // Line 12: Luca sano-o: "Minun nimi on Luca."
  [0, [1, 2], 3, [4, 5], 6, 7],

  // Line 13: Luca sano-o: "Asun toise-ssa kerrokse-ssa."
  [0, [1, 2], 3, [4, 5], [6, 7], [8, 9]],

  // Line 14: Aino sano-o: "Asun yläkerra-ssa-si."
  [0, [1, 2], 3, [4, 5], [6, 7], [8, 9]],

  // Line 15: Hissi pysähty-y.
  [0, [1, 2]],

  // Line 16: Ding!
  [0],

  // Line 17: Luca astu-u ulos.
  [0, [1, 2], 3]
];

export const EnglishTranslationIndex = [
  // Line 0: Luca gets into the elevator.
  [0, 1, [2, 3], [4, 5]],

  // Line 1: There is a woman in the elevator.
  [0, 1, 2, 3, [4, 5], [6, 7]],

  // Line 2: The woman stands silently.
  [[0, 1], 2, 3],

  // Line 3: Luca also stands silently.
  [0, 1, 2, 3],

  // Line 4: Luca looks at the woman.
  [0, 1, [2, 3], [4, 5]],

  // Line 5: The woman looks at Luca.
  [[0, 1], 2, [3, 4], 5],

  // Line 6: Luca says: "Hello."
  [0, 1, 2],

  // Line 7: The woman says: "Hi."
  [[0, 1], 2, 3],

  // Line 8: The woman smiles.
  [[0, 1], 2],

  // Line 9: Luca smiles as well.
  [0, 1, [2, 3]],

  // Line 10: Luca asks: "What's your name?"
  [0, 1, 2, [3, 4, 5], [6, 7]],

  // Line 11: The woman says: "Aino."
  [[0, 1], 2, 3],

  // Line 12: Luca says: "My name is Luca."
  [0, 1, 2, [3, 4], 5, 6],

  // Line 13: Luca says: "I live on the second floor."
  [0, 1, 2, 3, [4, 5], [6, 7], 8],

  // Line 14: Aino says: "I live upstairs from you."
  [0, 1, 2, 3, 4, [5, 6], 7],

  // Line 15: The elevator stops.
  [[0, 1], 2],

  // Line 16: Ding!
  [0],

  // Line 17: Luca steps out.
  [0, 1, 2]
];

export const words = [
  "Luca",
  "menee",
  "hissi",
  "in",
  "hissi",
  "ssä",
  "on",
  "nainen",
  "nainen",
  "seiso",
  "o",
  "hiljaa",
  "Luca",
  "seiso",
  "o",
  "myös",
  "hiljaa",
  "Luca",
  "katso",
  "o",
  "nais",
  "ta",
  "nainen",
  "katso",
  "o",
  "Luca",
  "a",
  "Luca",
  "sano",
  "o",
  "Hei",
  "nainen",
  "sano",
  "o",
  "Moi",
  "nainen",
  "hymyil",
  "ee",
  "Luca",
  "hymyil",
  "ee",
  "myös",
  "Luca",
  "kysy",
  "y",
  "Mikä",
  "sinun",
  "nime",
  "si",
  "on",
  "nainen",
  "sano",
  "o",
  "Aino",
  "Luca",
  "sano",
  "o",
  "Minun",
  "nimi",
  "on",
  "Luca",
  "Luca",
  "sano",
  "o",
  "Asun",
  "toise",
  "ssa",
  "kerrokse",
  "ssa",
  "Aino",
  "sano",
  "o",
  "Asun",
  "yläkerra",
  "ssa",
  "si",
  "Hissi",
  "pysähty",
  "y",
  "Ding",
  "Luca",
  "astu",
  "u",
  "ulos"
];

export const startTimes = [
  0.0,
  0.5,
  1.0,
  1.5,
  2.0,
  2.5,
  3.0,
  3.5,
  4.0,
  4.5,
  5.0,
  5.5,
  6.0,
  6.5,
  7.0,
  7.5,
  8.0,
  8.5,
  9.0,
  9.5,
  10.0,
  10.5,
  11.0,
  11.5,
  12.0,
  12.5,
  13.0,
  13.5,
  14.0,
  14.5,
  15.0,
  15.5,
  16.0,
  16.5,
  17.0,
  17.5,
  18.0,
  18.5,
  19.0,
  19.5,
  20.0,
  20.5,
  21.0,
  21.5,
  22.0,
  22.5,
  23.0,
  23.5,
  24.0,
  24.5,
  25.0,
  25.5,
  26.0,
  26.5,
  27.0,
  27.5,
  28.0,
  28.5,
  29.0,
  29.5,
  30.0,
  30.5,
  31.0,
  31.5,
  32.0,
  32.5,
  33.0,
  33.5,
  34.0,
  34.5,
  35.0,
  35.5,
  36.0,
  36.5,
  37.0,
  37.5,
  38.0,
  38.5,
  39.0,
  39.5,
  40.0,
  40.5,
  41.0,
  41.5,
  42.0,
  42.5,
  43.0,
  43.5,
  44.0,
  44.5,
  45.0,
  45.5,
  46.0,
  46.5,
  47.0,
  47.5,
  48.0,
  48.5,
  49.0,
  49.5,
  50.0,
  50.5,
  51.0,
  51.5,
  52.0,
  52.5,
  53.0,
  53.5,
  54.0,
  54.5,
  55.0,
  55.5,
  56.0,
  56.5,
  57.0,
  57.5,
  58.0,
  58.5,
  59.0,
  59.5,
  60.0,
  60.5,
  61.0,
  61.5,
  62.0,
  62.5,
  63.0,
  63.5,
  64.0,
  64.5,
  65.0,
  65.5,
  66.0,
  66.5,
  67.0,
  67.5,
  68.0,
  68.5,
  69.0,
  69.5,
  70.0,
  70.5,
  71.0,
  71.5,
  72.0,
  72.5,
  73.0,
  73.5,
  74.0,
  74.5,
  75.0,
  75.5,
  76.0,
  76.5,
  77.0,
  77.5,
  78.0,
  78.5,
  79.0,
  79.5,
  80.0,
  80.5,
  81.0,
  81.5,
  82.0,
  82.5,
  83.0,
  83.5,
  84.0,
  84.5,
  85.0,
  85.5,
  86.0,
  86.5,
  87.0,
  87.5,
  88.0,
  88.5,
  89.0,
  89.5,
  90.0,
  90.5,
  91.0,
  91.5,
  92.0,
  92.5,
  93.0,
  93.5,
  94.0,
  94.5,
  95.0,
  95.5,
  96.0,
  96.5,
  97.0,
  97.5,
  98.0,
  98.5,
  99.0,
  99.5,
  100.0
]; 