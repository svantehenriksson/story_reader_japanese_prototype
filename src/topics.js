const splitByBr = (storyText) => {
    if (!storyText) return [];
  
    // 1. Split the entire text into an array of line strings.
    const lineStrings = storyText.split('<br>');
  
    // 2. Process each line string individually.
    const lines = lineStrings.map(lineStr => {
      // 3. For each line, trim leading/trailing whitespace, then process words.
      // This correctly handles indentation on every line.
      const cleanedLine = lineStr.trim().replace(/-/g, ' ');
  
      // Avoid creating an array with a single empty string for empty lines.
      if (cleanedLine === '') return []; 
      
      // Preserves intentional empty strings from things like "juo- "
      return cleanedLine.split(' ');
    });
  
    // Remove any trailing empty line that can result from stories ending with <br>
    if (lines.length > 0 && lines[lines.length - 1].length === 0) {
      lines.pop();
    }
  
    return lines;
  };
  
  const story1Finnish = `
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
  Luca sanoo: "Hei." <br> 
  Kuljettaja ei sano mitään. <br> 
  Ulkona sataa lun-ta. <br> 
  Paljon lun-ta. <br> 
  On kylmä. <br> 
  Tosi kylmä. <br> 
  Lumi on kaunis-ta. <br> 
  Luca hymyil-ee. <br> 
  Tämä on Suomi.`;
  
  const story1English = `
  Luca is at the airport. <br> 
  Luca is tired. <br> 
  Luca drinks coffee. <br> 
  The coffee is expensive. <br> 
  The coffee is a bit strange. <br> 
  But the coffee helps. <br> 
  Finns drink this every day? <br> 
  Luca is looking for the bus. <br> 
  The bus arrives. <br> 
  The driver doesn't speak English. <br> 
  The driver doesn't say anything. <br> 
  Luca says: "Hi." <br> 
  The driver doesn't say anything. <br> 
  It's snowing outside. <br> 
  A lot of snow. <br> 
  It's cold. <br> 
  Really cold. <br> 
  The snow is beautiful. <br> 
  Luca smiles. <br> 
  This is Finland.`;
  
  const story1SpokenFinnish = `
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
  Luca sanoo: "Hei." <br> 
  Kuljettaja ei sano mitää. <br> 
  Ulkona sataa lun-ta. <br> 
  Paljon lun-ta. <br> 
  On kylmä. <br> 
  Tosi kylmä. <br> 
  Lumi on kaunis-t. <br> 
  Luca hymyil-ee. <br> 
  Tää on Suomi.`;
  
  const story2Finnish = `
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
  
  const story2English = `
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
  Luca steps out.`;
  
  const story2SpokenFinnish = `
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
  Luca astu-u ulos.`;
  
  const story3Finnish = `Leo: Äiti! Minulla on nälkä! <br> Äiti: Kohta syödään. <br> Leo: Mutta minulla on nälkä nyt! <br> Äiti: Etsi ruokaa metsästä. <br> Leo: Okei. <br> Viiden minuutin päästä Leo tulee takaisin. <br> Leo: Äiti! Minä löysin pähkinän. <br> Äiti: Se on kastanja, pähkinän näköinen mutta eri asia. <br> Orava juoksee Leon luo ja ottaa kastanjan. <br> Leo: Äiti! Orava varasti kastanjan. <br> Isä: Ruoka on valmista! <br> Perhe syö soijamakkaraa. <br> Isä syö lihamakkaraa. Hän on allerginen soijalle. <br> Kaikki ovat väsyneitä. <br> Orava makaa oksalla. <br> Se pieraisee niin että sen häntä heilahtaa. Loppu. ❤️`;
  
  
  export const topics = [
    {
      name: "Luca saapuu Suomeen",
      storyData: {
        storyTitle: "Luca saapuu Suomeen",
        finnishLines: splitByBr(story1Finnish),
        englishLines: splitByBr(story1English),
        spokenLines: splitByBr(story1SpokenFinnish),
        FinnishEndingsIndex: [
          [3], [], [3], [3], [4], [], [1, 3], [2, 4], [2], [4], [], [], [], [3], [2], [], [], [3], [2], []
        ],
        FinnishTranslationIndex: [
          [0, 1, 2, 3], [0, 1, 2], [0, 1, [2, 3]], [0, 1, [2,3]], [0, 1, 2, [3, 4]], [0, 1, 2], [[0, 1], [2, 3], 4, 5, 6], [0, [1, 2], [3, 4]], [0, 1, 2], [0, 1, 2, [3, 4]], [0, 1, 2, 3], [0, 1, 2], [0, 1, 2, 3], [0, [1, 2]], [0, [1, 2]], [0, 1], [0, 1], [0, 1, [2, 3]], [0, [1, 2]], [0, 1, 2]
        ],
        EnglishTranslationIndex: [
          [0, 1, [3, 4], 2], [0, 1, 2], [0, 1, 2], [[0, 1], 2, 3], [[0, 1], 2, [3, 4], 5], [0, [1, 2], 3], [0, 1, 2, 3, 4], [0, [1, 2], [3, 4]], [[0, 1], 2], [[0, 1], 2, [3, 4]], [0, 1, 2, 3], [0, 1, 2], [0, 1, 2, 3], [[0, 1], [2, 3]], [[0, 1], 2], [0, 1], [0, 1], [[0, 1], [2, 3]], [0, [1, 2]], [0, 1, 2]
        ],
      },
      quizData: [
        { question: 'Missä Luca on?', options: ['Kotona', 'Lentokentällä', 'Bussissa', 'Hississä'], answer: 'Lentokentällä' },
        { question: 'Miksi Luca juo kahvia?', options: ['Se on halpaa', 'Hän on janoinen', 'Hän on väsynyt', 'Hän pitää mausta'], answer: 'Hän on väsynyt' },
        { question: 'Puhuuko bussinkuljettaja englantia?', options: ['Kyllä', 'Vähän', 'Ei', 'Vain espanjaa'], answer: 'Ei' },
        { question: 'Mikä on sää ulkona?', options: ['On aurinkoista', 'Sataa vettä', 'On sumuista', 'Sataa lunta'], answer: 'Sataa lunta' }
      ]
    },
    {
      name: "Luca hississä",
      storyData: {
        storyTitle: "Luca hississä",
        finnishLines: splitByBr(story2Finnish),
        englishLines: splitByBr(story2English),
        spokenLines: splitByBr(story2SpokenFinnish),
        FinnishEndingsIndex: [
            [2], [2], [2], [2], [2], [2], [2], [2], [2], [2], [2], [2], [2], [2], [2], [2], [], [2]
        ],
        FinnishTranslationIndex: [
            [0, 1, [2, 3]], [[0, 1], 2, 3], [0, [1, 2], 3], [0, [1, 2], 3, 4], [0, [1, 2], [3, 4]], [0, [1, 2], [3, 4]], [0, [1, 2], 3], [0, [1, 2], 3], [0, [1, 2]], [0, [1, 2], 3], [0, [1, 2], 3, [4, 5], [6, 7], 8, 9], [0, [1, 2], 3], [0, [1, 2], 3, [4, 5], 6, 7], [0, [1, 2], 3, [4, 5], [6, 7], [8, 9]], [0, [1, 2], 3, [4, 5], [6, 7], [8, 9]], [0, [1, 2]], [0], [0, [1, 2], 3]
        ],
        EnglishTranslationIndex: [
            [0, 1, [2, 3], [4, 5]], [0, 1, 2, 3, [4, 5], [6, 7]], [[0, 1], 2, 3], [0, 1, 2, 3], [0, 1, [2, 3], [4, 5]], [[0, 1], 2, [3, 4], 5], [0, 1, 2], [[0, 1], 2, 3], [[0, 1], 2], [0, 1, [2, 3]], [0, 1, 2, [3, 4, 5], [6, 7]], [[0, 1], 2, 3], [0, 1, 2, [3, 4], 5, 6], [0, 1, 2, 3, [4, 5], [6, 7], 8], [0, 1, 2, 3, 4, [5, 6], 7], [[0, 1], 2], [0], [0, 1, 2]
        ]
      },
      quizData: [
        { question: 'Kenen kanssa Luca on hississä?', options: ['Ainon', 'Naisen', 'Kuljettajan', 'Yksin'], answer: 'Naisen' },
        { question: 'Mikä naisen nimi on?', options: ['Aino', 'Anna', 'Luca', 'Sitä ei mainita'], answer: 'Aino' },
        { question: 'Mitä Luca sanoo ensin?', options: ['"Moi"', '"Mikä sinun nimesi on?"', '"Hei."', '"Anteeksi"'], answer: '"Hei."' },
        { question: 'Missä Aino asuu?', options: ['Lucan yläkerrassa', 'Lucan alakerrassa', 'Samassa kerroksessa', 'Sitä ei kerrota'], answer: 'Lucan yläkerrassa' }
      ]
    },
    {
        name: "Orava ja kastanja",
        storyData: {
          storyTitle: "Orava ja kastanja",
          finnishLines: splitByBr(story3Finnish),
          // Note: English, spoken, and index data are not available for this story.
          // The component will handle this gracefully.
          englishLines: [], 
          spokenLines: [],
          FinnishEndingsIndex: [],
          FinnishTranslationIndex: [],
          EnglishTranslationIndex: []
        },
        quizData: [
            { question: 'Miten sanotaan "I am hungry" suomeksi?', options: ['Minulla on nälkä', 'Olen nälkä', 'Minä syön nälkä', 'Minulla on syönyt'], answer: 'Minulla on nälkä' },
            { question: 'Mitä orava teki kastanjalle?', options: ['Antoi sen Leolle', 'Piilotti sen puuhun', 'Varasti sen', 'Söi sen isän kanssa'], answer: 'Varasti sen' },
            { question: 'Miksi isä ei syönyt soijamakkaraa?', options: ['Hän ei pidä siitä', 'Se oli loppu', 'Hän on allerginen soijalle', 'Hän on vegaani'], answer: 'Hän on allerginen soijalle' },
            { question: 'Mitä tapahtui tarinan lopussa?', options: ['Leo sai uuden kastanjan', 'Perhe meni nukkumaan', 'Orava pieraisi', 'Isä grillasi lisää ruokaa'], answer: 'Orava pieraisi' }
        ]
      }
  ]; 