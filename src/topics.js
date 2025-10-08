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
  

// Using a function written by ChatGPT to extract the endings index:


  function extractFinnishEndingsIndex(storyText) {
    const lines = storyText.trim().split('<br>').map(line => line.trim());
    const endingsIndex = [];
  
    for (const line of lines) {
      const words = line.split(/\s+/);
      const splitWords = [];
      const endingIndices = [];
  
      let currentIndex = 0;
  
      for (const word of words) {
        const parts = word.split('-');
        parts.forEach((part, partIndex) => {
          splitWords.push(part);
          if (partIndex > 0) {
            endingIndices.push(currentIndex);
          }
          currentIndex++;
        });
      }
  
      endingsIndex.push(endingIndices);
    }
  
    return endingsIndex;
  }
  



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
  Luca: "Minun nimi on Luca." <br> 
  Luca: "Asun toise-ssa kerrokse-ssa." <br> 
  Aino: "Asun yläkerra-ssa-si." <br> 
  Hissi pysähty-y. <br> 
  Ding! <br> 
  Luca astu-u ulos.`;
  
  const story2English = `
  Luca goes into the elevator. <br> 
  There is a woman in the elevator. <br> 
  The woman stands silently. <br> 
  Luca also stands silently. <br> 
  Luca looks at the woman. <br> 
  The woman looks at Luca. <br> 
  Luca says: "Hello." <br> 
  The woman says: "Hi." <br> 
  The woman smiles. <br> 
  Luca smiles as well. <br> 
  Luca asks: "What is your name?" <br> 
  The woman says: "Aino." <br> 
  Luca: "My name is Luca." <br> 
  Luca: "I live on the second floor." <br> 
  Aino: "I live upstairs from you." <br> 
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
  Luca: "Mun nimi on Luca." <br> 
  Luca: "Asun toka-s kerrokse-s." <br> 
  Aino: "Asun yläkerra-ssa-s." <br> 
  Hissi pysähty-y. <br> 
  Ding! <br> 
  Luca astu-u ulos.`;
  
  const story3Finnish = `
  Luca-lla on kylmä. <br>
  Luca menee vaatekauppa-an. <br>
  Myyjä: Hei! Miten voin auttaa? <br>
  Luca: Minulla on kylmä. <br>
  Myyjä: Suosittelen pitkiä kalsareita. <br>
  Luca: Suosittelet pitkiä kalsareita? <br>
  Myyjä: Kyllä. Kuten kalsarit, mutta pitkät. Ne näyttävät leggingseiltä. <br>
  Luca: Miesten leggingsit. <br>
  Myyjä: Ja sinun takki on ohut. Osta talvitakki. <br>
  Luca: Missä talvitakit ovat? <br>
  Myyjä: Suoraan eteenpäin ja vasemmalle. <br>
  Luca: Kiitos. <br>
  Luca löytää mustan talvitakin. <br>
  Myyjä: Siinä kaikki? <br>
  Luca: Siinä kaikki. <br>
  Myyjä: Osta vielä pipo. <br>
  Luca: Okei, pipo vielä. <br>
  Myyjä: Musta vai valkoinen? <br>
  Luca: Valkoinen. <br>
  Myyjä: 238 euroa, kiitos. <br>
  Luca maksaa kortilla. <br>
  Luca: Kiitos! Hei hei. <br>
  Myyjä: Kiitos! Moi moi. <br>
  `;
  
  const story3English = `
  Luca is cold. <br>
  Luca goes to a clothing store. <br>
  Salesperson: Hi! How can I help? <br>
  Luca: I'm cold. <br>
  Salesperson: I recommend long underwear. <br>
  Luca: You recommend long underwear? <br>
  Salesperson: Yes. Like underwear, but long. They look like leggings. <br>
  Luca: Men's leggings. <br>
  Salesperson: And your jacket is thin. Buy a winter coat. <br>
  Luca: Where are the winter coats? <br>
  Salesperson: Straight ahead and to the left. <br>
  Luca: Thanks. <br>
  Luca finds a black winter coat. <br>
  Salesperson: Is that all? <br>
  Luca: That’s all. <br>
  Salesperson: Buy a beanie too. <br>
  Luca: Okay, a beanie too. <br>
  Salesperson: Black or white? <br>
  Luca: White. <br>
  Salesperson: 238 euros, please. <br>
  Luca pays by card. <br>
  Luca: Thanks! Bye bye. <br>
  Salesperson: Thanks! Bye bye. <br>
  `;
  
  const story3SpokenFinnish = `
  Luca-l on kylmä. <br>
  Luca menee vaatekauppa-a. <br>
  Myyjä: Moi! Mite voin auttaa? <br>
  Luca: Mul on kylmä. <br>
  Myyjä: Suosittelen pitkii kalsarei. <br>
  Luca: Suosittelet pitkii kalsarei? <br>
  Myyjä: Joo. Niinku kalsarit mut pitkät. Ne näyttää leggingseilt. <br>
  Luca: Miesten leggingsit. <br>
  Myyjä: Ja sun takki on ohut. Osta talvitakki. <br>
  Luca: Missä talvitakit on? <br>
  Myyjä: Suoraa eteenpäi ja vasemmalle. <br>
  Luca: Kiitos. <br>
  Luca löytää mustan talvitakin. <br>
  Myyjä: Siinä kaikki? <br>
  Luca: Siinä kaikki. <br>
  Myyjä: Osta viel pipo. <br>
  Luca: Okei, pipo viel. <br>
  Myyjä: Musta vai valkonen? <br>
  Luca: Valkonen. <br>
  Myyjä: Kakssata kolkyt kaheksan euroo, kiitos. <br>
  Luca maksaa kortil. <br>
  Luca: Kiitos! Hei hei. <br>
  Myyjä: Kiitos! Moi moi. <br>
  `;
 
  const story4Finnish = `
