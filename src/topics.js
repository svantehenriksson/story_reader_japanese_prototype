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
  Ruka wa kuukou ni iru. <br> 
  Ruka wa tsukarete iru. <br> 
  Ruka wa koohii o nomu. <br> 
  Koohii wa takai. <br> 
  Koohii wa chotto hen da. <br> 
  Demo koohii wa yaku ni tatsu. <br> 
  Finrandojin wa kore o mainichi nomu? <br> 
  Ruka wa basu o sagashite iru. <br> 
  Basu ga kuru. <br> 
  Untenshu wa eigo o hanasanai. <br> 
  Untenshu wa nanimo iwanai. <br> 
  Ruka wa "Yaa" to iu. <br> 
  Untenshu wa nanimo iwanai. <br> 
  Soto de wa yuki ga futte iru. <br> 
  Yuki ga takusan. <br> 
  Samui. <br> 
  Totemo samui. <br> 
  Yuki wa kirei da. <br> 
  Ruka wa hohoemu. <br> 
  Koko wa Finrando da.`;

  const story1FakeEnglish = `
  Luca asforhim airport at be. <br> 
  Luca asforhim tired be. <br> 
  Luca asforhim coffee (<object) drink. <br> 
  Coffee asforit expensive. <br> 
  Coffee asforit a_bit strange be. <br> 
  But coffee asforit function for stands. <br> 
  Finns asforthem this (some) everyday drink? <br> 
  Luca asforhim bus (some) searches is. <br>
  Bus (it_subject) arrives. <br>
  Driver (it_subject) English (object) notspeak. <br>
  Driver asforhim nothing doesntsay. <br>
  Luca asforhim "Hi." (quote) say. <br>
  Driver asforhim nothing doesntsay. <br>
  Outside at asforthere snow (it_subject) itfalling is <br>
  Snow (it_subject) lots. <br>
  Cold. <br>
  Really cold. <br>
  Snow asforit beautiful be. <br>
  Luca asforhim smile. <br>
  This asforit Finland be.
`;

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
  るか-は-くうこう-に-いる。 <br> 
  るか-は-つかれて-いる。 <br> 
  るか-は-こおひい-を-のむ。 <br> 
  こおひいはたかい。 <br> 
  こおひいはちょっとへんだ。 <br> 
  でもこおひいはやくにたつ。 <br> 
  ふぃんらんどじんはこれをまいにちのむ？ <br> 
  るかはばすをさがしている。 <br> 
  ばすがくる。 <br> 
  うんてんしゅはえいごをはなさない。 <br> 
  うんてんしゅはなにもいわない。 <br> 
  るかは「やあ」という。 <br> 
  うんてんしゅはなにもいわない。 <br> 
  そとではゆきがふっている。 <br> 
  ゆきがたくさん。 <br> 
  さむい。 <br> 
  とてもさむい。 <br> 
  ゆきはきれいだ。 <br> 
  るかはほほえむ。 <br> 
  ここはふぃんらんどだ。`;
  
  const story2Finnish = `
  Ruka wa erebeetaa ni hairu. <br> 
  Erebeetaa ni onna no hito ga iru. <br> 
  Onna no hito wa shizuka ni tatte iru. <br> 
  Ruka mo shizuka ni tatte iru. <br> 
  Ruka wa onna no hito o miru. <br> 
  Onna no hito wa Ruka o miru. <br> 
  Ruka wa "Konnichiwa" to iu. <br> 
  Onna no hito wa "Yaa" to iu. <br> 
  Onna no hito wa hohoemu. <br> 
  Ruka mo hohoemu. <br> 
  Ruka wa "Anata no namae wa nan desu ka" to kiku. <br>
  Onna no hito wa "Aino" to iu. <br> 
  Ruka: "Watashi no namae wa Ruka desu." <br> 
  Ruka: "Watashi wa nikai ni sunde iru." <br> 
  Aino: "Watashi wa anata no ue no kai ni sunde iru." <br> 
  Erebeetaa ga tomaru. <br> 
  Ding! <br> 
  Ruka wa oriru.`;

  const story2FakeEnglish = `
  Luca asforhim elevator in enter. <br>
  Elevator in woman 's person (<-she's subject) be. <br>
  Woman 's person asforher quiet -ly standing be. <br>
  Luca also quiet -ly standing be. <br>
  Luca asforhim woman 's person (<-she's object) look. <br>
  Woman 's person asforher Luca (<-he's object) look. <br>
  Luca asforhim "Hello" (<-that's a quote from him) say. <br>
  Woman 's person asforher "Hi" (quote from her) say. <br>
  Woman 's person asforher smile. <br>
  Luca also smile. <br>
  Luca asforhim "You 's name asforit what is (?) ?" (quote) ask. <br>
  Woman 's person asforher "Aino" (quote) say. <br>
  Luca: "I 's name asforit Luca is". <br>
  Luca: "I asforme second in floor be". <br>
  Aino: "I asforme you 's ***** <br>
  Elevator (it_subject) stop. <br>
  Ding! <br>
  Luca asforhim get_off.
  `;
  
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
  るかはえれべえたあにはいる。 <br> 
  えれべえたあにおんなのひとがいる。 <br> 
  おんなのひとはしずかにたっている。 <br> 
  るかもしずかにたっている。 <br> 
  るかはおんなのひとをみる。 <br> 
  おんなのひとはるかをみる。 <br> 
  るかは「こんにちは」という。 <br> 
  おんなのひとは「やあ」という。 <br> 
  おんなのひとはほほえむ。 <br> 
  るかもほほえむ。 <br> 
  るかは「あなたのなまえはなんですか」ときく。 <br> 
  おんなのひとは「あいの」という。 <br> 
  るか：「わたしのなまえはるかです。」 <br> 
  るか：「わたしはにかいにすんでいる。」 <br> 
  あいの：「わたしはあなたのうえのかいにすんでいる。」 <br> 
  えれべえたあがとまる。 <br> 
  Ding! <br> 
  るかはおりる。`;
  
  const story3Finnish = `
  Ruka wa samui. <br>
  Ruka wa fukuya ni iku. <br>
  Tenin: Konnichiwa! Nani o otetsudai shimasu ka? <br>
  Ruka: Samui desu. <br>
  Tenin: Momohiki o osusume shimasu. <br>
  Ruka: Momohiki o osusume shimasu ka? <br>
  Tenin: Hai. Shitagi mitai desu ga, nagai desu. Reginsu mitai ni mieru. <br>
  Ruka: Dansei you reginsu. <br>
  Tenin: Sore ni anata no jaketto wa usui desu. Fuyu kooto o katte kudasai. <br>
  Ruka: Fuyu kooto wa doko ni arimasu ka? <br>
  Tenin: Massugu saki, hidari desu. <br>
  Ruka: Arigatou. <br>
  Ruka wa kuroi fuyu kooto o mitsukeru. <br>
  Tenin: Sore de zenbu desu ka? <br>
  Ruka: Sore de zenbu desu. <br>
  Tenin: Boushi mo katte kudasai. <br>
  Ruka: Wakarimashita, boushi mo. <br>
  Tenin: Kuro ka shiro? <br>
  Ruka: Shiro. <br>
  Tenin: 238 yuuro, onegai shimasu. <br>
  Ruka wa kaado de shiharau. <br>
  Ruka: Arigatou! Bai bai. <br>
  Tenin: Arigatou! Bai bai. <br>
  `;
  
  const story3FakeEnglish = `
  Luca asforhim cold <br>   
  Luca asforhim clothing_store to go. <br>
  Salesperson: "Hi!" What (object) help do (question) <br>
  Luca: Cold be. <br>
  Salesperson: "Longjohns (object) recommendation do." <br>
  Luca: "Longjohns (object) recommendation do (question)?" <br>
  Salesperson: "Yes. Underwear like be but, long be. Leggings like if appear." <br>
  Luca: "Male forthem leggings." <br>
  Salesperson: "Also and you r jacket asforit thin be. Winter coat (object) buy please." <br>
  Luca: "Winter coats asforthem where in exist (question)?" <br>
  Salesperson: "Straight ahead, left be." <br>
  Luca: "Thanks." <br>
  Luca asforhim black winter coat (object) find. <br>
  Salesperson: "That with all be (question)?" <br>
  Luca: "That with all be." <br>
  Salesperson: "Hat/beanie also buy please." <br>
  Luca: "Understood, beanie too." <br>
  Salesperson: "Black or white?" <br>
  Luca: "White." <br>
  Salesperson: "238 euros, please." <br>
  Luca asforhim card (instrument) pay. <br>
  Luca: "Thanks! Bye bye." <br>
  Salesperson: "Thanks! Bye bye." <br>
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
  Luca: That's all. <br>
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
  るかはさむい。 <br>
  るかはふくやにいく。 <br>
  てにん：「こんにちは！ なにをおてつだいしますか？」 <br>
  るか：「さむいです。」 <br>
  てにん：「ももひきをおすすめします。」 <br>
  るか：「ももひきをおすすめしますか？」 <br>
  てにん：「はい。したぎみたいですが、ながいです。れぎんすみたいにみえる。」 <br>
  るか：「だんせいようれぎんす。」 <br>
  てにん：「それにあなたのじゃけっとはうすいです。ふゆこおとをかってください。」 <br>
  るか：「ふゆこおとはどこにありますか？」 <br>
  てにん：「まっすぐさき、ひだりです。」 <br>
  るか：「ありがとう。」 <br>
  るかはくろいふゆこおとをみつける。 <br>
  てにん：「それでぜんぶですか？」 <br>
  るか：「それでぜんぶです。」 <br>
  てにん：「ぼうしもかってください。」 <br>
  るか：「わかりました、ぼうしも。」 <br>
  てにん：「くろかしろ？」 <br>
  るか：「しろ。」 <br>
  てにん：「238 ゆうろ、お願いします。」 <br>
  るかはかあどでしはらう。 <br>
  るか：「ありがとう！ ばいばい。」 <br>
  てにん：「ありがとう！ ばいばい。」 <br>
  `;
 
  const story4Finnish = `
  Joushi: Youkoso! <br>
  Ruka: Arigatou. <br>
  Joushi to Ruka wa akushu suru. <br>
  Joushi: Watashi wa Jarkko desu. <br>
  Ruka: Watashi wa Ruka desu. <br>
  Jarkko: Kouhii wa ikaga desu ka? <br>
  Ruka: Hai, onegai shimasu. <br>
  Jarkko: Watashi mo kouhii ni shimasu. Getsuyou no asa. <br>
  Otoko-tachi wa kikai kara kouhii o toru. <br>
  Kikai wa ookii oto o dasu: burururu. <br>
  Ruka: Koko wa hito ga totemo sukunai. <br>
  Jarkko: Haiburiddo wooku. <br>
  Ruka: Ahaa. <br>
  Jarkko: Kimi e no saisho no shigoto ga aru. <br>
  Ruka: Donna shigoto? <br>
  Jarkko: Jinkou chinou no purojekuto. Ruoholahti no okyakusama no tame. <br>
  Ruka: Douyatte Ruoholahti ni ikeba ii? <br>
  Jarkko: Toramu de itte. Soretomo kaisha no denki jitensha. Fuyu taiya ga tsuite iru. <br>
