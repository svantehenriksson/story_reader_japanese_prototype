import React, { useState, useRef, useEffect } from 'react';
import './style.css';



const StoryReader = ({ goToQuiz, goToNextChapter, topic, topics, handleTopicSelect, topicIndex: currentTopicIndex, resumeAtLastLine, onResumeHandled }) => {
  const { storyTitle, finnishLines, fakeEnglishLines, englishLines, spokenLines, FinnishTranslationIndex, EnglishTranslationIndex, FinnishEndingsIndex, grammarNotes } = topic.storyData;

  console.log('goToQuiz', goToQuiz, 'goToNextChapter', goToNextChapter, 'topic: ', topic, 'topics: ', topics, 'handleTopicSelect: ', handleTopicSelect, 'CURRENTtopicIndex: ', currentTopicIndex, 'resumeAtLastLine: ', resumeAtLastLine, 'onResumeHandled: ', onResumeHandled);
  console.log('storyTitle: ', storyTitle, 'finnishLines: ', finnishLines, 'fakeEnglishLines: ', fakeEnglishLines, 'englishLines: ', englishLines, 'spokenLines: ', spokenLines, 'FinnishTranslationIndex: ', FinnishTranslationIndex, 'EnglishTranslationIndex: ', EnglishTranslationIndex, 'FinnishEndingsIndex: ', FinnishEndingsIndex, 'grammarNotes: ', grammarNotes);

  const [lineIndex, setLineIndex] = useState(0);
  const [hoveredWordIndex, setHoveredWordIndex] = useState(null);
  const [showGrammar, setShowGrammar] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTopicMenu, setShowTopicMenu] = useState(false);

  const isPlayingRef = useRef(false);

  // If asked to resume at last line (from quiz), jump once and clear flag
  useEffect(() => {
    if (resumeAtLastLine) {
      const lastIdx = (finnishLines?.length || 1) - 1;
      setLineIndex(Math.max(0, lastIdx));
      onResumeHandled && onResumeHandled();
    }
  }, [resumeAtLastLine, finnishLines, onResumeHandled]);


  const handleNext = () => {
    if (lineIndex < finnishLines.length - 1) {
      setLineIndex(lineIndex + 1);
      setHoveredWordIndex(null);
      setShowGrammar(false); // Hide grammar notes when moving to next line
    
    }
  };

  const handlePrevious = () => {
    if (lineIndex > 0) {
      setLineIndex(lineIndex - 1);
      setHoveredWordIndex(null);
      setShowGrammar(false); // Hide grammar notes when moving to next line
    }
  };

  const handleTopicClick = (index) => {
    handleTopicSelect(index);
    setShowTopicMenu(false);
    setLineIndex(0); // Reset line index when changing topic
  }

const handleClickBack = () => {
  goToNextChapter();
  setLineIndex(0);
};

