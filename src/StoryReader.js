import React, { useState, useRef } from 'react';
import './style.css';
import {
  //storyFinnishWords,
  //storyEnglishWords,
  //storySpokenFinnishWords,
    finnishLines,
    englishLines,
    spokenLines,
    startTimes
} from './StoryData';
import { FinnishTranslationIndex, EnglishTranslationIndex } from './StoryData';

import { grammarNotes } from './Grammar';



const StoryReader = ({ goToQuiz }) => {


  const [lineIndex, setLineIndex] = useState(0);
  const [hoveredWordIndex, setHoveredWordIndex] = useState(null);
  const [showGrammar, setShowGrammar] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const isPlayingRef = useRef(false);



  const handleNext = () => {
    if (lineIndex < finnishLines.length - 1) {
      setLineIndex(lineIndex + 1);
      setHoveredWordIndex(null);
      //console.log('Moving to next line:', lineIndex + 2);
      setShowGrammar(false); // Hide grammar notes when moving to next line
      //console.log('Finnish story lines: ', finnishLines);
      //console.log('English story lines:', englishLines);
    }
  };

  const handlePrevious = () => {
    if (lineIndex > 0) {
      setLineIndex(lineIndex - 1);
      setHoveredWordIndex(null);
      //console.log('Moving to previous line:', lineIndex );
      setShowGrammar(false); // Hide grammar notes when moving to next line
    }
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
                  /*console.log(
                    'Finnish group:', group,
                    'isHighlighted:', isHighlighted,
                    'word:', word,
                    'index:', idx
                  );*/
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
          
            /*
            const handlePlay = async () => {
                if (isPlaying) return;
              
                setIsPlaying(true);
                isPlayingRef.current = true;

                console.log('Starting readthrough...');
                console.log('isPlaying and ref when starting readthrough: ', isPlaying, isPlayingRef.current);

              
                for (let i = lineIndex; i < finnishLines.length; i++) {
                  setLineIndex(i);
                  setHoveredWordIndex(null);
              
                  const audio = new Audio(`/line${i}.m4a`);
                  const currentLine = FinnishTranslationIndex[i];
                  let stop = false;
              
                  // Start timed word/group highlighting
                  const highlighter = async () => {
                    for (let j = 0; j < currentLine.length && !stop; j++) {
                      const group = currentLine[j];
                      const firstIndex = Array.isArray(group) ? group[0] : group;
              
                      setHoveredWordIndex(firstIndex);
                      await new Promise(res => setTimeout(res, 1000));
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
                  console.log('isPlaying before if loop: ', isPlaying);

                  if (!isPlayingRef.current)  {
                    //stopEarly = true;
                    console.log('isPlaying in if loop: ', isPlaying);
                    break;
                }
                }
              
                setHoveredWordIndex(null);
                setIsPlaying(false);
                console.log('Finished readthrough.');
              };
*/




const handlePlay = async () => {
  if (isPlaying) return;

  setIsPlaying(true);
  isPlayingRef.current = true;

  console.log('Starting readthrough...');
  console.log('isPlaying and ref when starting readthrough: ', isPlaying, isPlayingRef.current);

 

  const audio = new Audio('/story.mp3');

  // Begin playback of full story audio
  const audioPromise = new Promise((resolve, reject) => {
    audio.play().then(() => {
      audio.onended = () => resolve();
      audio.onerror = () => reject('Audio playback failed');
    });
  });











  // Run the readthrough logic in parallel
  const highlightStory = async () => {
    //for (let i = lineIndex; i < finnishLines.length; i++) {  //Now reading whole story so have to go to first page
    for (let i = 0; i < finnishLines.length; i++) {

  

      if (!isPlayingRef.current) break;

      setLineIndex(i);
      setHoveredWordIndex(null);

      const currentLine = FinnishTranslationIndex[i];

      for (let j = 0; j < currentLine.length; j++) {
        if (!isPlayingRef.current) break;

        const group = currentLine[j];
        const firstIndex = Array.isArray(group) ? group[0] : group;

        setHoveredWordIndex(firstIndex);
       


        let wordNumberInWholeStory = 0;

        // Sum the lengths of all previous lines
        for (let k = 0; k < i; k++) {
          //wordNumberInWholeStory += FinnishTranslationIndex[k].length;
          wordNumberInWholeStory += finnishLines[k].length;

        }

        // Add current group index on this line
        //console.log('Current group:', group, 'at line:', i, 'index:', j);
        //console.log('Current group length:', group.length);
        //console.log('Co-pilot smart group length:', group.length > 0 ? group[0] : 0);
        wordNumberInWholeStory += group.length > 0 ? group[0] : 0;

        // Lookup wait time from global start_times array
        let waitMs = 1000; // default
        if (startTimes[wordNumberInWholeStory + 1] != null) {
          waitMs = (startTimes[wordNumberInWholeStory + 1] - startTimes[wordNumberInWholeStory]) * 1000;
        }
        if (startTimes[wordNumberInWholeStory + 1] != null && group.length > 1) {
          // If this group has multiple words, adjust wait time to be longer
          waitMs = startTimes[wordNumberInWholeStory + group.length] * 1000 - startTimes[wordNumberInWholeStory] * 1000;
        }




        console.log('Group, word, Waiting in ms: ', group, waitMs);

        await new Promise(res => setTimeout(res, waitMs));
      }

      setHoveredWordIndex(null);

      if (!isPlayingRef.current) {
        audio.pause();
        audio.currentTime = 0;
        break;
      }
          }
  };

  // Run both audio and visual in parallel, but keep going even if highlighting ends first
  await Promise.race([
    audioPromise,
    highlightStory()
  ]).catch(console.warn);

  // Cleanup
  setHoveredWordIndex(null);
  setIsPlaying(false);
  isPlayingRef.current = false;

  console.log('Finished readthrough.');
};








              const handleStop = () => {
                console.log('Stopping readthrough...');
                isPlayingRef.current = false;
                setIsPlaying(false);
                setHoveredWordIndex(null);
              }
              
              


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
    <div className="quiz">
    {lineIndex === finnishLines.length - 1 && (
        <button onClick={goToQuiz} className="next-button">
        ❓❓Quiz❓❓
        </button>
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