`;

const story4FakeEnglish = `
  Boss: Welcome! <br>
  Luca: Thanks. <br>
  Boss and Luca asforthem shake hands. <br>
  Boss: I asforme Jarkko be. <br>
  Luca: I asforme Luca be. <br>
  Jarkko: Coffee asforit IKAGA be (question)? <br>
  Luca: Yes, please be. <br>
  Jarkko: I too coffee NI SHIMASU. Monday 's morning. <br>
  Man-many asforthem *** take coffee from the machine. <br>
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
  じょうし：「ようこそ！」 <br>
  るか：「ありがとう。」 <br>
  じょうしとるかはあくしゅする。 <br>
  じょうし：「わたしはやるっこです。」 <br>
  るか：「わたしはるかです。」 <br>
  やるっこ：「こおひいはいかがですか？」 <br>
  るか：「はい、お願いします。」 <br>
  やるっこ：「わたしもこおひいにします。げつようのあさ。」 <br>
  おとこたちはきかいからこおひいをとる。 <br>
  きかいはおおきいおとをだす：ぶるるる。 <br>
  るか：「ここはひとがとてもすくない。」 <br>
  やるっこ：「はいぶりっどわあく。」 <br>
  るか：「あはあ。」 <br>
  やるっこ：「きみへのさいしょのしごとがある。」 <br>
  るか：「どんなしごと？」 <br>
  やるっこ：「じんこうちのうのぷろじぇくと。るおほらひてぃのおきゃくさまのため。」 <br>
  るか：「どうやってるおほらひてぃにいけばいい？」 <br>
  やるっこ：「とらむでいって。それともかいしゃのでんきじてんしゃ。ふゆたいやがついている。」 <br>