const renderWords = (words, className, isFinnish = false) =>
  words.map((word, idx) => {
    let isHighlighted = false;

      if (isFinnish && hoveredWordIndex != null) {
        const finGroups = FinnishTranslationIndex[lineIndex];

        // Find which group the hovered word belongs to
        const group = finGroups.find(g => {
          const arr = Array.isArray(g) ? g : [g];
          return arr.includes(hoveredWordIndex);
        });

        if (group !== undefined) {
          const groupArray = Array.isArray(group) ? group : [group];
          isHighlighted = groupArray.includes(idx);
        }
      }
      
      return (
        <>
          <span
            key={idx}
            className={`story-word ${className} ${isHighlighted ? 'highlight' : ''} ${
              FinnishEndingsIndex[lineIndex]?.includes(idx) ? 'story-word-ending' : ''
            }`}
            onTouchStart={() => isFinnish && setHoveredWordIndex(idx)}
            onMouseEnter={() => {
              if (isFinnish) {
                setHoveredWordIndex(idx);
              }
            }}
            onMouseLeave={() => isFinnish && setHoveredWordIndex(null)}
          >
            {word}
          </span>
          {/* Add space after word if it's not the last word in the line and not an ending */}
          {idx !== finnishLines[lineIndex].length - 1 && !FinnishEndingsIndex[lineIndex]?.includes(idx+1) && (
            <span key={`${idx}-space`} className="story-word">&nbsp;</span>
          )}
        </>
      );
    });


    const renderWordsFe = (words) =>
      (words || []).map((word, idx) => (
        <>
          <span
            key={idx}
            className={`story-word spoken-word ${
              hoveredWordIndex === idx ? 'highlight' : ''
            }`}
          >
            {word}
          </span>
  
          {/* Add space after word if it's not the last word in the line and not an ending */}
          {idx !== fakeEnglishLines[lineIndex].length - 1 && !FinnishEndingsIndex[lineIndex]?.includes(idx+1) && (
            <span key={`${idx}-space`} className="story-word">&nbsp;</span>
          )}
        </>
      ));






  const renderWordsEn = (words) =>
    (words || []).map((word, idx) => {
      let isHighlighted = false;

      if (hoveredWordIndex != null) {
        const finGroups = FinnishTranslationIndex[lineIndex];
        const engGroups = EnglishTranslationIndex[lineIndex];

        const groupIndex = finGroups.findIndex(g =>
          Array.isArray(g) ? g.includes(hoveredWordIndex) : g === hoveredWordIndex
        );

        if (groupIndex !== -1) {
          const engGroup = engGroups[groupIndex];
          const targetIndices = Array.isArray(engGroup) ? engGroup : [engGroup];
          isHighlighted = targetIndices.includes(idx);
        }
      }
      
      return (
        <>
          <span
            key={idx}
            className={`story-word english-word ${isHighlighted ? 'highlight' : ''}`}
          >
            {word}
          </span>

          {/* Add space after word if it's not the last word */}
          {idx !== englishLines[lineIndex].length - 1 && (
            <span key={`${idx}-space`} className="story-word">&nbsp;</span>
          )}
        </>
      );
    });

  const renderWordsSp = (words) =>
    (words || []).map((word, idx) => (
      <>
        <span
          key={idx}
          className={`story-word spoken-word ${
            hoveredWordIndex === idx ? 'highlight' : ''
          }`}
        >
          {word}
        </span>

        {/* Add space after word if it's not the last word in the line and not an ending */}
        {idx !== finnishLines[lineIndex].length - 1 && !FinnishEndingsIndex[lineIndex]?.includes(idx+1) && (
          <span key={`${idx}-space`} className="story-word">&nbsp;</span>
        )}
      </>
    ));

  const handlePlay = async () => {
    if (isPlaying) return;

    setIsPlaying(true);
    isPlayingRef.current = true;


    for (let i = lineIndex; i < finnishLines.length; i++) {
      setLineIndex(i);
      setHoveredWordIndex(null);

      const audio = new Audio(process.env.PUBLIC_URL + '/line' + i + '.mp3');
      audio.playbackRate = 0.5

      audio.play().catch(err => {
        console.error(`Error playing audio for line ${i}:`, err);
        setIsPlaying(false);
        isPlayingRef.current = false;
      });

      const currentLine = FinnishTranslationIndex[i];
      let stop = false;

      // Start timed word/group highlighting
      const highlighter = async () => {
        for (let j = 0; j < currentLine.length && !stop; j++) {
          const group = currentLine[j];
          const firstIndex = Array.isArray(group) ? group[0] : group;

          setHoveredWordIndex(firstIndex);
          await new Promise(res => setTimeout(res, 700));
        }
        setHoveredWordIndex(null);
      };

      const audioPromise = new Promise((resolve, reject) => {
        audio.play().then(() => {
          audio.onended = () => resolve();
          audio.onerror = () => reject(`Audio line${i} failed`);
        });
      });

      await Promise.all([audioPromise, highlighter()]).catch(console.warn);

      if (!isPlayingRef.current)  {
        //stopEarly = true;
        break;
      }
    }

    setHoveredWordIndex(null);
    setIsPlaying(false);
  };

  const handleStop = () => {
    isPlayingRef.current = false;
    setIsPlaying(false);
    setHoveredWordIndex(null);
  }

  return (
    <div className="story-container">
     { /*<h1 className="story-title">{storyTitle}</h1>*/},

     <div className="outer-box">

     <div className="story-illustration-container">
        <img className="story-illustration"
          src={process.env.PUBLIC_URL + (topic.illustration || '/horizontal_illustration.png')}
          alt="Leo and family barbecue"
        />
      </div>

        <div className="finnish-box story-line finnish">
          {renderWords(finnishLines[lineIndex], 'finnish-word', true)}
        </div>


{/*//Now using same css for English and Fake English*/}
        <div className="story-line english">
          {renderWordsFe(fakeEnglishLines[lineIndex])}
        </div>

        <div className="story-line english">
          {renderWordsEn(englishLines[lineIndex])}
        </div>

        <div className="story-line spoken">
          {renderWordsSp(spokenLines[lineIndex])}
        </div>
      </div>

      <div className="navigation-buttons">
        {isPlaying ? (
          <button
            className="stop-button"
            onClick={handleStop}
            title="Stop story"
          >
            ⏹
          </button>
        ) : (
          <button
            className="play-button"
            onClick={handlePlay}
            title="Play story"
          >
            ▶️
          </button>
        )}

        {lineIndex > 0 && (
          <button className="next-button" onClick={handlePrevious}>
            ⬅️
          </button>
        )}


        {lineIndex < finnishLines.length - 1 && (
          <button className="next-button" onClick={handleNext}>
            ➡️
          </button>
        )}


        <button
          className="next-button"
          onClick={() => setShowGrammar(!showGrammar)}
          title="Grammar tip"
        >
          💡 Grammar etc 💡
        </button>

        {showGrammar && (
          <div className="grammar-popup">
            {grammarNotes[lineIndex].map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        )}
      </div>

      <div style={{ marginTop: '1.5rem', position: 'relative' }}>
        <button className="change-chapter-button" onClick={() => setShowTopicMenu(!showTopicMenu)}>
          Vaihda lukua - Change chapter
        </button>
        {showTopicMenu && (
          <div className="topic-dropdown">
            {topics.map((topic, idx) => (
              <div
                key={topic.name}
                className={`topic-option ${idx === currentTopicIndex ? 'active' : ''}`}
                onClick={() => handleTopicClick(idx)}
              >
                {topic.name}
              </div>
            ))}
          </div>
        )}
      </div>


{/* We use same class for both quiz and next story buttons */}
{lineIndex === finnishLines.length - 1 && (
  <div className="quiz" style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '1rem' }}>
    <button onClick={goToQuiz} className="next-button">
      ❓❓Quiz❓❓
    </button>
    <button onClick={handleClickBack} className="next-button">
      ➡️ Seuraava luku - Next chapter ➡️
    </button>
  </div>
)}

    
    </div>
  );
};

export default StoryReader;
