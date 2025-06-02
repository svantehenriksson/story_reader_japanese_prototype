import React, { useState } from 'react';
import './style.css';
import {
  //storyFinnishWords,
  //storyEnglishWords,
  //storySpokenFinnishWords,
    finnishLines,
    englishLines,
    spokenLines
} from './StoryData';
import { FinnishToEnglishTranslationsIndex, FinnishTranslationIndex, EnglishTranslationIndex } from './StoryData';

import { grammarNotes } from './Grammar';



const StoryReader = () => {


  const [lineIndex, setLineIndex] = useState(0);
  const [hoveredWordIndex, setHoveredWordIndex] = useState(null);
  const [showGrammar, setShowGrammar] = useState(false);


  const handleNext = () => {
    if (lineIndex < finnishLines.length - 1) {
      setLineIndex(lineIndex + 1);
      setHoveredWordIndex(null);
      console.log('Moving to next line:', lineIndex + 2);
      setShowGrammar(false); // Hide grammar notes when moving to next line
      console.log('Finnish story lines: ', finnishLines);
      console.log('English story lines:', englishLines);
    }
  };

  const handlePrevious = () => {
    if (lineIndex > 0) {
      setLineIndex(lineIndex - 1);
      setHoveredWordIndex(null);
      console.log('Moving to previous line:', lineIndex );
      setShowGrammar(false); // Hide grammar notes when moving to next line
    }
  };

 /* const renderWords = (words, className, isFinnish = false) =>
    words.map((word, idx) => (
      <span
        key={idx}
        className={`story-word ${className} ${
          isFinnish && hoveredWordIndex === idx ? 'highlight' : ''
        }`}
        onTouchStart={() => isFinnish && setHoveredWordIndex(idx)}
        onMouseEnter={() => isFinnish && setHoveredWordIndex(idx)}
        onMouseLeave={() => isFinnish && setHoveredWordIndex(null)}
      >
        {word}
      </span>
    ));
*/

/*
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
      
            if (group) {
              const groupArray = Array.isArray(group) ? group : [group];
      
              // Highlight all members of that group
              isHighlighted = groupArray.includes(idx);
              console.log('Finnish group:', group, 'isHighlighted:', isHighlighted, 'word:', word, 'index:', idx);
            }
          }
      
          return (
            <span
              key={idx}
              className={`story-word ${className} ${isHighlighted ? 'highlight' : ''}`}
              onTouchStart={() => isFinnish && setHoveredWordIndex(idx)}
              //onMouseEnter={() => isFinnish && setHoveredWordIndex(idx)}
              onMouseEnter={() => {
                if (isFinnish) {
                  //console.log('Hovering index:', idx, 'word:', word);
                  setHoveredWordIndex(idx);
                }
              }}
              onMouseLeave={() => isFinnish && setHoveredWordIndex(null)}
            >
              {word}
            </span>
          );
        });
      */

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
                  console.log(
                    'Finnish group:', group,
                    'isHighlighted:', isHighlighted,
                    'word:', word,
                    'index:', idx
                  );
                }
              }
          
              return (
                <span
                  key={idx}
                  className={`story-word ${className} ${isHighlighted ? 'highlight' : ''}`}
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
              );
            });
          



      
/*    const renderWordsEn = (words) =>
        words.map((word, idx) => {
          let isHighlighted = false;
      
          if (hoveredWordIndex != null) {
            const map = FinnishToEnglishTranslationsIndex[lineIndex];
            const mapped = map[hoveredWordIndex];
      
            if (Array.isArray(mapped)) {
              isHighlighted = mapped.includes(idx);
            } else {
              isHighlighted = mapped === idx;
            }
          }
      
          return (
            <span
              key={idx}
              className={`story-word english-word ${isHighlighted ? 'highlight' : ''}`}
            >
              {word}
            </span>
          );
        });
*/
        const renderWordsEn = (words) =>
            words.map((word, idx) => {
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
                <span
                  key={idx}
                  className={`story-word english-word ${isHighlighted ? 'highlight' : ''}`}
                >
                  {word}
                </span>
              );
            });
          
      
        const renderWordsSp = (words) =>
            words.map((word, idx) => (
              <span
                key={idx}
                className={`story-word spoken-word ${
                  hoveredWordIndex === idx ? 'highlight' : ''
                }`}
              >
                {word}
              </span>
            ));
          

 /*   const renderWords = (words, className, lang) =>
        words.map((word, idx) => {
          let isHighlighted = false;
      
          if (lang === 'finnish' && hoveredWordIndex === idx) {
            isHighlighted = true;
          }
      
          if (lang === 'english' && hoveredWordIndex != null) {
            const map = FinnishToEnglishTranslationsIndex[lineIndex];
            const mapped = map[hoveredWordIndex];
      
            if (Array.isArray(mapped)) {
              isHighlighted = mapped.includes(idx);
            } else {
              isHighlighted = mapped === idx;
            }
          }
      
          if (lang === 'spoken' && hoveredWordIndex === idx) {
            isHighlighted = true;
          }
      
          return (
            <span
              key={idx}
              className={`story-word ${className} ${isHighlighted ? 'highlight' : ''}`}
              onTouchStart={() => lang === 'finnish' && setHoveredWordIndex(idx)}
              onMouseEnter={() => lang === 'finnish' && setHoveredWordIndex(idx)}
              onMouseLeave={() => lang === 'finnish' && setHoveredWordIndex(null)}
            >
              {word}
            </span>
          );
        });
   */   




  return (
    <div className="story-container">
    <h1 className="story-title">Orava, joka pieraisi</h1>

    <div className="outer-box">
        <div className="finnish-box story-line finnish">
        {renderWords(finnishLines[lineIndex], 'finnish-word', true)}
        </div>

        <div className="story-line english">
        {renderWordsEn(englishLines[lineIndex], 'english-word')}
        </div>

        <div className="story-line spoken">
        {renderWordsSp(spokenLines[lineIndex], 'spoken-word')}
        </div>
    </div>

    <div className="navigation-buttons">
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
    <div className="story-illustration-container">
        <img className="story-illustration"
        src="/horizontal_illustration.png"
        alt="Leo and family barbecue"
      />
    </div>
    </div>
  );
};

export default StoryReader;