`;

const story5Finnish = `
  Shigoto no ato, Ruka wa hitori de ie ni iru. <br>
  Ruka wa daidokoro ni iru. <br>
  Ruka wa todana o miru. <br>
  Todana ni wa ocha to kouhii ga aru. <br>
  Todana ni wa kurisupupan mo aru. <br>
  Ruka wa reizouko o miru. <br>
  Reizouko ni wa gyuunyuu to bataa ga aru. <br>
  Gyuunyuu wa furui. <br>
  Saiwai, miruku pawadaa ga aru. <br>
  Ruka wa ippai no ocha o ireru. <br>
  Ruka wa kurisupupan ni bataa o nuru. <br>
  Kurisupupan wa chotto hen na aji ga suru. <br>
  Atatakai ocha wa oishii. <br>
  Ruka wa SNS o sukurooru suru. <br>
  Ocha no ato, Ruka wa eiga o miru. <br>
  Eiga no ato, Ruka wa nemuru. <br>
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
  しごとのあと、るかはひとりでいえにいる。 <br>
  るかはだいどころにいる。 <br>
  るかはとだなをみる。 <br>
  とだなにはおちゃとこおひいがある。 <br>
  とだなにはくりすぷぱんもある。 <br>
  るかはれいぞうこをみる。 <br>
  れいぞうこにはぎゅうにゅうとばたあがある。 <br>
  ぎゅうにゅうはふるい。 <br>
  さいわい、みるくぱわだあがある。 <br>
  るかはいっぱいいのおちゃをいれる。 <br>
  るかはくりすぷぱんにばたあをぬる。 <br>
  くりすぷぱんはちょっとへんなあじがする。 <br>
  あたたかいおちゃはおいしい。 <br>
  るかはSNSをすくろおるする。 <br>
  おちゃのあと、るかはえいがをみる。 <br>
  えいがのあと、るかはねむる。 <br>
