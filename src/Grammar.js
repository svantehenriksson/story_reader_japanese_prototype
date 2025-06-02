// src/Grammar.js
/*
export const grammarNotes = [
    "In Finnish, it's said that you have hunger instead of that you are hungry: Minulla on nälkä = I have hunger. Technically, you can also say Minä olen nälkäinen. <br /> Minulla = minä + -lla (with) = I + with.",
    'Syödään is a "passive" form, so mom says roughly as "Soon eating will happen" or "Soon eating will take place". The active form "Kohta syömme" or "Kohta me syömme" is not incorrect, but sounds clumsy.',
    'placeholder',
    'placeholder',
    'placeholder'
  ];
  */

  export const grammarNotes = [
    [
      "In Finnish, you have hunger instead of being hungry.",
      "Minulla on nälkä = I have hunger.",
      "Minulla = minä + -lla (with) = I + with.",
      "Technically, you can also say Minä olen nälkäinen."
    ],
    [    'Syödään is a "passive" form, so mom says roughly as "Soon eating will happen" or "Soon eating will take place.',
         'The active form "Kohta syömme" or "Kohta me syömme" is not incorrect, but sounds clumsy.',
    ],
    [
      'Minulla on nälkä nyt = I have hunger now. (literal translation, sounds awkward in English)',
    ],
    [
      'Metsästä = metsä + -stä (from) = forest + from.',
      <br/>,
      'Etsi is a command (imperative form) of etsiä (to look for or search).',
      <br/>,
      'Finnish does not have prepositions like "from" in English',
      'Instead endings like -ssa (in), -sta (from), -lla (on/with), -lta (from+on or from+with) are used',
      'For some words the last letter becomes "ä": -ssä, stä etc.',
      <br/>,
      'Ruokaa = ruoka + -a (food) means some food. Ruoka is food in general.',
      'The grammar form "ruokaa" is called partitive, but it is not important to know that.',
    ],
    [
      'Okei is spoken Finnish / slang, and it is a loan word from English.',
      'If you want to use standard Finnish, you can say "Selvä" (clear), "Hyvä". (good) or "Sopii" (roughly: it is agreed or it suits me).',
    ],
    [
      '"Viiden" would literally translate to five\'s: viisi (five) + -n (of).',
      'Minuutin = minuutti (minute) + -n (of)',
      'Päästä = pää (head/end) + -stä (from) as in from that point in time',
      <br/>,
      'That\'s how in five minutes is said in Finnish: viiden minuutin päästä.',

    ],
    [
      'Löysin = I found, löytää (find) + -n (with wovel change)',
      <br/>,
      'Past tense is often formed by changing the last vowel to "i". and the -n at the end means that "I" did something',
      <br/>,
      'If you did something, then -t is added and if he/she did it then nothing is added after the last "i"',
      <br/>,
      'Other examples: "olin" (I was) from "olla" (to be), "juoksin" (I ran) from "juosta" (to run)',
      'Olit (you were) from "olla" (to be), "juoksit" (you ran) from "juosta" (to run)',
      'Hän oli (he/she was) from "olla" (to be), "hän juoksi" (he/she ran) from "juosta" (to run)',
      <br/>,
      'You don\'t need to say minä löysin or sinä löysit, because the verb form already tells who did it, but you can if you want to emphasize it. For he/she you should say hän löysi.',
    ],
    [
      'Näköinen would translate directly "lookey" or "almost lookalike"',
      'There is no exact word for it in English, so you say it looks like it or you could say nut-looking'],
    [
      'Orava = a squirrel, but notice that also "the squirrel" would be the same "orava"',
      <br/>, 
      'Juoksee = runs. Present tense for he/she/it is usually formed by adding -ee to the verb stem (or -aa, -ii, -oo, -uu etc, depending on the word)',
      'Juosta (to run) becomes juoksee (he/she/it runs).',
      'I run = juoksen, you run = juokset, we run = juoksemme, they run = juoksevat.',
      <br/>,
      '"Luo" means "to" as in coming to someone. Often it means more than just to. It can refer to a visit or coming emotionally close to someone.',
      'Tulee = comes, same form as juoksee above',
    ],
    [
      'Varasti = stole, varastaa (to steal) + -i (past tense)',
      <br/>,
      'Similar to when Leo found the chestnut earlier: löysin (I found) or Leo löysi (Leo found)',
    ],
    [
      'Valmista = valmis + -ta is again that partitive form, meaning "some food" is ready.',
      'If you would refer very specifically to The Food and for example point to it, you would say "ruoka on valmis"',
      'As in (your specific) Pizza Margherita is ready = "Pizza Margherita on valmis".',
    ],
    [
      'The basic form of eat is syödä, but since it\'s one family, it becomes perhe syö.',
      'Syö is a special word in the sense that it doesn\'t get two wovels in the end, unlike normal words like juosta that becomes juoksee (runs).',
      'If you would say Leo and mom eat soy sausage, you would say "Leo ja äiti syövät soijamakkaraa".',
      'Soijamakkara = soy sausage is a compound word in Finnish: soija (soy) + makkara (sausage).',
    ],
    [
      'Lihamakkara = meat sausage is a compound word: liha (meat) + makkara (sausage).',
      'Soija (soy) + -lle (to) = soijalle (to soy or onto soy).',
      'So in a way, allergic to soy = allerginen soijalle uses the same logic as English, where you are allergic "to" something.',
    ],
    [
      'Väsynyt = tired in the basic form, but it is not used here.',
      'Väsyneitä = many tired (ones). In Finnish, adjectives change to match the noun they describe.',
      <br/>,
      'As a sidenote, you can make a noun from any adjective in Finnish:',
      'Väsynyt can mean a tired one, väsyneitä can mean some tired ones, just by changing the context a tiny bit.',
      'And for example paras (best) becomes the best one just with changing context',
    ],
    [
      'Notice that orava is now "the squirrel" as we have already mentioned it before, but stays identical as orava.',
      <br/>,
      'Makaa = lies is formed by adding -aa to the stem of the basic form of lie = maata.',
      'I lie = makaan, you lie = makaat, we lie = makaamme, they lie = makaavat.',
    ],
    [
      'Se pieraisee = it farts, from pieraista (to fart) + -ee.',
      <br/>,
      'Heilahtaa = flaps stays identical to the basic form, heilahtaa (to flap), as it already sounds like present tense with the -aa at the end.',
    ],
  ];