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
  Luca kysy-y: "Mikä sinu-n nime-si on?" <br> 
  Nainen sano-o: "Aino." <br> 
  Luca: "Minu-n nimi on Luca." <br> 
  Luca: "Asu-n toise-ssa kerrokse-ssa." <br> 
  Aino: "Asu-n yläkerra-ssa-si." <br> 
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
  Luca kysy-y: "Mikä su-n nime-s on?" <br> 
  Nainen sano-o: "Aino." <br> 
  Luca: "Mu-n nimi on Luca." <br> 
  Luca: "Asu-n toka-s kerrokse-s." <br> 
  Aino: "Asu-n yläkerra-ssa-s." <br> 
  Hissi pysähty-y. <br> 
  Ding! <br> 
  Luca astu-u ulos.`;
  
  const story3Finnish = `
  Luca-lla on kylmä. <br>
  Luca menee vaatekauppa-an. <br>
  Myyjä: Hei! Miten voi-n auttaa? <br>
  Luca: Minu-lla on kylmä. <br>
  Myyjä: Suosittel-en pitk-iä kalsar-eita. <br>
  Luca: Suosittel-et pitk-iä kalsar-eita? <br>
  Myyjä: Kyllä. Kuten kalsarit, mutta pitkä-t. Ne näyttä-vät leggings-eiltä. <br>
  Luca: Mies-ten leggingsit. <br>
  Myyjä: Ja sinu-n takki on ohut. Osta talvitakki. <br>
  Luca: Missä talvitaki-t ovat? <br>
  Myyjä: Suoraan eteenpäin ja vasemma-lle. <br>
  Luca: Kiitos. <br>
  Luca löytää musta-n talvitaki-n. <br>
  Myyjä: Siinä kaikki? <br>
  Luca: Siinä kaikki. <br>
  Myyjä: Osta vielä pipo. <br>
  Luca: Okei, pipo vielä. <br>
  Myyjä: Musta vai valkoinen? <br>
  Luca: Valkoinen. <br>
  Myyjä: 238 euro-a, kiitos. <br>
  Luca maksaa korti-lla. <br>
  Luca: Kiitos! Hei hei. <br>
  Myyjä: Kiitos! Moi moi. <br>
  `;
  
  const story3English = `
  Luca is cold. <br>
  Luca goes to a clothing store. <br>
  Salesperson: Hi! How can I help? <br>
  Luca: I am cold. <br>
  Salesperson: I recommend longjohns. <br>
  Luca: You recommend longjohns? <br>
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
  Luca: Mu-lla on kylmä. <br>
  Myyjä: Suosittel-en pitk-ii kalsar-eit. <br>
  Luca: Suosittel-et pitk-ii kalsar-eit? <br>
  Myyjä: Joo. Niinku kalsarit mut pitkät. Ne näyttää leggingseilt. <br>
  Luca: Mies-ten leggingsit. <br>
  Myyjä: Ja su-n takki on ohut. Osta talvitakki. <br>
  Luca: Mis talvitak-it on? <br>
  Myyjä: Suoraa eteenpäin ja vasemma-l. <br>
  Luca: Kiitos. <br>
  Luca löytää musta-n talvitaki-n. <br>
  Myyjä: Siinä kaikki? <br>
  Luca: Siinä kaikki. <br>
  Myyjä: Osta viel pipo. <br>
  Luca: Okei, pipo viel. <br>
  Myyjä: Musta vai valkonen? <br>
  Luca: Valkonen. <br>
  Myyjä: 238 euro-o, kiitti. <br>
  Luca maksaa korti-l. <br>
  Luca: Kiitos! Hei hei. <br>
  Myyjä: Kiitos! Moi moi. <br>
  `;
 
  const story4Finnish = `