`;


/*
Ruka wa kuukou ni iru. <br> 
Ruka wa tsukarete iru. <br> 
Ruka wa koohii o nomu. <br> 
Koohii wa takai. <br> 
Koohii wa chotto hen da. <br> 
Demo koohii wa yaku ni tatsu. <br> 
Finrandojin wa kore o mainichi nomu? <br> 
Ruka wa basu o sagashite iru. <br> 
Basu ga kuru. <br> 
Untenshu wa eigo o hanasanai. <br> 
Untenshu wa nanimo iwanai. <br> 
Ruka wa "Yaa" to iu. <br> 
Untenshu wa nanimo iwanai. <br> 
Soto de wa yuki ga futte iru. <br> 
Yuki ga takusan. <br> 
Samui. <br> 
Totemo samui. <br> 
Yuki wa kirei da. <br> 
Ruka wa hohoemu. <br> 
Koko wa Finrando da.`;
*/
  export const topics = [
    {
      name: "Luca saapuu Suomeen",
      illustration: `/image1.png`,
      storyData: {
        storyTitle: "Luca saapuu Suomeen",
        finnishLines: splitByBr(story1Finnish),
        englishLines: splitByBr(story1English),
        fakeEnglishLines: splitByBr(story1FakeEnglish),
        spokenLines: splitByBr(story1SpokenFinnish),
        //FinnishEndingsIndex: [
        //  [3], [], [3], [3], [4], [], [1, 3], [2, 4], [2], [4], [], [], [], [3], [2], [], [], [3], [2], []
        //],
        FinnishEndingsIndex: [],
        FinnishTranslationIndex: [
          [0, 1, 2, 3], // Ruka wa kuukou ni iru.
          [0, 1, 2], // Ruka wa tsukarete iru.
          [0, 1, [2, 3]], // Ruka wa koohii o nomu.
          [0, 1, [2,3]], // Koohii wa takai.
          [0, 1, 2, [3, 4]], // Koohii wa chotto hen da.
          [0, 1, 2], // Demo koohii wa yaku ni tatsu.
          [[0, 1], [2, 3], 4, 5, 6], // Finrandojin wa kore o mainichi nomu?
          [0, [1, 2], [3, 4]], // Ruka wa basu o sagashite iru.
          [0, [1, 2]], // Basu ga kuru.
          [0, 1, 2, [3, 4]], // Untenshu wa eigo o hanasanai.
          [0, 1, 2, 3], // Untenshu wa nanimo iwanai.
          [0, 1, 2], // Ruka wa "Yaa" to iu.  
          [0, 1, 2, 3], // Untenshu wa nanimo iwanai.
          [0, [1, 2, 3]], // Soto de wa yuki ga futte iru.
          [0, [1, 2]], // Yuki ga takusan.
          [0, 1], // Samui.
          [0, 1], // Totemo samui.
          [0, 1, [2, 3]], // Yuki wa kirei da.
          [0, 1, 2], // Ruka wa hohoemu.
          [0, 1, 2, 3], // Koko wa Finrando da.
          [0, 1, [2, 3]], // Ruka wa basu o sagashite iru.
          [0, [1, 2]], // Basu ga kuru.
          [0, 1, 2]
        ],
        EnglishTranslationIndex: [
          [0, 1, [3, 4], 2], //Luca is at the airport.
          [0, 1, 2], //Luca is tired.
          [0, 1, 2], //Luca drinks coffee.
          [[0, 1], 2, 3], //The coffee is expensive.
          [[0, 1], 2, [3, 4], 5], //The coffee is a bit strange.
          [0, [1, 2], 3], //But the coffee helps.
          [0, 1, 2, 3, 4], //Finns drink this every day?
          [0, [1, 2, 3], [4, 5]], //Luca is looking for the bus.
          [[0, 1], 2], //The bus arrives.
          [[0, 1], 2, 3, 4], //The driver doesn't speak English.
          [[0, 1], 2, 3, 4], //The driver doesn't say anything.
          [0, 1, 2], //Luca says: "Hi."
          [[0, 1], 2, 3, 4], //The driver doesn't say anything.
          [2, [0, 1]], //It's snowing outside.
          [[0, 1, 2], 3], //A lot of snow.
          [0, 1], //It's cold.
          [0, 1], //Really cold.
          [[0, 1], 2, 3], //The snow is beautiful.
          [0, [1, 2]], //Luca smiles.
          [0, 1, 2] //This is Finland.
        ],
        grammarNotes: [
          ['Ruka = Luca, wa = topic, kuukou = airport, ni = at/in, iru = be (animate).', 'wa marks topic; ni + iru expresses animate location/existence. Base: iru; inanimate uses aru.'], // Ruka wa kuukou ni iru.
          ['Ruka = Luca, wa = topic, tsukarete = te-form of tsukareru, iru = be.', 'te-iru marks resultant/continuing state → "is tired". Base: tsukareru (to get tired).'], // Ruka wa tsukarete iru.
          ['Ruka = Luca, wa = topic, koohii = coffee, o = object, nomu = drink.', 'o marks direct object; plain non-past shows habitual/present action.'], // Ruka wa koohii o nomu.
          ['Koohii = coffee, wa = topic, takai = expensive (i-adjective).', 'i-adjectives predicate without da/desu; wa topicalizes "as for the coffee…".'], // Koohii wa takai.
          ['Koohii = coffee, wa = topic, chotto = a bit, hen = strange (na-adj), da = copula.', 'na-adjectives take da when predicative; chotto softens the statement.'], // Koohii wa chotto hen da.
          ['Demo = but, koohii = coffee, wa = topic, yaku ni tatsu = be useful.', 'Fixed expression yaku ni tatsu ("be of use"). Plain form states general fact.'], // Demo koohii wa yaku ni tatsu.
          ['Finrandojin = Finns, wa = topic, kore = this, o = object, mainichi = every day, nomu = drink.', 'Yes/no question by punctuation/intonation; adding ka makes it explicit (nomu ka).'], // Finrandojin wa kore o mainichi nomu?
          ['Ruka = Luca, wa = topic, basu = bus, o = object, sagashite = te-form of sagasu, iru = be.', 'te-iru marks ongoing action → "is looking for". Base: sagasu (to search).'], // Ruka wa basu o sagashite iru.
          ['Basu = bus, ga = subject, kuru = come.', 'ga introduces subject/new info; non-past often denotes near-future instant ("arrives").'], // Basu ga kuru.
          ['Untenshu = driver, wa = topic, eigo = English, o = object, hanasanai = not speak.', 'nai-form negative of hanasu → hanasanai. Polite neg: hanashimasen.'], // Untenshu wa eigo o hanasanai.
          ['Untenshu = driver, wa = topic, nanimo = anything/nothing, iwanai = does not say.', 'nanimo + negative ⇒ "nothing." iwanai = neg. of iu (to say).'], // Untenshu wa nanimo iwanai.
          ['Ruka = Luca, wa = topic, "Yaa" = "Hi", to = quotative, iu = say.', 'to marks quoted speech/thought before iu.'], // Ruka wa "Yaa" to iu.
          ['Untenshu = driver, wa = topic, nanimo = nothing, iwanai = does not say.', 'Repetition emphasizes continued silence; same nanimo + negative pattern.'], // Untenshu wa nanimo iwanai.
          ['Soto = outside, de = at (place of action), wa = topic, yuki = snow, ga = subject, futte = te-form of furu, iru = be.', 'te-iru for ongoing process ("is snowing"); de wa topicalizes the location.'], // Soto de wa yuki ga futte iru.
          ['Yuki = snow, ga = subject, takusan = a lot.', 'Elliptical predicate; understood as "there is a lot of snow."'], // Yuki ga takusan.
          ['Samui = cold (i-adjective).', 'Weather/ambient "it is cold"; subject omitted by default in Japanese.'], // Samui.
          ['Totemo = very, samui = cold.', 'Adverb totemo modifies adjective; same zero-subject weather sentence.'], // Totemo samui.
          ['Yuki = snow, wa = topic, kirei = beautiful (na-adj), da = copula.', 'na-adjectives take da in plain predicative; wa sets snow as topic.'], // Yuki wa kirei da.
          ['Ruka = Luca, wa = topic, hohoemu = to smile.', 'Plain non-past used as narrative present ("smiles"). Base: hohoemu.'], // Ruka wa hohoemu.
          ['Koko = here/this place, wa = topic, Finrando = Finland, da = copula.', 'Basic copula X wa Y da → "This is Finland." Often a realization.'] // Koko wa Finrando da.
      ]
      },
      quizData: [
        { question: 'How do you say "Finland" in Japanese?', options: ['Finrando', 'Suēden', 'Roshia', 'Finland'], answer: 'Finrando' },
        { question: 'What is "coffee" in Japanese?', options: ['yuki', 'basu', 'koohii', 'kohvi'], answer: 'koohii' },
        { question: 'What is "bus" in Japanese?', options: ['kuruma', 'basu', 'fune', 'yuki'], answer: 'basu' },
        { question: 'What is "beautiful" in Japanese?', options: ['yuki', 'yuki', 'kirei', 'takai'], answer: 'kirei' },
        { question: 'Ruka wa doko ni iru?', options: ['kuukou', 'Itaria', 'kuruma', 'fune'], answer: 'kuukou' },
        { question: 'Naze Ruka wa koohii o nomu?', options: ['yasui kara', 'kare wa nodo ga kawaita', 'kare wa tsukarete iru', 'aji ga suki'], answer: 'kare wa tsukarete iru' },
        { question: 'Basu no untenshu wa eigo o hanasu?', options: ['hai', 'takusan', 'iie', 'supeingo dake'], answer: 'iie' }
      ]
    },
    {
      name: "Luca hississä",
      illustration: "/image2.png",
      storyData: {
        storyTitle: "Luca hississä",
        finnishLines: splitByBr(story2Finnish),
        fakeEnglishLines: splitByBr(story2FakeEnglish),
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
          ['Ruka = Luca, wa = topic, erebeetaa = elevator, ni = into/to, hairu = enter (non-past).', 'ni + hairu expresses motion into; base verb: hairu (to enter). wa marks topic.'], //Ruka wa erebeetaa ni hairu.
          ['Erebeetaa = elevator, ni = at/in, onna no hito = woman, ga = subject, iru = exist/be (animate).', 'ga marks subject/new info; ni + iru expresses presence/existence. Base: iru.'], //Erebeetaa ni onna no hito ga iru.
          ['Onna no hito = woman, wa = topic, shizuka = quiet (na-adj), ni = adverbial, tatte = te-form of tatsu, iru = be.', 'te-iru shows progressive state/action → "is standing." na-adj + ni → adverbial "quietly." Base: tatsu (to stand).'], //Onna no hito wa shizuka ni tatte iru.
          ['Ruka = Luca, mo = also, shizuka = quiet, ni = adverbial, tatte = te-form of tatsu, iru = be.', 'mo adds "also/too"; same te-iru progressive. Subject/topic ellipsis is common.'], //Ruka mo shizuka ni tatte iru.
          ['Ruka = Luca, wa = topic, onna no hito = woman, o = object, miru = look at/see.', 'o marks direct object. Plain non-past miru gives narrative present. Base: miru.'], //Ruka wa onna no hito o miru.
          ['Onna no hito = woman, wa = topic, Ruka = Luca, o = object, miru = look at.', 'Word order is flexible; particles carry roles. Contrast with previous line.'], //Onna no hito wa Ruka o miru.
          ['Ruka = Luca, wa = topic, "Konnichiwa" = hello, to = quotative, iu = say.', 'to marks quoted speech/thought; base verb: iu (to say).'], //Ruka wa "Konnichiwa" to iu.
          ['Onna no hito = woman, wa = topic, "Yaa" = hi, to = quotative, iu = say.', 'Same quotative to + iu construction; casual greeting.'], //Onna no hito wa "Yaa" to iu.
          ['Onna no hito = woman, wa = topic, hohoemu = smile (plain).', 'Plain non-past for narrative present. Base verb: hohoemu.'], //Onna no hito wa hohoemu.
          ['Ruka = Luca, mo = also, hohoemu = smile.', 'mo emphasizes "also." Parallel structure with prior line.'], //Ruka mo hohoemu.
          ['Ruka = Luca, wa = topic, "Anata no namae wa nan desu ka" = what is your name, to = quotative, kiku = ask.', 'to kiku = ask (a question/quote). Polite form desu/ka inside quotes; base: kiku.'], //Ruka wa "Anata no namae wa nan desu ka" to kiku.
          ['Onna no hito = woman, wa = topic, "Aino" = Aino, to = quotative, iu = say.', 'Answer given via to + iu. Base verb: iu.'], //Onna no hito wa "Aino" to iu.
          ['Ruka = Luca, "Watashi no namae wa Ruka desu" = my name is Luca.', 'Set phrase: X no namae wa Y desu. Polite desu used in self-intro.'], //Ruka: "Watashi no namae wa Ruka desu."
          ['Ruka = Luca, "Watashi wa nikai ni sunde iru" = I live on the second floor.', 'te-iru with sumu (to live) expresses current state of residence. Base: sumu.'], //Ruka: "Watashi wa nikai ni sunde iru."
          ['Aino = Aino, "Watashi wa anata no ue no kai ni sunde iru" = I live on the floor above you.', 'ue = above; no links nouns; te-iru with sumu for ongoing residence.'], //Aino: "Watashi wa anata no ue no kai ni sunde iru."
          ['Erebeetaa = elevator, ga = subject, tomaru = stop/come to a stop.', 'Intransitive verb tomaru (stops). Transitive is tomeru (to stop something).'], //Erebeetaa ga tomaru.
          ['(onomatopoeia) = Ding!', 'Sound effect; sometimes written as chin! or ding! in Japanese scripts.'], //Ding!
          ['Ruka = Luca, wa = topic, oriru = get off/exit (vehicle).', 'oriru used for getting off vehicles (bus/train/elevator). Base: oriru.'] //Ruka wa oriru.
        ]
      },
      quizData: [
        { question: 'What is "elevator" in Japanese?', options: ['basu', 'erebeetaa', 'kaban', 'fukuro'], answer: 'erebeetaa' },
        { question: 'What is "name" in Japanese?', options: ['mini', 'namae', 'nami', 'onna'], answer: 'namae' },
        { question: 'How do you say "in the elevator" in Japanese?', options: ['basu de', 'erebeetaa ni', 'erebeetaa de', 'erebeetaa'], answer: 'erebeetaa ni' },
        { question: 'How do you say "your name" in Japanese?', options: ['watashi no namae', 'namae', 'anata no namae', 'bokutachi no namae'], answer: 'anata no namae' },
        { question: 'Ruka wa doko de onna no hito ni au?', options: ['basu', 'kuukou', 'erebeetaa', 'uenokai'], answer: 'erebeetaa' },
        { question: 'Onna no hito no namae wa?', options: ['Aino', 'Anna', 'Ruka', 'wakarimasen'], answer: 'Aino' },
        { question: 'Ruka wa doko ni sunde iru?', options: ['hoteru', 'Aino no shita no kai', 'Aino no ue no kai', 'wakarimasen'], answer: 'Aino no ue no kai' }
      ]
    },
    {
        name: "Vaatekauppa",
        illustration: "/image3.png",
        storyData: {
          storyTitle: "Vaatekauppa",
          finnishLines: splitByBr(story3Finnish),
          fakeEnglishLines: splitByBr(story3FakeEnglish),
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

      /*
  Ruka wa samui. <br>
  Ruka wa fukuya ni iku. <br>
  Tenin: Konnichiwa! Nani o otetsudai shimasu ka? <br>
  Ruka: Samui desu. <br>
  Tenin: Momohiki o osusume shimasu. <br>
  Ruka: Momohiki o osusume shimasu ka? <br>
  Tenin: Hai. Shitagi mitai desu ga, nagai desu. Reginsu mitai ni mieru. <br>
  Ruka: Dansei you reginsu. <br>
  Tenin: Sore ni anata no jaketto wa usui desu. Fuyu kooto o katte kudasai. <br>
  Ruka: Fuyu kooto wa doko ni arimasu ka? <br>
  Tenin: Massugu saki, hidari desu. <br>
  Ruka: Arigatou. <br>
  Ruka wa kuroi fuyu kooto o mitsukeru. <br>
  Tenin: Sore de zenbu desu ka? <br>
  Ruka: Sore de zenbu desu. <br>
  Tenin: Boushi mo katte kudasai. <br>
  Ruka: Wakarimashita, boushi mo. <br>
  Tenin: Kuro ka shiro? <br>
  Ruka: Shiro. <br>
  Tenin: 238 yuuro, onegai shimasu. <br>
  Ruka wa kaado de shiharau. <br>
  Ruka: Arigatou! Bai bai. <br>
  Tenin: Arigatou! Bai bai. <br>
      */
      grammarNotes: [
   ['Ruka = Luca, wa = topic, samui = cold (i-adj).', 'i-adjectives can predicate directly; topic "Ruka" implies he feels cold.'], //Ruka wa samui.
   ['Ruka = Luca, wa = topic, fukuya = clothing store, ni = to, iku = go.', 'ni marks destination; plain non-past iku used as narrative present/intention. Base: iku.'], // Ruka wa fukuya ni iku.
   ['Tenin = salesperson, Konnichiwa = hello, Nani = what, o = object, otetsudai = help (suru-noun), shimasu = do (polite), ka = question.', 'suru-noun + shimasu → "to do/offer"; literally "What shall I help with?" Polite service phrase.'], // Tenin: Konnichiwa! Nani o otetsudai shimasu ka?
   ['Samui = cold (i-adj), desu = polite.', 'i-adjective + desu adds politeness; subject omitted ("I am cold").'], // Ruka: Samui desu.
   ['Momohiki = long johns, o = object, osusume = recommendation (suru-noun), shimasu = do (polite).', 'osusume suru = to recommend; object marked by o.'], // Tenin: Momohiki o osusume shimasu.
   ['Momohiki = long johns, o = object, osusume shimasu = recommend (polite), ka = question.', 'Repeating predicate + ka forms a yes/no question for confirmation.'], // Ruka: Momohiki o osusume shimasu ka?
   ['Hai = yes, Shitagi = underwear, mitai = like/seems, desu = polite, ga = but/however, nagai = long (i-adj), Reginsu = leggings, mitai ni = like/as if, mieru = look/appear.', 'X mitai (da) "looks like"; mitai ni + mieru "appears like." ga softens contrast. Base: mieru.'], // Tenin: Hai. Shitagi mitai desu ga, nagai desu. Reginsu mitai ni mieru.
   ['Dansei = male, you = for/use, reginsu = leggings.', 'X-you means "for X." Elliptical noun phrase (no verb needed in context).'], // Ruka: Dansei you reginsu.
   ['Sore ni = and also, anata no = your, jaketto = jacket, wa = topic, usui = thin (i-adj), desu = polite. Fuyu = winter, kooto = coat, o = object, katte = te-form of kau, kudasai = please.', 'te-kudasai makes a polite request "please buy." sore ni adds "also." Base: kau.'], // Tenin: Sore ni anata no jaketto wa usui desu. Fuyu kooto o katte kudasai.
   ['Fuyu kooto = winter coat, wa = topic, doko = where, ni = at, arimasu = exist (polite, inanimate), ka = question.', 'aru/imasu: inanimate uses aru → arimasu. Polite location inquiry pattern "doko ni arimasu ka?"'], // Ruka: Fuyu kooto wa doko ni arimasu ka?
   ['Massugu = straight, saki = ahead, hidari = left, desu = polite.', 'Elliptical copular answer giving directions; nouns as predicates with desu.'], // Tenin: Massugu saki, hidari desu.
   ['Arigatou = thank you.', 'Set phrase; plain casual (polite: arigatou gozaimasu).'], // Ruka: Arigatou.
   ['Ruka = Luca, wa = topic, kuroi = black (i-adj), fuyu kooto = winter coat, o = object, mitsukeru = find (transitive).', 'i-adjective modifies noun; transitive mitsukeru vs intransitive mitsukaru (be found).'], // Ruka wa kuroi fuyu kooto o mitsukeru.
   ['Sore de = with that/then, zenbu = all, desu = is (polite), ka = question.', 'Sore de as summarizing "that is it then?" Desu ka for polite confirmation.'], // Tenin: Sore de zenbu desu ka?
   ['Sore de = with that, zenbu = all, desu = is (polite).', 'Polite confirmation reply; elliptical subject.'], // Ruka: Sore de zenbu desu.
   ['Boushi = hat/beanie, mo = also, katte = te-form of kau, kudasai = please.', 'mo adds "also"; te-kudasai polite request. Base: kau.'], // Tenin: Boushi mo katte kudasai.
   ['Wakarimashita = understood/got it (past polite of wakaru), boushi = beanie, mo = also.', 'Past polite as acknowledgment; fragment repeats "also (a) beanie." Base: wakaru.'], // Ruka: Wakarimashita, boushi mo.
   ['Kuro = black, ka = or, shiro = white.', 'ka connects alternatives in short questions.'], // Tenin: Kuro ka shiro?
   ['Shiro = white.', 'One-word fragment answers are natural in conversation.'], // Ruka: Shiro.
   ['238 yuuro = 238 euros, onegai shimasu = please (request).', 'Set cashier phrase to request payment; literally "(payment), please."'], // Tenin: 238 yuuro, onegai shimasu.
   ['Ruka = Luca, wa = topic, kaado = card, de = by/with (means), shiharau = pay.', 'de marks means/instrument; plain non-past narrative. Base: shiharau.'], // Ruka wa kaado de shiharau.
   ['Arigatou = thanks, Bai bai = bye-bye.', 'Borrowed farewell "bai bai". Interjections stand alone.'], // Ruka: Arigatou! Bai bai.
   ['Arigatou = thanks, Bai bai = bye-bye.', 'Farewell closing; mirrors the customer.'] // Tenin: Arigatou! Bai bai.

    ]
        },
        quizData: [
            { question: 'What is "cold" in Japanese', options: ['atsui', 'atatakai', 'samui', 'gekikou'], answer: 'samui' },
            { question: 'What is "coat" in Japanese', options: ['kooto', 'tikku', 'konchuu', 'hyttynen'], answer: 'kooto' },
            { question: 'What is "winter" in Japanese', options: ['haru', 'natsu', 'aki', 'fuyu'], answer: 'fuyu' },
            { question: 'How do you say "Luca finds a coat" in Japanese', options: ['Ruka wa kooto o sagasu', 'Ruka wa kooto o mitsukeru', 'Ruka wa fuyu o mitsukeru', 'Ruka wa reginsu o kau'], answer: 'Ruka wa kooto o mitsukeru' },


            { question: 'Naze Ruka wa fukuya ni itta?', options: ['Ruka wa shoppingu ga daisuki', 'Ruka wa samukatta', 'tamatta', 'Ruka wa toire o sagashita'], answer: 'Ruka wa samukatta' },
            { question: 'Ruka wa fuyu kooto o mitsuketa ka', options: ['hai', 'iie'], answer: 'hai' },
            { question: 'Ruka ga katta boushi no iro wa?', options: ['shiro', 'ao', 'kiiro', 'kuro'], answer: 'kuro' }
        ]
      },
      {name: "Ensimmäinen työpäivä",
        illustration: "/image4.png",
        storyData: {
          storyTitle: "Ensimmäinen työpäivä",
          finnishLines: splitByBr(story4Finnish),
          fakeEnglishLines: splitByBr(story4FakeEnglish),
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

          /*
            Joushi: Youkoso! <br>
  Ruka: Arigatou. <br>
  Joushi to Ruka wa akushu suru. <br>
  Joushi: Watashi wa Jarkko desu. <br>
  Ruka: Watashi wa Ruka desu. <br>
  Jarkko: Kouhii wa ikaga desu ka? <br>
  Ruka: Hai, onegai shimasu. <br>
  Jarkko: Watashi mo kouhii ni shimasu. Getsuyou no asa. <br>
  Otoko-tachi wa kikai kara kouhii o toru. <br>
  Kikai wa ookii oto o dasu: burururu. <br>
  Ruka: Koko wa hito ga totemo sukunai. <br>
  Jarkko: Haiburiddo wooku. <br>
  Ruka: Ahaa. <br>
  Jarkko: Kimi e no saisho no shigoto ga aru. <br>
  Ruka: Donna shigoto? <br>
  Jarkko: Jinkou chinou no purojekuto. Ruoholahti no okyakusama no tame. <br>
  Ruka: Douyatte Ruoholahti ni ikeba ii? <br>
  Jarkko: Toramu de itte. Soretomo kaisha no denki jitensha. Fuyu taiya ga tsuite iru. <br>
          */
          grammarNotes: [
            ['Joushi = boss, Youkoso = welcome!', 'Set phrase of welcome; spoken interjection, no copula needed.'], //Joushi: Youkoso!
            ['Ruka = Luca, Arigatou = thanks.', 'Casual thanks (more polite: arigatou gozaimasu).'], // Ruka: Arigatou.
            ['Joushi = boss, to = and, Ruka = Luca, wa = topic, akushu = handshake (suru-noun), suru = do.', 'suru-noun + suru → perform the action; "shake hands."'], // Joushi to Ruka wa akushu suru.
            ['Joushi = boss, Watashi = I, wa = topic, Jarkko = Jarkko, desu = copula (polite).', 'Self-intro pattern: Watashi wa X desu.'], // Joushi: Watashi wa Jarkko desu.
            ['Ruka = Luca, Watashi = I, wa = topic, Ruka = Luca, desu = copula.', 'Same self-intro structure; desu adds politeness.'], // Ruka: Watashi wa Ruka desu.
            ['Jarkko = Jarkko, Kouhii = coffee, wa = topic, ikaga = how (polite "how about"), desu ka = question.', 'ikaga desu ka offers politely "Would you like…?" Topic wa sets item offered.'], // Jarkko: Kouhii wa ikaga desu ka?
            ['Ruka = Luca, Hai = yes, onegai shimasu = please (I\'ll take it).', 'onegai shimasu accepts offers politely; literally "please (do for me)."'], // Ruka: Hai, onegai shimasu.
            ['Jarkko = Jarkko, Watashi mo = I also, kouhii ni suru = decide on coffee, Getsuyou no asa = Monday morning.', 'ni suru means "choose/decide on." Nominal time phrase adds context.'], // Jarkko: Watashi mo kouhii ni shimasu. Getsuyou no asa.
            ['Otoko-tachi = men (plural), wa = topic, kikai = machine, kara = from, kouhii = coffee, o = object, toru = take.', 'kara marks source; plural -tachi. Plain non-past narrative.'], // Otoko-tachi wa kikai kara kouhii o toru.
            ['Kikai = machine, wa = topic, ookii = big, oto = sound, o = object, dasu = emit/make: burururu (SFX).', 'dasu "to produce/emit"; noun-modifying with adjectives straightforward.'], // Kikai wa ookii oto o dasu: burururu.
            ['Ruka = Luca, Koko = here, wa = topic, hito = people, ga = subject, totemo = very, sukunai = few.', 'ga marks subject count; sukunai (i-adj) predicates "are few."'], // Ruka: Koko wa hito ga totemo sukunai.
            ['Jarkko = Jarkko, Haiburiddo wooku = hybrid work.', 'Noun statement; English loan rendered as JP katakana concept.'], // Jarkko: Haiburiddo wooku.
            ['Ruka = Luca, Ahaa = aha.', 'Interjection/acknowledgment; no verb needed.'], // Ruka: Ahaa.
            ['Jarkko = Jarkko, Kimi = you (casual), e = to/toward, no = linker, saisho = first, no = linker, shigoto = job/task, ga = subject, aru = there is.', 'ga marks existence; e + no forms "for you" nuance with noun chain.'], // Jarkko: Kimi e no saisho no shigoto ga aru.
            ['Ruka = Luca, Donna = what kind of, shigoto = job?', 'Question word + noun asks type/category.'], // Ruka: Donna shigoto?
            ['Jarkko = Jarkko, Jinkou chinou = artificial intelligence, no = linker, purojekuto = project. Ruoholahti = Ruoholahti, no = of, okyakusama = client (honorific), no = of, tame = for.', 'no links compound nouns; tame indicates purpose/benefit "for (client)."'], // Jarkko: Jinkou chinou no purojekuto. Ruoholahti no okyakusama no tame.
            ['Ruka = Luca, Douyatte = how, Ruoholahti = Ruoholahti, ni = to, ikeba = if/when go (ba-form of iku), ii = good.', 'conditional -eba for advice-seeking "how should I go?" → "ikeba ii?" idiom.'], // Ruka: Douyatte Ruoholahti ni ikeba ii?
            ['Jarkko = Jarkko, Toramu = tram, de = by (means), itte = go (te-form of iku). Soretomo = or else, kaisha = company, no = of/possessive, denki jitensha = e-bike. Fuyu taiya = winter tires, ga = subject, tsuite iru = attached/installed (te-iru state).', 'de marks means; soretomo links alternatives; te-iru indicates current state/result ("is equipped").'] // Jarkko: Toramu de itte. Soretomo kaisha no denki jitensha. Fuyu taiya ga tsuite iru.
          ]
        },
          quizData: [
            { question: 'Which of the following means "do you want" in Japanese?', options: ['toru', 'torimasu ka', 'hoshii', 'hoshii desu ka'], answer: 'hoshii desu ka' },
            { question: 'How do you say "me too" or "I too" in Japanese?', options: ['watashi ka', 'watashi', 'watashi mo', 'watashi ni'], answer: 'watashi mo' },
            { question: 'How do you say "the men" (not men in general) in Japanese?', options: ['otoko', 'otoko-tachi', 'onna', 'onnatachi'], answer: 'otoko-tachi' },
            { question: 'How do you say "people" (many people in general) in Japanese?', options: ['otoko', 'otoko-tachi', 'hito', 'hitobito'], answer: 'hito' },
            { question: 'Otoko-tachi wa automaatto kara nani o torimashita?', options: ['ocha', 'koohii', 'biiru', 'mizu'], answer: 'koohii' },
            { question: 'Ofisu ni hito wa dono kurai imashita?', options: ['ōi', 'totemo ōi', 'totemo sukunai', 'zenzen inai'], answer: 'totemo sukunai' },
            { question: 'Nan yōbi deshita? (which weekday was it?)', options: ['getsuyoubi', 'kayoubi', 'suiyoubi', 'mokuyoubi'], answer: 'getsuyoubi' }
           
          ]
        },
        {
          name: "Yksin kotona",
          illustration: "/image5.png",
          storyData: {
            storyTitle: "Yksin kotona",
            finnishLines: splitByBr(story5Finnish),
            englishLines: splitByBr(story5English),
            spokenLines: splitByBr(story5SpokenFinnish),

            FinnishEndingsIndex: extractFinnishEndingsIndex(story5Finnish),
            FinnishTranslationIndex: [
              [[0, 1], 2, 3, 4, 5, 6],
              [0, 1, [2, 3]],
              [0, [1, 2], [3, 4]],
              [[0, 1], 2, [3, 4], 5, [6, 7]],
              [[0, 1], 2, 3, [4, 5]],
              [0, [1, 2], [3, 4]],
              [[0, 1], 2, [3, 4], 5, [6, 7]],
              [0, 1, [2, 3]],
              [0, 1, [2, 3]],
              [0, 1, [2, 3], [4, 5]],
              [0, 1, [2, 3], [4, 5]],
              [0, [1, 2], 3, [4, 5]],
              [0, 1, [2, 3], [4, 5]],
              [0, 1, [2, 3], [4, 5]],
              [[0, 1], 2, 3, [4, 5], [6, 7]],
              [[0, 1], 2, 3, [4, 5], [6, 7]]
            ],
            EnglishTranslationIndex: [
              [1, 0, 2, 3, 5, 4],
              [0, 1, [2, 3, 4]],
              [0, 1, [2, 3, 4]],
              [[5, 6, 7], [0, 1], 2, 3, 4],
              [[5, 6, 7], [0, 1], 2, 3, 4],
              [0, 1, [2, 3, 4]],
              [[5, 6, 7], [0, 1], 2, 3, 4],
              [[0, 1], 2, 3],
              [0, [1, 2], [3, 4]],
              [0, 1, [2, 3], [4, 5]],
              [0, 1, 2, [3, 4, 5]],
              [[0, 1], 2, [3, 4], 5],
              [1, [0, 2], 3, 4],
              [0, [1, 2], 3, 4],
              [[1, 2], 0, 3, 4, [5, 6]],
              [[1, 2], 0, 3, 4, [5, 6]]
            ],
            grammarNotes: [
              ['Shigoto = work, no ato = after, Ruka = Luca, wa = topic, hitori de = alone, ie = home, ni = at, iru = be.', 'no ato forms "after X"; hitori de "by oneself/alone." iru for animate existence.'], // Shigoto no ato, Ruka wa hitori de ie ni iru.
              ['Ruka = Luca, wa = topic, daidokoro = kitchen, ni = in/at, iru = be.', 'Location with ni + iru (animate). Topic wa frames sentence.'], // Ruka wa daidokoro ni iru.
              ['Ruka = Luca, wa = topic, todana = cupboard, o = object, miru = look at.', 'o marks direct object; plain non-past narrative present. Base: miru.'], //  Ruka wa todana o miru.
              ['Todana = cupboard, ni = in, wa = topic, ocha = tea, to = and, kouhii = coffee, ga = subject, aru = exist (inanimate).', 'aru (inanimate existence); ga marks what exists; ni indicates location.'], // Todana ni wa ocha to kouhii ga aru.
              ['Todana = cupboard, ni = in, wa = topic, kurisupupan = crispbread, mo = also, aru = exist.', 'mo adds "also"; same aru pattern for inanimate existence.'], // Todana ni wa kurisupupan mo aru.
              ['Ruka = Luca, wa = topic, reizouko = fridge, o = object, miru = look at.', 'Parallel to todana line; repetition reinforces structure.'], // Ruka wa reizouko o miru.
              ['Reizouko = fridge, ni = in, wa = topic, gyuunyuu = milk, to = and, bataa = butter, ga = subject, aru = exist.', 'Compound subject with to; aru for inanimate.'], // Reizouko ni wa gyuunyuu to bataa ga aru.
              ['Gyuunyuu = milk, wa = topic, furui = old (i-adjective).', 'i-adjective predicates directly; wa sets milk as topic.'], // Gyuunyuu wa furui.
              ['Saiwai = fortunately, miruku pawadaa = milk powder, ga = subject, aru = exist.', 'Adverbial sentence-initial "saiwai"; aru expresses availability.'], // Saiwai, miruku pawadaa ga aru.
              ['Ruka = Luca, wa = topic, ippai = one cup, no = linker, ocha = tea, o = object, ireru = brew/pour.', 'Classifier + no + noun "a cup of …"; ireru used for making tea/coffee.'], // Ruka wa ippai no ocha o ireru.
              ['Ruka = Luca, wa = topic, kurisupupan = crispbread, ni = on, bataa = butter, o = object, nuru = spread.', 'ni marks target/surface; nuru "to spread (butter etc.)."'], // Ruka wa kurisupupan ni bataa o nuru.
              ['Kurisupupan = crispbread, wa = topic, chotto = a bit, hen = strange (na-adj), na = attributive, aji = taste, ga = subject, suru = do/feel.', 'X na aji (na-adj + aji) modifies "taste"; aji ga suru "tastes/has a flavor."'], // Kurisupupan wa chotto hen na aji ga suru.
              ['Atatakai = warm (i-adj), ocha = tea, wa = topic, oishii = tasty (i-adj).', 'Topic-comment judgment; both i-adjectives.'], // Atatakai ocha wa oishii.
              ['Ruka = Luca, wa = topic, SNS = social media, o = object, sukurooru suru = scroll (do).', 'Loan verb via suru; o marks content being scrolled.'], // Ruka wa SNS o sukurooru suru.
              ['Ocha no ato = after tea, Ruka = Luca, wa = topic, eiga = movie, o = object, miru = watch.', 'no ato "after …"; plain non-past miru as scheduled/near-future narrative.'], // Ocha no ato, Ruka wa eiga o miru.
              ['Eiga no ato = after the movie, Ruka = Luca, wa = topic, nemuru = sleep.', 'Plain non-past narrative result/action after previous event.'] // Eiga no ato, Ruka wa nemuru.
            ]
          },
          quizData: [
            { question: 'Ruka no shigoto wa nani?', options: ['kuroudo intēgureeshon', 'koohii', 'erebeetaa', 'fukuya'], answer: 'kuroudo intēgureeshon' },
            { question: 'Douyatte Ruoholahti ni ikeru?', options: ['ratikka de', 'denki jitensha de', 'ratikka to denki jitensha de', 'ikenai'], answer: 'ratikka to denki jitensha de' }
          ]
        }
      
  ]; 

  /*
  Shigoto no ato, Ruka wa hitori de ie ni iru. <br>
  Ruka wa daidokoro ni iru. <br>
  Ruka wa todana o miru. <br>
  Todana ni wa ocha to kouhii ga aru. <br>
  Todana ni wa kurisupupan mo aru. <br>
  Ruka wa reizouko o miru. <br>
  Reizouko ni wa gyuunyuu to bataa ga aru. <br>
  Gyuunyuu wa furui. <br>
  Saiwai, miruku pawadaa ga aru. <br>
  Ruka wa ippai no ocha o ireru. <br>
  Ruka wa kurisupupan ni bataa o nuru. <br>
  Kurisupupan wa chotto hen na aji ga suru. <br>
  Atatakai ocha wa oishii. <br>
  Ruka wa SNS o sukurooru suru. <br>
  Ocha no ato, Ruka wa eiga o miru. <br>
  Eiga no ato, Ruka wa nemuru. <br>
  */
  