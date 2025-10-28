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
Luca asforhim coffee (some) drink. <br> 
Coffee asforit expensive. <br> 
Coffee asforit a_bit strange be. <br> 
But coffee asforit function for stands. <br> 
Finns asforthem this (some) everyday drink? <br> 
Luca asforhim bus (some) searches is. <br>
Bus (it_subject) arrives. <br>
Driver asforhim nothing hedoesntsay. <br>
Outside at asforthere snow (it_subject) itfalling is
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
るかはくうこうにいる。 <br> 
るかはつかれている。 <br> 
るかはこおひいをのむ。 <br> 
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


const grammarNotes = [
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
];

const quizData = [
    { question: 'How do you say "Finland" in Japanese?', options: ['Finrando', 'Suēden', 'Roshia', 'Finland'], answer: 'Finrando' },
    { question: 'What is "coffee" in Japanese?', options: ['yuki', 'basu', 'koohii', 'kohvi'], answer: 'koohii' },
    { question: 'What is "bus" in Japanese?', options: ['kuruma', 'basu', 'fune', 'yuki'], answer: 'basu' },
    { question: 'What is "beautiful" in Japanese?', options: ['yuki', 'yuki', 'kirei', 'takai'], answer: 'kirei' },
    { question: 'Ruka wa doko ni iru?', options: ['kuukou', 'Itaria', 'kuruma', 'fune'], answer: 'kuukou' },
    { question: 'Naze Ruka wa koohii o nomu?', options: ['yasui kara', 'kare wa nodo ga kawaita', 'kare wa tsukarete iru', 'aji ga suki'], answer: 'kare wa tsukarete iru' },
    { question: 'Basu no untenshu wa eigo o hanasu?', options: ['hai', 'takusan', 'iie', 'supeingo dake'], answer: 'iie' }
  ];





