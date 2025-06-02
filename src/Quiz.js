import React, { useState } from 'react';
import './Quiz.css';

const quizData = [
  {
    question: 'Miten sanotaan "I am hungry" suomeksi?',
    options: ['Minulla on nälkä', 'Olen nälkä', 'Minä syön nälkä', 'Minulla on syönyt'],
    answer: 'Minulla on nälkä'
  },
  {
    question: 'Mitä orava teki kastanjalle?',
    options: ['Antoi sen Leolle', 'Piilotti sen puuhun', 'Varasti sen', 'Söi sen isän kanssa'],
    answer: 'Varasti sen'
  },
  {
    question: 'Miksi isä ei syönyt soijamakkaraa?',
    options: ['Hän ei pidä siitä', 'Se oli loppu', 'Hän on allerginen soijalle', 'Hän on vegaani'],
    answer: 'Hän on allerginen soijalle'
  },
  {
    question: 'Mitä tapahtui tarinan lopussa?',
    options: ['Leo sai uuden kastanjan', 'Perhe meni nukkumaan', 'Orava pieraisi', 'Isä grillasi lisää ruokaa'],
    answer: 'Orava pieraisi'
  }
];

const congratsMessages = [
    "🐷 Sika hyvä!",
    "Mahtavaa!",
    "Loistavaa!",
    "Hyvä!",
    "👑Täydellistä!",
    "Upeaa!",
    "🙂 Jee, oikein!",
    "Oikein! Onneksi olkoon!",
    "😲No huhhuh!",
    "🍀Tuuria vai taitoa? Ei väliä, sillä SE ON OIKEIN!",
    "🦜10 pistettä ja papukaijamerkki!",
    "Kyllä!",
    "🧠 Terävää!",
    "🔥 Olet tulessa!",
    "🥳 Oikein meni!",
    "💪 Vahva suoritus!",
    "🎯 Napakymppi!",
    "👏 Iso käsi!",
    "🦉 Viisaasti valittu!",
    "🌟 Tähtihetki!"]

const Quiz = ({ goBack }) => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const playSound = (file) => {
    const audio = new Audio(process.env.PUBLIC_URL + file);
    audio.play();
  };

  const showPopupWithMessage = (msg, sound) => {
    setPopupMessage(msg);
    playSound(sound);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 1500);
  };

  const handleAnswer = (option) => {
    const isCorrect = option === quizData[current].answer;
    if (isCorrect) {
      setScore(score + 1);
      const msg = congratsMessages[Math.floor(Math.random() * congratsMessages.length)];
      showPopupWithMessage(msg, '/beercansound.mp3');
    } else {
      showPopupWithMessage('Väärä vastaus 😢', '/mosquitosound.mp3');
    }

    setTimeout(() => {
      if (current + 1 < quizData.length) {
        setCurrent(current + 1);
      } else {
        setShowResult(true);
      }
    }, 1500);
  };

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">❓❓ Quiz ❓❓</h1>
      {showResult ? (
        <div className="result">
          <p>Sait {score} / {quizData.length} oikein!</p>
          <button onClick={goBack}>Takaisin tarinaan</button>
        </div>
      ) : (
        <div className="question-card">
          <p className="question">{quizData[current].question}</p>
          <div className="options">
            {quizData[current].options.map((opt, i) => (
              <button key={i} onClick={() => handleAnswer(opt)}>{opt}</button>
            ))}
          </div>
        </div>
      )}
      {showPopup && (
        <div className="popup flying-popup">
          {popupMessage}
        </div>
      )}
    </div>
  );
};

export default Quiz;