Pomo: Tervetuloa! <br>
Luca: Kiitos. <br>
Pomo ja Luca kättele-vät. <br>
Pomo: Minä ole-n Jarkko. <br>
Luca: Minä ole-n Luca. <br>
Jarkko: Halua-t-ko kahvi-a? <br>
Luca: Kyllä, kiitos. <br>
Jarkko: Minä-kin ota-n kahvi-a. Maanantaiaamu. <br>
Mie-het otta-vat kahvi-a automaati-sta. <br>
Automaati-sta lähte-e kova ääni: surrrr. <br>
Luca: Täällä on tosi vähän ihmi-siä. <br>
Jarkko: Hybridityö. <br>
Luca: Ahaa. <br>
Jarkko: Minu-lla on ensimmäinen työ sinu-lle. <br>
Luca: Mikä työ? <br>
Jarkko: Tekoälyprojekti. Asiakkaa-lle Ruoholahde-ssa. <br>
Luca: Miten pääse-n Ruoholaht-een? <br>
Jarkko: Ota raitiovaunu. Tai yrityk-sen sähköpyörä. Siinä on talvirenka-at. <br>
`;

const story4English = `
Boss: Welcome! <br>
Luca: Thanks. <br>
The boss and Luca shake hands. <br>
Boss: I'm Jarkko. <br>
Luca: I'm Luca. <br>
Jarkko: Do you want coffee? <br>
Luca: Yes, please. <br>
Jarkko: I will have coffee too. Monday morning. <br>
The men take coffee from the machine. <br>
The machine makes a loud sound: brrrr. <br>
Luca: There are very few people here. <br>
Jarkko: Hybrid work. <br>
Luca: Aha. <br>
Jarkko: I have your first task. <br>
Luca: What task? <br>
Jarkko: An artificial intelligence project. For a client in Ruoholahti. <br>
Luca: How do I get to Ruoholahti? <br>
Jarkko: Take the tram. Or the company's electric bike. It has winter tires. <br>
`;

const story4SpokenFinnish = `
Pomo: Tervetuloo! <br>
Luca: Kiitos. <br>
Pomo ja Luca kättel-ee. <br>
Pomo: Mä oo-n Jarkko. <br>
Luca: Mä oo-n Luca. <br>
Jarkko: Halu-u-ks kahvi-i? <br>
Luca: Joo, kiitos. <br>
Jarkko: Mä-kin ota-n kahvi-i. Maanantaiaamu. <br>
Miehe-t otta-a kahvi-i automaati-st. <br>
Automaati-st lähte-e kova ääni: surrrr. <br>
Luca: Tääl on tosi vähän ihmi-sii. <br>
Jarkko: Hybridityö. <br>
Luca: Ahaa. <br>
Jarkko: Mu-l on eka duuni su-lle. <br>
Luca: Mikä duuni? <br>
Jarkko: Tekoälyprojekti. Asiakkaa-l Ruoholahde-ssa. <br>
Luca: Miten pääse-n Ruoholaht-ee? <br>
Jarkko: Ota ratikka. Tai firma-n sähköpyörä. Siin on talvirenka-at. <br>
`;

const story5Finnish = `
Töi-den jälkeen Luca on yksin kotona. <br>
Luca on keittiö-ssä. <br>
Luca katso-o kaappi-in. <br>
Kaapi-ssa on tee-tä ja kahvi-a. <br>
Kaapi-ssa on myös näkkileipä-ä. <br>
Luca katso-o jääkaappi-in. <br>
Jääkaapi-ssa on maito-a ja voi-ta. <br>
Maito on vanha-a. <br>
Onneksi on maitojauhetta <br>
Luca keittää kupi-n tee-tä. <br>
Luca laittaa voi-ta näkkileiväl-le. <br>
Näkkileipä maistu-u vähän oudo-lta. <br>
Lämmin tee maistu-u hyvä-ltä. <br>
Luca selaa sosiaalis-ta media-a. <br>
Tee-n jälkeen Luca katso-o elokuva-a. <br>
Elokuva-n jälkeen Luca men-ee nukku-maan. <br>
`;

const story5English = `
After work, Luca is home alone. <br>
Luca is in the kitchen. <br>
Luca looks in the cupboard. <br>
There is tea and coffee in the cupboard. <br>
There is also crispbread in the cupboard. <br>
Luca looks in the fridge. <br>
There is milk and butter in the fridge. <br>
The milk is old. <br>
Luckily there is milk powder. <br>
Luca makes a cup of tea. <br>
Luca puts butter on the crispbread. <br>
The crispbread tastes a bit strange. <br>
The warm tea tastes good. <br>
Luca scrolls through social media. <br>
After the tea, Luca watches a movie. <br>
After the movie, Luca goes to sleep. <br>
`;

const story5SpokenFinnish = `
Töide-n jälkeen Luca on yksin kotona. <br>
Luca on keittiö-s. <br>
Luca katto-o kaappi-in. <br>
Kaapi-s on tee-tä ja kahvi-i. <br>
Kaapi-s on kans näkkileipä-ä. <br>
Luca katto-o jääkaappi-in. <br>
Jääkaapi-s on maito-o ja voi-ta. <br>
Maito on vanha-a. <br>
Onneks on maitojauhetta. <br>
Luca keittää kupi-n tee-tä. <br>
Luca laittaa voi-ta näkkileivä-l. <br>
Näkkileipä maistu-u vähä oudo-lt. <br>
Lämmin tee maistu-u hyvä-lt. <br>
Luca selaa somee. <br>
Tee-n jälkeen Luca katt-oo leffa-a. <br>
Leffa-n jälkeen Luca mene-e nukku-u. <br>
`;



  
  export const topics = [
    {
      name: "Luca saapuu Suomeen",
      illustration: `/image1.png`,
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
          [0, [1, 2]], 
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
          [0, [1, 2, 3], [4, 5]], 
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
            'They are intended to be short and clear.',
            <br/>,
            'Grammar is often learnt best in context.',
            'So do not spend too much time on these grammar notes, focus on understanding the story.',
            <br/>,
            'lentokentällä = lentokenttä (airport) + -llä (on).',
            'So in Finnish you are "on" the airport.',
          <br/>,
          '"on" = "is" is a form of "olla" = "to be".'],
          ['on = is is a form of "olla" = "to be".'],
          [
            'kahvia = kahvi + -a is a form we encounter very often.', 
            <br/>,
            'Here it means Luca drinks some coffee. (as in it is not specified how much)',
            'If he would drink exactly one coffee, it would be "Luca juo kahvin".',
            <br/>,
            'There will be plenty of examples of these forms.',
            'They are probably best learnt in context, slowly, as you get used to it.',
            'The -a ending is changed to -ä, -ta, -tä, -tta or -ttä depending on the word.',
            <br/>,
            'Notice how kahvi resembles the English word coffee a little bit.'
          ],
          ['kallista = kallis (expensive) + -ta',
            'is similar to the form we had before: kahvia = kahvi + -a,',
            'even though kallis is an adjective.',
            <br/>,
            'Depending on the word, the ending can be different:',
            '-a, -ä, -ta, -tä, -tta or -ttä.'
          ],
          ['Again outoa = outo (strange/weird) + -a',
            'Same form as kallista in the previous sentence.'],
          [
            'There is no "the" word in Finnish.',
            'So kahvi can be either "the coffee" or "coffee".',
            <br/>,
            'To native Finnish speakers, it is generally clear from context whether we mean a specific "the" coffee or coffee in general.',
            <br/>,
            'In this particular example, it could actually be either.',
            'So "But coffee helps" would also be a correct translation if one understands kahvi to mean coffee in general here.'
          ],
          ['Suomalaiset = suomalainen (Finn, or Finnish person) + -set (ending meaning many) = Finns.',
            <br/>,
            'juovat = juo + -vat (ending meaning many) = drink',
            <br/>,
            'Earlier we had Luca juo. Now Suomalaiset juovat.',
            'The basic form of juo is juoda (to drink).',
            <br/>,
            'For different people, it would be: ',
            'Minä juon = I drink',
            'Sinä juot = you drink',
            'Hän juo = he/she drinks)',
            'Me juomme = we drink',
            'Te juotte = you all drink',
            'He juovat = they drink'
          ],
          ['Bussia = bussi + -a is the same form as kahvi + -a earlier.',
            'Like said, it is a very common form in Finnish.',
            'It usually features in this kind of sentence: "A affects/does something to/performs an action on B."',
            <br/>,
            'The other typical form is the one that ends with -n',
            'Luca etsii bussin would indicate that he looked for a very specific bus, or if you in a different context want to emphasize that he looks for exactly one bus.',
            <br/>,
            'If you as a beginner would not use this form but say "Luca etsii bussi" or "Luca etsiä bussi", everyone would understand you even if it would be incorrect grammatically.' ,
            <br/>,
            'Etsii = etsiä (to look for / search) + -i (ending meaning he/she looks).',
            'Notice how the last ä-letter drops off when saying he looks for.',
            <br/>,
            'The verb etsiä changes similarly but a bit differently from juoda on the previous page:',
            'Minä etsin = I look for',
            'Sinä etsit = you look for',
            'Hän etsii = he/she looks for',
            'Me etsimme = we look for)',
            'Te etsitte = you all look for',
            'He etsivät = they look for'
          ],
          ['Tulee = tulla (arrive/come) + -ee (ending meaning he/she/it arrives/comes).',
            <br/>,
            'Minä tulen = I come',
            'Sinä tulet = you come',
            'Hän tulee = he/she/it comes',
            'Me tulemme = we come',
            'Te tulette = you all come',
            'He tulevat = they come'
          ],
          ['englantia = englanti (English) + -a.',
            'Once again the same form as kahvia and bussia earlier.',
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
        ['Lunta = lumi (snow) + -ta. Again the same form as kahvia, bussia, englantia earlier.',
          'But notice that different from those examples, the word "lumi" changes quite a lot to "lunta".',
          <br/>,
          'This happens quite often in Finnish, that only the "stem" of the word remains in the changed forms. It is something you will get used to as you learn more Finnish.'
        ],
        ['On kylmä would literally translate to Is cold.',
          'In Finnish "It" would be "Se", but it is not used for such general descriptions.',
          'Se on kylmä = It is cold, but it only describes something very specific for "It", and would be wrong in this context.'
        ],
        ['Tosi kylmä is a bit informal could also be said as erittäin (very) kylmä or todella (really) kylmä.'],
        ['Kaunis = kaunis (beautiful) + -ta, again the same form as kallista (expensive) when we described the coffee.'],
        ['hymyilee = hymyillä (smile) + -ee',
          <br/>,
          'Minä hymyilen = I smile',
          'Sinä hymyilet = you smile',
          'Hän hymyilee = he/she smiles',
          'Me hymyilemme = we smile',
          'Te hymyilette = you all smile',
          'He hymyilevät = they smile'
        ],
        ['If you want one grammar takeaway from this chapter, pay attention to the forms that end with -a, -ä, -ta, -tä, -tta or -ttä. They are very common in Finnish.',
          <br/>,
          'We had several examples like kahvi-a, bussi-a, englanti-a, lun-ta (from lumi, where the word changed more).',
          <br/>,
          'We also had similar examples for adjectives: kallis-ta, outo-a, kaunis-ta.'
        ]

      ]
      },
      quizData: [
        { question: 'How do you say "Finland" in Finnish?', options: ['Suomi', 'Ruotsi', 'Venäjä', 'Finland'], answer: 'Suomi' },
        { question: 'What is "coffee" in Finnish?', options: ['lumi', 'bussi', 'kahvi', 'kohvi'], answer: 'kahvi' },
        { question: 'What is "bus" in Finnish?', options: ['auto', 'bussi', 'vene', 'lumi'], answer: 'bussi' },
        { question: 'What is "beautiful" in Finnish?', options: ['lumi', 'lunta', 'kaunis', 'kallis'], answer: 'kaunis' },
        { question: 'Missä Luca on?', options: ['lentokentällä', 'Italiassa', 'autossa', 'veneessä'], answer: 'lentokentällä' },
        { question: 'Miksi Luca juo kahvia?', options: ['Se on halpaa', 'Hän on janoinen', 'Hän on väsynyt', 'Hän pitää mausta'], answer: 'Hän on väsynyt' },
        { question: 'Puhuuko bussinkuljettaja englantia?', options: ['Kyllä', 'Paljon', 'Ei', 'Vain espanjaa'], answer: 'Ei' }
      ]
    },
    {
      name: "Luca hississä",
      illustration: "/image2.png",
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
            [0, [1, 2], 3, [4, 5], [6, 7], 8], 
            [0, [1, 2], 3], 
            [0, [1, 2], 3, 4, 5],
            [0, [1, 2], [3, 4, 5, 6]],
            [0, [1, 2], [3, 4, 5]], 
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
            [0, 1, 2, 4, 5, 3], 
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
          'Hän seisoo = he/she stands',
          'Me seisomme = we stand',
          'Te seisotte = you all stand',
          'He seisovat = they stand'
          ],
          ['In seiso-o the end -o refers to that he stands.'],
          ['-ta in nais-ta refers to that she is the object of his look.',
            'Same form as in many words in the previous chapter, like kahvi-a, bussi-a etc.'
          ],
          ['And now he is the object of her look, which adds the ending -a to Luca-a.',
            <br/>,
          'You can compare: Nainen katso-o Luca-a. with Luca katso-o nais-ta'
          ],
          ['sanoa = to say',
            <br/>,
            'Minä sanon = I say',
            'Sinä sanot = you say',
            'Hän sanoo = he/she says',
            'Me sanomme = we say',
            'Te sanotte = you all say',
            'He sanovat = they say',
            <br/>,
            'puhua = to speak, sanoa = to say',
          ],
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
        [],
        ['The ending -si refers to "your". nimi = name, nime-si = your name. (note how the word changes a bit)',
          <br/>,
          'The different endings for someone\'s name (nimi) are:',
          <br/>,
          '(minu-n) nime-ni = my name',
          '(sinu-n) nime-si = your name',
          '(häne-n) nime-nsä = his/her name',
          '(meidä-n) nime-mme = our name',
          '(teidä-n) nime-nne = you all\'s name/names',
          '(heidä-n) nime-nsä = their name/names',
          <br/>,
          'Both "nimesi" and "sinun nimesi" mean your name, but in introduction it is common to add the pronoun.'
        ],
        [],
        ['More formal would be "minun nime-ni", but "minun nimi" is also correct, and more casual.'],
        ['Here is a typical example of two identical endings: toise-ssa kerrokse-ssa. (toinen = second, kerros = floor)',
          <br/>,
          'In Finnish, also the adjective changes, so when we say "on the second floor", we say "toise-ssa kerrokse-ssa".',
          <br/>,
          '-ssa actually means "in", not "on" so in Finnish you are "in a floor" not "on a floor".',
          <br/>,
          'kerros = floor, layer. So if you want to understand the logic of "in a floor" more deeply, it is in a way "in a layer" (of apartments).',
        ],
        ['yläkerta = upstairs. yläkerra-ssa-si has two endings, where -ssa means "in" and -si means "your".',
          <br/>,
          'In Finnish it is typical to add more than one ending to a word. Typically these would correspond to two prepositions in English, in this case "in your", but in English this particular sentence is written differently as "from you".'
        ],
        ['pysähtyä = to stop, pysähty-y refers to it (the elevator) stops'],
        [],
        ['Some grammar takeaways from this chapter: ',
          <br/>,
        'We had endings like -si corresponding to "your" in Finnish. (in the grammar notes you can also find endings for my, his/hers etc.)',
        <br/>,
        'We also had double endings for one word, like -ssa + -si (in your)',
        <br/>,
        'and the same ending -ssa duplicated for two words (toise-ssa kerrokse-ssa).'
        ]
        ]
      },
      quizData: [
        { question: 'What is "elevator" in Finnish?', options: ['bussi', 'hissi', 'kassi', 'pussi'], answer: 'hissi' },
        { question: 'What is "name" in Finnish?', options: ['mini', 'nimi', 'nami', 'nainen'], answer: 'nimi' },
        { question: 'What is "in the elevator" in Finnish?', options: ['bussissa', 'hississä', 'hissillä', 'hissi'], answer: 'hississä' },
        { question: 'What is "your name" in Finnish?', options: ['nimeni', 'nimi', 'nimesi', 'nimemme'], answer: 'nimesi' },
        { question: 'Missä Luca tapaa naisen?', options: ['bussissa', 'lentokentällä', 'hississä', 'yläkerrassa'], answer: 'hississä' },
        { question: 'Mikä naisen nimi on?', options: ['Aino', 'Anna', 'Luca', 'Sitä ei mainita'], answer: 'Aino' },
        { question: 'Missä Luca asuu?', options: ['Hotellissa', 'Ainon alakerrassa', 'Ainon yläkerrassa', 'Sitä ei kerrota'], answer: 'Ainon yläkerrassa' }
      ]
    },
    {
        name: "Vaatekauppa",
        illustration: "/image3.png",
        storyData: {
          storyTitle: "Vaatekauppa",
          finnishLines: splitByBr(story3Finnish),
          englishLines: splitByBr(story3English),
          spokenLines: splitByBr(story3SpokenFinnish),
          
          FinnishEndingsIndex: extractFinnishEndingsIndex(story3Finnish),
          FinnishTranslationIndex: [ [[0,1], 2, 3],
          [0,1,[2,3]],
          [0, 1, 2, [3, 4], 5],
          [0, [1, 2], 3, 4],
          [0, [1, 2], [3, 4, 5, 6]],
          [0, [1, 2], [3, 4, 5, 6]],
          [0, 1, 2, 3, 4, [5,6], 7, [8, 9,], [10, 11]],
          [0, [1, 2], 3],
          [0, 1, [2, 3], 4, 5, 6, 7, 8],
          [0, 1, [2, 3], 4],
          [0, 1, 2, 3, [4, 5]],
          [0, 1],
          [0, 1, [2, 3, 4, 5]],
          [0, [1, 2]],
          [0, [1, 2]],
          [0, 1, 2, 3],
          [0, 1, 2, 3],
          [0, 1, 2, 3],
          [0, 1],
          [0, 1, [2, 3], 4],
          [0, 1, [2, 3]],
          [0, 1, 2, 3],
          [0, 1, 2, 3]


        ],
          EnglishTranslationIndex: [ [0,1,2],
          [0,1,[2,3,4,5]],
          [0, 1, 2, [3, 4], 5],
          [0, 1, 2, 3],
          [0, [1, 2], 3],
          [0, [1, 2], 3],
          [0, 1, 2, 3, 4, 5, 6, [7, 8], 9],
          [0, 1, 2],
          [0, 1, 2, 3, 4, 5, 6, [7, 8, 9]],
          [0, 1, [3, 4, 5], 2],
          [0, 1, 2, 3, [4, 5, 6]],
          [0, 1],
          [0, 1, [2, 3, 4, 5]],
          [0, [1, 2, 3]],
          [0, [1, 2, 3]],
          [0, 1, 4, [2,3]],
          [0, 1, 2, [3, 4]],
          [0, 1, 2, 3],
          [0, 1],
          [0, 1, 2, 3],
          [0, 1, [2, 3]],
          [0, 1, 2, 3],
          [0, 1, 2, 3]


      ],
      grammarNotes: [
        ['Here you see a difference in logic between Finnish and English.',
        'Luca on kylmä would also mean Luca is cold, but that would sound like he is cold emotionally.',
        'Luca-lla on kylmä means he is feeling cold.',
      <br/>,
      'The -lla ending literally means on or with and it is used to describe what someone has or is experiencing.',
      'Lucalla on kahvi is a more concrete sentence meaning that Luca has a coffee.',
      <br/>,
      'It might take some time to get used to how -lla is used like this.'
    ],
        ['vaate=cloth / clothing item, kauppa=store and in Finnish words are often written together.',
          '-an means into.'
        ],
        ['voin = I can. You can also write the long form minä voin = I can.',
          'In Finnish you do not have to write the word minä for I as the form tells who is doing the action.',
          <br/>,
          'voida = can, to be able to.',
          'Minä voin = I can',
          'Sinä voit = you can',
          'Hän voi = he/she can',
          'Me voimme = we can',
          'Te voitte = you all can',
          'He voivat = they can'
        ],
        ['Again the same -lla form for Luca to say he is feeling cold.',
          'Minä olen kylmä = I am cold would sound like he is cold emotionally.',
        ],
        ['Suosittel-en, short for minä suosittelen = I recommend',
          'suositella = to recommend',
          <br/>,
          'kalsarit = underwear',
          'pitkät kalsarit = long underwear / longjohns',
          'Kalsarit is always plural in Finnish. Like scissors or trousers in English that are always plural.'
        ],
        ['The question "Suosittel-et pitkiä kalsareita? is nearly identical to the phrase in the previous sentence.',
          <br/>,
          'A question "Do you recommend longjohns?" would be "Suosittel-et-ko pitkiä kalsareita?"',
          'There would be the additional ending -ko, to mark a question.'
        ],
        ['näyttää = to look like, to show. Ne näyttä-vät = they look like.'
        ],
        ['mies = man, miesten = mens\'',
          'Something for one man, man\'s would be miehen.',
          <br/>,
          'When you have something for many, or many owners of something, a letter t is often added before the -en ending.',
          'It takes time to get used to these forms.'
         ],
         ['talvi = winter, takki = coat / jacket, talvitakki = winter coat, written together in Finnish.',
          <br/>,
          'Notice also how there are no "a" nor "the" words in Finnish, but you get from context whether we mean a specific winter coat or a general winter coat.'
         ],
         ['olla = to be is the basic form, ne ovat = they are.',
          'talvitakit ovat = the winter coats are',
          <br/>,
          'olla is the most common verb in Finnish and it can be tricky,',
          'so it is worth studying and paying attention to all the different forms of olla.',
          <br/>,
          'Minä olen = I am',
          'Sinä olet = you are',
          'Hän/se on = he/she/it is',
          'Me olemme = we are',
          'Te olette = you all are',
          'He/ne ovat = they are',
          <br/>,
          'takki = coat, taki-t = the coats.',
          'coats in general would be takkeja.',
          'While for a single jacket takki can be either a coat or the coat, depending on context,',
          'when there are many, the word changes depending on whether we mean the coats or many coats in general.',
          <br/>,
          'Also notice the different word order for the question in Finnish and English.'],
          [],
          [],
          ['The -n ending in musta-n talvitaki-n is often used in this kind of sentence,',
            'where an action is completed.',
            <br/>,
            'We have seen the other form with -a, -ia, -ta type endings, where an action is performed, but not a final, complete one like here.',
            'Remember for example Luca katsoo nais-ta that means Luca looks at her.',
            'If he finds a woman, we consider it a more "complete" action and would say Luca löytää nais-en.',
            <br/>,
            'It is difficult to explain these forms in a simple way',
            'With time you get used to them and their logic.'
          ],
          ['Siinä means there, but it is a bit different than the word there in English.',
            'It is used to point to something specific, often something that is nearby.',
            'It\'s meaning is often also closer to therein.',
            'Tuolla is there as in over there.'
          ],
          [],
          ['ostaa = to buy, osta = buy, as in a command or request'],
          ['Okei = okay might be closer to spoken language than a dictionary word.',
          'Hyvä on (roughly: fine) or sopii (roughly: it suits/works) are often used.'
          ],
          [],
          [],
          ['There is no word please in Finnish. Adding kiitos = thank you at the end is as close as it gets.'],
          ['The -lla ending is quite versatile in Finnish.',
            'While the most common meaning is "on" something, it can mean with, by, at etc in different contexts.',
            'Remember also that Luca-lla on kylmä meant Luca is feeling cold / Luca has it cold.',
            <br/>,
            'maksaa = to pay',
            'Here the same form pay is also used for he pays (hän maksaa).',
            'This often happens, but often also he/she also has a different form.',
            'Remember for example Luca katsoo = Luca looks, even though the basic form is katsoa'
          ],
          [],
          ['A grammar takeaway for this chapter is the form ending with -n',
            <br/>,
            'The -n form is similar to the -a, -ä, -ta, -tä, -tta or -ttä form.',
            <br/>,
            'Both forms usually occur when A affects / performs an action / does something to B. But the -n form occurs when the action is somehow very complete and specific as in when Luca finds the black winter coat he is looking for: Luca löytää musta-n talvitaki-n. If you want to just say that he found a jacket, it would be Luca löytää taki-n.',
          ]

    ]
        },
        quizData: [
            { question: 'What is "cold" in Finnish', options: ['kuuma', 'lämmin', 'kylmä', 'jääkylmä'], answer: 'kylmä' },
            { question: 'What is "coat" in Finnish', options: ['takki', 'tikki', 'punkki', 'hyttynen'], answer: 'takki' },
            { question: 'What is "winter" in Finnish', options: ['kevät', 'kesä', 'syksy', 'talvi'], answer: 'talvi' },
            { question: 'How do you say "Luca finds a coat" in Finnish', options: ['Luca etsii takkia', 'Luca löytää takin', 'Luca löytää talvi', 'Luca ostaa leggingsit'], answer: 'Luca löytää takin' },


            { question: 'Miksi Luca meni vaatekauppaan?', options: ['Luca rakastaa shoppailua', 'Lucalla oli kylmä', 'Vahingossa', 'Luca etsi WC:tä'], answer: 'Lucalla oli kylmä' },
            { question: 'Löysikö Luca talvitakin', options: ['Kyllä', 'Ei'], answer: 'Kyllä' },
            { question: 'Minkä värisen pipon Luca osti?', options: ['valkoisen', 'sinisen', 'keltaisen', 'mustan'], answer: 'mustan' }
        ]
      },
      {name: "Ensimmäinen työpäivä",
        illustration: "/image4.png",
        storyData: {
          storyTitle: "Ensimmäinen työpäivä",
          finnishLines: splitByBr(story4Finnish),
          englishLines: splitByBr(story4English),
          spokenLines: splitByBr(story4SpokenFinnish),

          FinnishEndingsIndex: extractFinnishEndingsIndex(story4Finnish),
          FinnishTranslationIndex: [
           [0, 1],
           [0, 1],
           [0, 1, 2, [3,4]],
           [0, [1, 2, 3], 4],
           [0, [1, 2, 3], 4],    
           [0, [1, 2, 3], [4,5]],
           [0, 1, 2],
           [0, [1, 2], [3, 4], [5, 6], 7],
           [[0, 1], [2, 3], [4, 5], [6, 7]],
           [[0, 1], [2, 3], [4, 5], 6],
           [0, 1, 2, 3, 4, [5, 6]],
           [0, 1],
           [0, 1],
           [0, [1, 2], 3, 4, 5, [6, 7]],
           [0, 1, 2],
           [0, 1, [2, 3], [4,5]],
           [0, 1, [2, 3], [4,5]],
           [0, 1, 2, 3, [4, 5], 6, 7, 8, 9, [10, 11]]

    
    
    
          ],
          EnglishTranslationIndex: [
            [0, 1],
            [0, 1],
            [[0, 1], 2, 3, [4,5]],
            [0, 1, 2],    
            [0, 1, 2],    
            [0, [1, 2, 3], 4],
            [0, 1, 2],    
            [0, [1, 5], [2, 3], 4, [6, 7]],
            [[0, 1], 2, 3, [4, 5, 6]],
            [[0, 1], 2, [3, 4, 5], 6],
            [0, 6, 2, 3, 4, 5],
            [0, 1],
            [0, 1],
            [0, 1, 2, 4, 5, 3],
            [0, 1, 2],
            [0, [1, 2, 3, 4], [5, 6, 7], [8, 9]],
            [0, 1, [3, 4], [5, 6]],
            [0, 1, [2, 3], 4, [5, 6], [7, 8], 9, 10, [11, 12]]

          ],
          grammarNotes: [
            [],
            [],
            ['kätellä = to shake hands. In Finnish shake hands combines into one word, approximately "handing"',
              <br/>,
              'Minä kättelen = I shake hands',
              'Sinä kättelet = you shake hands',
              'Hän kättelee = he/she shakes hands',
              'Me kättelemme = we shake hands',
              'Te kättelette = you all shake hands',
              'He kättelevät = they shake hands'
            ],
            ['You can say either olen or minä olen, both mean I am.',
              'When introducing oneself, it is common to add the word "minä".',
              <br/>,
              'Minä olen = I am',
              'Sinä olet = you are',
              'Hän on = he/she is',
              'Me olemme = we are',
              'Te olette = you all are',
              'He ovat = they are',
              <br/>,
              'It is good to pay a lot of attention to the different forms and uses of olla.',
              'Most commonly olla = to be. But olla is used also in some other contexts.',
              <br/>,
              '"olla" is also used for "have", depending on the context. There is no separate word for "have".',
              <br/>,
              'For example "I have a coffee" is "Minulla on kahvi".',
              'Here you have to add the -lla (which usually means "on" in English). "Minä olen kahvi" would mean "I am coffee", and "Minä on kahvi" is incorrect.',
              <br/>,
              'And in the past tense form "I have done something" is "Olen tehnyt jotain".',
              'Or "I have not done anything" is "En ole tehnyt mitään".',
            ],
            [],
            ['haluta = to want, halua-t = you want, halua-t-ko = do you want.',
              <br/>,
              '-ko as and ending turns a word into a question.'],
            [],
            ['Minä-kin = I too. Notice the word order difference',
            'In English you could also say "I too will have coffee", but it is not as common.',
              <br/>,
              'ottaa = to take, minä otan = I take',
              <br/>,
              'There is technically also a future form of I will take in Finnish: Tulen ottamaan,',
              'but that is not common and would usually only be used if specifying something further in the future.',
            ],
            ['Mie-het = the men, men in general would be miehiä',
              <br/>,
              '-sta means from. automaatista = from the machine.',
              <br/>,
              'ottaa = to take',
              <br/>,
              'Minä otan = I take',
              'Sinä otat = you take',
              'Hän ottaa = he/she takes',
              'Me otamme = we take',
              'Te otatte = you all take',
              'He ottavat = they take'
            ],
            ['lähteä = to leave, lähtee = leaves.',
              'In Finnish we say that a sound leaves (from) something, which while technically correct in English, is not common or how people speak.',
              <br/>,
              'An almost literal translation "From the machine leaves a loud sound" is grammatically incorrect in English, but could be used in a poetic style.',
              <br/>,
              'Words describing sounds in Finnish like "surrrr" for a vibrating buzz are often quite different from the English versions.',
              'For example dog barks are written as "hau hau" in Finnish and "woof woof" in English.',
              '"Pam" is used for "bang" etc.'
            ],
            ['Translating literally to "Here are very few people" is borderline correct in English, but bad style.',
              'The word "there" in "There are very few people here" does not have a counterpart in the Finnish version.',
              <br/>,
              'tosi vähän = very little / very few.',
              'This could also be said more formally as "todella vähän" or "erittäin vähän".',
            ],
            [],
            [],
            ['-lla = on, with normally. But when you have something you say "minu-lla on". ',
              <br/>,
              'olla = to be, have, depending on the context. There is no separate word for "have".'
            ],
            [],
            ['teko = made up, artificial, äly = intelligence, projekti = project, tekoäly = artificial intelligence, tekoälyprojekti = an artificial intelligence project. In Finnish words are often written together like this.',
              '-lle most commonly stands for "to" or "onto". Example: laita kahvi pöydälle = put the coffee on the table. (pöytä = table)',
              'But just like prepositions like "for" in English are multi-use, so are Finnish endings.',
              'So something done for something will use the -lle ending.'
            ],
            [],
            [],
            [],
            [],
            []
          ]
        },
          quizData: [
            { question: 'Which of the following means "do you want"?', options: ['ottaa', 'otatko', 'haluaa', 'haluatko'], answer: 'haluatko' },
            { question: 'How do you say "me too" or "I too"?', options: ['minäkö', 'minä', 'minäkin', 'minässä'], answer: 'minäkin' },
            { question: 'How do you say "the men"? Not "men" in general.', options: ['miehet', 'miehiä', 'naiset', 'naisia'], answer: 'miehet' },
            { question: 'How do you say "people"? As in many people in general, not "the people"', options: ['miehet', 'miehiä', 'ihmiset', 'ihmisiä'], answer: 'ihmisiä' },
            { question: 'Mitä miehet ottivat automaatista?', options: ['teetä', 'kahvia', 'olutta', 'vettä'], answer: 'kahvia' },
            { question: 'Kuinka paljon ihmisiä oli toimistolla?', options: ['paljon', 'tosi paljon', 'tosi vähän', 'ei yhtään'], answer: 'tosi vähän' },
            { question: 'Mikä päivä oli? (which weekday was it?)', options: ['maanantai', 'tiistai', 'keskiviikko', 'torstai'], answer: 'maanantai' }

          ]
        
      },
      {name: "Yksin kotona",
        illustration: "/image5.png",
        storyData: {
          storyTitle: "Yksin kotona",
          finnishLines: splitByBr(story5Finnish),
          englishLines: splitByBr(story5English),
          spokenLines: splitByBr(story5SpokenFinnish),

          FinnishEndingsIndex: extractFinnishEndingsIndex(story5Finnish),
          FinnishTranslationIndex: [
            [[0, 1], 2, 3, 4, 5, 6], // Töi-den jälkeen Luca on yksin kotona.
            [0, 1, [2, 3]], // Luca on keittiö-ssä.
            [0, [1, 2], [3, 4]], // Luca katso-o kaappi-in.
            [[0, 1], 2, [3, 4], 5, [6, 7]], // Kaapi-ssa on tee-tä ja kahvi-a.
            [[0, 1], 2, 3, [4, 5]], // Kaapi-ssa on myös näkkileipä-ä.
            [0, [1, 2], [3, 4]], // Luca katso-o jääkaappi-in.
            [[0, 1], 2, [3, 4], 5, [6, 7]], // Jääkaapi-ssa on maito-a ja voi-ta.
            [0, 1, [2, 3]], // Maito on vanha-a.
            [0, 1, [2, 3]], // Onneksi on maitojauhet-ta
            [0, 1, [2, 3], [4, 5]], // Luca keittää kupi-n tee-tä.
            [0, 1, [2, 3], [4, 5]], // Luca laittaa voi-ta näkkileiväl-le.
            [0, [1, 2], 3, [4, 5]], // Näkkileipä maistu-u vähän oudo-lta.
            [0, 1, [2, 3], [4, 5]], // Lämmin tee maistu-u hyvä-ltä.
            [0, 1, [2, 3], [4, 5]], // Luca selaa sosiaalis-ta media-a.
            [[0, 1], 2, 3, [4, 5], [6, 7]], // Tee-n jälkeen Luca katso-o elokuva-a.
            [[0, 1], 2, 3, [4, 5], [6, 7]] // Elokuva-n jälkeen Luca men-ee nukku-umaan.
          ],
          EnglishTranslationIndex: [
            [1, 0, 2, 3, 5, 4], // After work, Luca is home alone.
            [0, 1, [2, 3, 4]], // Luca is in the kitchen.
            [0, 1, [2, 3, 4]], // Luca looks in the cupboard.
            [[5, 6, 7], [0, 1], 2, 3, 4], // There is tea and coffee in the cupboard.
            [[5, 6, 7], [0, 1], 2, 3, 4], // There is also crispbread in the cupboard.
            [0, 1, [2, 3, 4]], // Luca looks in the fridge.
            [[5, 6, 7], [0, 1], 2, 3, 4], // There is milk and butter in the fridge.
            [[0, 1], 2, 3], // The milk is old.
            [0, [1, 2], [3, 4]], // Luckily there is milk powder.
            [0, 1, [2, 3], [4, 5]], // Luca makes a cup of tea.
            [0, 1, 2, [3, 4, 5]], // Luca puts butter on the crispbread.
            [[0, 1], 2, [3, 4], 5], // The crispbread tastes a bit strange.
            [1, [0, 2], 3, 4], // The warm tea tastes good.
            [0, [1, 2], 3, 4], // Luca scrolls through social media.
            [[1, 2], 0, 3, 4, [5, 6]], // After the tea, Luca watches a movie.
            [[1, 2], 0, 3, 4, [5, 6]] // After the movie, Luca goes to sleep.
          ],

          grammarNotes: [
            ['First page, work in progress'],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []

          ]

        },
          quizData: [
            { question: 'Mikä on Luca työ?', options: ['Pilvi-integraatio', 'Kahvi', 'Hissi', 'Vaatekauppa'], answer: 'Pilvi-integraatio' },
            { question: 'Miten pääsee Ruoholahteen?', options: ['Raitiovaunulla', 'Sähköpyörällä', 'Raitiovaunulla ja sähköpyörällä', 'Ei pääse'], answer: 'Raitiovaunulla ja sähköpyörällä' }
          ]
        }
      
  ]; 