Pomo: Tervetuloa! <br>
Luca: Kiitos. <br>
Pomo ja Luca kättelevät. <br>
Pomo: Minä olen Jarkko. <br>
Luca: Minä olen Luca. <br>
Jarkko: Haluatko kahvia? <br>
Luca: Kyllä, kiitos. <br>
Jarkko: Minäkin otan kahvia. Maanantaiaamu. <br>
Miehet ottavat kahvia automaatista. <br>
Automaatista lähtee kova ääni: surrrr. <br>
Luca: Täällä on tosi vähän ihmisiä. <br>
Jarkko: Hybridityö. <br>
Luca: Ahaa. <br>
Jarkko: Minulla on ensimmäinen työ sinulle. <br>
Luca: Mikä työ? <br>
Jarkko: Pilvi-integraatio. Asiakkaalle Ruoholahdessa. <br>
Luca: Miten pääsen Ruoholahteen? <br>
Jarkko: Ota raitiovaunu. Tai yrityksen sähköpyörä. Siinä on talvirenkaat. <br>
`;

const story4English = `
Boss: Welcome! <br>
Luca: Thanks. <br>
The boss and Luca shake hands. <br>
Boss: I'm Jarkko. <br>
Luca: I'm Luca. <br>
Jarkko: Do you want coffee? <br>
Luca: Yes, please. <br>
Jarkko: I'll have coffee too. Monday morning. <br>
The men take coffee from the machine. <br>
The machine makes a loud sound: surrrr. <br>
Luca: There are very few people here. <br>
Jarkko: Hybrid work. <br>
Luca: Aha. <br>
Jarkko: I have your first task. <br>
Luca: What task? <br>
Jarkko: Cloud integration. For a client in Ruoholahti. <br>
Luca: How do I get to Ruoholahti? <br>
Jarkko: Take the tram. Or the company e-bike. It has winter tires. <br>
`;

const story4SpokenFinnish = `
Pomo: Tervetuloo! <br>
Luca: Kiitos. <br>
Pomo ja Luca kättelee. <br>
Pomo: Mä oon Jarkko. <br>
Luca: Mä oon Luca. <br>
Jarkko: Haluuks kahvii? <br>
Luca: Joo, kiitos. <br>
Jarkko: Mäkin otan kahvii. Maanantaiaamu. <br>
Miehet ottaa kahvii automaatist. <br>
Automaatist lähtee kova ääni: surrrr. <br>
Luca: Täl on tosi vähän ihmisiä. <br>
Jarkko: Hybridityö. <br>
Luca: Ahaa. <br>
Jarkko: Mul on eka duuni sulle. <br>
Luca: MIkä duuni? <br>
Jarkko: Pilvi-integraatio. Asiakkaal Ruoholahdes. <br>
Luca: Miten pääsen Ruoholahtee? <br>
Jarkko: Ota ratikka. Tai firman sähköpyörä. Siin on talvirenkaat. <br>
`;

const story5Finnish = `
Töiden jälkeen Luca on yksin kotona. <br>
Luca on keittiössä. <br>
Luca katsoo kaappiin. <br>
Kaapissa on teetä ja kahvia. <br>
Kaapissa on myös näkkileipää. <br>
Luca katsoo jääkaappiin. <br>
Jääkaapissa on maitoa ja voita. <br>
Maito on vanhaa. <br>
Luca keittää kupin teetä. <br>
Luca laittaa voita näkkileivälle. <br>
Näkkileipä maistuu vähän oudolta. <br>
Lämmin tee maistuu hyvältä. <br>
Luca selaa sosiaalista mediaa. <br>
Teen jälkeen Luca katsoo elokuvaa. <br>
Elokuvan jälkeen Luca menee nukkumaan. <br>
`;

const story5English = `
After work, Luca is home alone. <br>
Luca is in the kitchen. <br>
Luca looks in the cupboard. <br>
There is tea and coffee in the cupboard. <br>
There is also crispbread. <br>
Luca looks in the fridge. <br>
There is milk and butter in the fridge. <br>
The milk is old. <br>
Luca makes a cup of tea. <br>
Luca puts butter on the crispbread. <br>
The crispbread tastes a bit strange. <br>
The warm tea tastes good. <br>
Luca scrolls through social media. <br>
After the tea, Luca watches a movie. <br>
After the movie, Luca goes to sleep. <br>
`;

const story5SpokenFinnish = `
Töiden jälkee Luca on yksin kotona. <br>
Luca on keittiös. <br>
Luca kattoo kaappiin. <br>
Kaapis on teetä ja kahvii. <br>
Kaapis on kans näkkileipää. <br>
Luca kattoo jääkaappiin. <br>
Jääkaapis on maitoo ja voita. <br>
Maito on vanhaa. <br>
Luca keittää kupin teetä. <br>
Luca laittaa voita näkkileiväl. <br>
Näkkileipä maistuu vähä oudolt. <br>
Lämmin tee maistuu hyvält. <br>
Luca selaa somee. <br>
Teen jälkee Luca kattoo leffaa. <br>
Leffan jälkee Luca menee nukkuu. <br>
`;



  
  export const topics = [
    {
      name: "Luca saapuu Suomeen",
      illustration: "image1.png",
      storyData: {
        storyTitle: "Luca saapuu Suomeen",
        finnishLines: splitByBr(story1Finnish),
        englishLines: splitByBr(story1English),
        spokenLines: splitByBr(story1SpokenFinnish),
        FinnishEndingsIndex: [
          [3], [], [3], [3], [4], [], [1, 3], [2, 4], [2], [4], [], [], [], [3], [2], [], [], [3], [2], []
        ],
        FinnishTranslationIndex: [
          [0, 1, 2, 3], 
          [0, 1, 2], 
          [0, 1, [2, 3]], 
          [0, 1, [2,3]], 
          [0, 1, 2, [3, 4]], 
          [0, 1, 2], 
          [[0, 1], [2, 3], 4, 5, 6], 
          [0, [1, 2], [3, 4]], 
          [0, 1, 2], 
          [0, 1, 2, [3, 4]], 
          [0, 1, 2, 3], 
          [0, 1, 2], 
          [0, 1, 2, 3], 
          [0, [1, 2, 3]], 
          [0, [1, 2]], 
          [0, 1], 
          [0, 1], 
          [0, 1, [2, 3]], 
          [0, [1, 2]], 
          [0, 1, 2]
        ],
        EnglishTranslationIndex: [
          [0, 1, [3, 4], 2], 
          [0, 1, 2], 
          [0, 1, 2], 
          [[0, 1], 2, 3], 
          [[0, 1], 2, [3, 4], 5], 
          [0, [1, 2], 3], 
          [0, 1, 2, 3, 4], 
          [0, [1, 2], [3, 4]], 
          [[0, 1], 2], 
          [[0, 1], 2, 3, 4], 
          [[0, 1], 2, 3, 4], 
          [0, 1, 2], 
          [[0, 1], 2, 3, 4], 
          [2, [0, 1]], 
          [[0, 1, 2], 3], 
          [0, 1], 
          [0, 1], 
          [[0, 1], 2, 3], 
          [0, [1, 2]], 
          [0, 1, 2]
        ],
        grammarNotes: [
          ['GENERAL NOTE:',
            'These grammar notes provide some explanations.',
            'We have tried to make them as short and clear as possible.',
            <br/>,
            'Often it is also better to just read and listen to the story.',
            'Grammar is often learnt best in context.',
            <br/>,
            'lentokentällä = lentokenttä (airport) + -llä (on).',
            'So in Finnish you are "on" the airport.',
          <br/>,
          '"on" = "is" is a form of "olla" = "to be".'],
          ['Second page'],
          [
            'kahvia = kahvi + -a is a form we encounter very often.', 
            <br/>,
            'Here it means Luca drinks some coffee. (as in it is not specified how much)',
            'If he would drink exactly one coffee, it would be "Luca juo kahvin".',
            <br/>,
            'You can search for "partitive Finnish" or "partitiivi" for a traditional grammar explanation.',
            'But it is probably better to just slowly get used to it.',
            'We will have plenty of examples.',
            <br/>,
            'Notice how kahvi resembles the English word coffee a little bit.'
          ],
          ['kallista = kallis + -ta',
            'is again the same "partitive" form as kahvia = kahvi + -a',
            <br/>,
            'Depending on the word, the ending can be different:',
            '-a, -ä, -ta, -tä, -tta or -ttä.'
          ],
          ['Again outoa = outo (strange/weird) + -a',
            'Same "partitive" form as kahvia and kallista.'],
          [
            'There is no "the" word in Finnish.',
            'So kahvi can be either "the coffee" or "coffee".',
            <br/>,
            'To native Finnish speakers, it is often clear from context whether we mean a specific "the" coffee or coffee in general.',
            <br/>,
            'In this particular example, it could actually be either.',
            'So "But coffee helps" would also be a correct translation if one understands kahvi to mean coffee in general here.'
          ],
          ['Suomalaiset = suomalainen (Finn, or Finnish person) + -set (ending meaning many) = Finns.',
            <br/>,
            'juovat = juo + -vat (ending meaning many) = drink',
            <br/>,
            'Earlier we had Luca juo... Now Suomalaiset juovat...',
            'The basic form of juo is juoda (to drink).',
            <br/>,
            'For different people, it would be: ',
            'Minä juon (I drink)',
            'Sinä juot (you drink)',
            'Hän juo (he/she/it drinks)',
            'Me juomme (we drink)',
            'Te juotte (you all drink)',
            'He juovat (they drink)'
          ],
          ['Bussia = bussi + -a is again "partitive".',
            'Here the standard grammar explanation that "partitive" is used for parts of something breaks down.',
            'It shows why grammar is often best learnt in context, slowly, as you get used to it.',
            <br/>,
            'Etsii = etsiä (to look for / search) + -i (ending meaning he/she looks).',
            'Notice how the last ä-letter drops off when saying he looks for.',
            <br/>,
            'The verb etsiä changes similarly but a bit differently from juoda on the previous page:',
            'Minä etsin (I look for)',
            'Sinä etsit (you look for)',
            'Hän etsii (he/she/it looks for)',
            'Me etsimme (we look for)',
            'Te etsitte (you all look for)',
            'He etsivät (they look for)'
          ],
          ['Tulee = tulla (arrive/come) + -ee (ending meaning he/she/it arrives/comes).'],
          ['Englantia = englanti (English) + -a.',
            'Once again the "partitive" form.',
            'As you can see, this form is very common in Finnish.'
          ],
          ['The negative sentence has the same word order in Finnish and English:',
            'Kuljettaja (the driver) ei (does not) puhu (speak/say) mitään (anything).'
          ],
          ['Other greetings are:',
           'Moi (roughly "Hi", more informal)',
           'Hyvää päivää / Päivää (Good day, formal)',
           'Hyvää huomenta / Huomenta (Good morning, formal)',
           'Hyvää iltaa / Iltaa (Good evening, formal)',
           'Terve (a bit like "Hi", less formal)'
        ],
        ['Sano = says (he/she/it), from sanoa = to say'],
        ['Sataa lunta literally translates to it is raining snow.'],
        ['Lunta = lumi (snow) + -ta, again the "partitive" form.',
          'Notice that the word "lumi" changes quite a lot to "lunta".'
        ],
        ['On kylmä would literally translate to Is cold.',
          'In Finnish "It" would be "Se", but it is not used for such general descriptions.'
        ],
        ['Tosi kylmä is a bit informal could also be said as Erittäin (very) kylmä.'],
        ['Kaunis = kaunis (beautiful) + -ta, again the "partitive" form.'],
        ['hymyilee = hymyillä + -ee'],
        ['Tämä on Suomi = This is Finland.']

      ]
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
      illustration: "image2.png",
      storyData: {
        storyTitle: "Luca hississä",
        finnishLines: splitByBr(story2Finnish),
        englishLines: splitByBr(story2English),
        spokenLines: splitByBr(story2SpokenFinnish),
       /* FinnishEndingsIndex: [
            [3], [1], [2], [2], [2,4], [2,4], [2,4], [2], [2], [2], [2], [2], [2], [2], [2], [2], [], [2]
        ],*/
        FinnishEndingsIndex: extractFinnishEndingsIndex(story2Finnish),
        FinnishTranslationIndex: [
            [0, 1, [2, 3]], 
            [[0, 1], 2, 3], 
            [0, [1, 2], 3], 
            [0, [1, 2], 3, 4], 
            [0, [1, 2], [3, 4]], 
            [0, [1, 2], [3, 4]], 
            [0, [1, 2], 3], 
            [0, [1, 2], 3], 
            [0, [1, 2]], 
            [0, [1, 2], 3], 
            [0, [1, 2], 3, [4, 5, 6], 7], 
            [0, [1, 2], 3], 
            [0, 1, 2, 3, 4],
            [0, 1, [2, 3, 4, 5]],
            [0, 1, [2, 3, 4]], 
            [0, [1, 2]], 
            [0], 
            [0, [1, 2], 3]
        ],
        EnglishTranslationIndex: [
            [0, 1, [2, 3, 4]], 
            [[4, 5, 6], [0, 1], [2, 3]], 
            [[0, 1], 2, 3], 
            [0, 2, 1, 3], 
            [0, 1, [2, 3, 4]], 
            [[0, 1], 2, [3, 4], 5], 
            [0, 1, 2], 
            [[0, 1], 2, 3], 
            [[0, 1], 2], 
            [0, 1, [2, 3]], 
            [0, 1, 2, [4, 5], 3], 
            [[0, 1], 2, 3], 
            [0, 1, 2, 3, 4], 
            [0, [1,2], [3, 4, 5, 6]], 
            [0, [1, 2], [3, 4, 5]], 
            [[0, 1], 2], 
            [0], 
            [0, 1, 2]
        ],
        grammarNotes: [
          ['-iin in hissiin means into.'],
          ['-ssä in hississä means in. (as in "in the elevator")'],
          ['Seisoa = to stand',
             'The form seiso-o means he/she/it stands',
            <br/>,
          'Minä seison = I stand',
          'Sinä seisot = you stand',
          'Hän seisoo = he/she/it stands',
          'Me seisomme = we stand',
          'Te seisotte = you all stand',
          'He seisovat = they stand'
          ],
          ['In seiso-o the end -o refers to that he stands.'],
          ['-ta in nais-ta refers to that she is the object of his look.'],
          ['And now he is the object of her look, which causes -a to Luca-a.',
            <br/>,
          'You can compare: Nainen katso-o Luca-a. with Luca katso-o nais-ta'
          ],
          [],
          [],
          ['-ee in hymyil-ee means that she smiles.',
            <br/>,
          'hymyillä = to smile',
          <br/>,
          'Minä hymyilen = I smile',
          'Sinä hymyilet = you smile',
          'Hän hymyilee = he/she smiles',
          'Me hymyilemme = we smile',
          'Te hymyilette = you all smile',
          'He hymyilevät = they smile'
        ],
        []
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
        name: "Vaatekauppa",
        illustration: "/horizontal_illustration.png",
        storyData: {
          storyTitle: "Vaatekauppa",
          finnishLines: splitByBr(story3Finnish),
          englishLines: splitByBr(story3English),
          spokenLines: splitByBr(story3SpokenFinnish),
          
          FinnishEndingsIndex: extractFinnishEndingsIndex(story3Finnish),
          FinnishTranslationIndex: [ [[0,1], 2, 3],
          [0,1,[2,3]] 
        ],
          EnglishTranslationIndex: [ [0,1,2],
          [0,1,[2,3,4,5]]
      ]
        },
        quizData: [
            { question: 'Miten sanotaan "I am hungry" suomeksi?', options: ['Minulla on nälkä', 'Olen nälkä', 'Minä syön nälkä', 'Minulla on syönyt'], answer: 'Minulla on nälkä' },
            { question: 'Mitä orava teki kastanjalle?', options: ['Antoi sen Leolle', 'Piilotti sen puuhun', 'Varasti sen', 'Söi sen isän kanssa'], answer: 'Varasti sen' },
            { question: 'Miksi isä ei syönyt soijamakkaraa?', options: ['Hän ei pidä siitä', 'Se oli loppu', 'Hän on allerginen soijalle', 'Hän on vegaani'], answer: 'Hän on allerginen soijalle' },
            { question: 'Mitä tapahtui tarinan lopussa?', options: ['Leo sai uuden kastanjan', 'Perhe meni nukkumaan', 'Orava pieraisi', 'Isä grillasi lisää ruokaa'], answer: 'Orava pieraisi' }
        ]
      },
      {name: "Ensimmäinen työpäivä",
        illustration: "/horizontal_illustration.png",
        storyData: {
          storyTitle: "Ensimmäinen työpäivä",
          finnishLines: splitByBr(story4Finnish),
          englishLines: splitByBr(story4English),
          spokenLines: splitByBr(story4SpokenFinnish),

          FinnishEndingsIndex: extractFinnishEndingsIndex(story4Finnish),
          FinnishTranslationIndex: [],
          EnglishTranslationIndex: [],
          quizData: [
            { question: 'Mikä on Jarkkon nimi?', options: ['Pomo', 'Jarkko', 'Luca', 'Aino'], answer: 'Jarkko' },
            { question: 'Mikä on Luca työ?', options: ['Pilvi-integraatio', 'Kahvi', 'Hissi', 'Vaatekauppa'], answer: 'Pilvi-integraatio' },
            { question: 'Miten pääsee Ruoholahteen?', options: ['Raitiovaunulla', 'Sähköpyörällä', 'Raitiovaunulla ja sähköpyörällä', 'Ei pääse'], answer: 'Raitiovaunulla ja sähköpyörällä' }
          ]
        }
      },
      {name: "Yksin kotona",
        illustration: "/horizontal_illustration.png",
        storyData: {
          storyTitle: "Yksin kotona",
          finnishLines: splitByBr(story5Finnish),
          englishLines: splitByBr(story5English),
          spokenLines: splitByBr(story5SpokenFinnish),

          FinnishEndingsIndex: extractFinnishEndingsIndex(story5Finnish),
          FinnishTranslationIndex: [],
          EnglishTranslationIndex: [],
          quizData: [
            { question: 'Mikä on Luca työ?', options: ['Pilvi-integraatio', 'Kahvi', 'Hissi', 'Vaatekauppa'], answer: 'Pilvi-integraatio' },
            { question: 'Miten pääsee Ruoholahteen?', options: ['Raitiovaunulla', 'Sähköpyörällä', 'Raitiovaunulla ja sähköpyörällä', 'Ei pääse'], answer: 'Raitiovaunulla ja sähköpyörällä' }
          ]
        }
      }
  ]; 