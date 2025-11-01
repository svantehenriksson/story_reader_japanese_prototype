// src/App.js
//import React, { useState } from 'react';
import React, { useState } from 'react';

import StoryReader from './StoryReader';
import Quiz from './Quiz';
import { topics } from './topics'; //Migrate to content/topics.js when classes, data cleaning etc ready

function App() {
  const [view, setView] = useState('story'); // 'story' or 'quiz'
  const [topicIndex, setTopicIndex] = useState(0);
  const [resumeAtLastLine, setResumeAtLastLine] = useState(false);

  const goToQuiz = () => setView('quiz');

  const goToNextChapter = () => {
    setTopicIndex(topicIndex + 1);
    setView('story');
  };

  const goBack = () => {
    setResumeAtLastLine(true);
    setView('story');
  };

  const handleTopicSelect = (index) => {
    setTopicIndex(index);
    setView('story'); // Go back to story view when new topic is selected
  };

  const currentTopic = topics[topicIndex];

  return (
    <>
      {view === 'story' && (
        <StoryReader
          goToQuiz={goToQuiz}
          goToNextChapter={goToNextChapter}
          topic={currentTopic}
          topics={topics}
          handleTopicSelect={handleTopicSelect}
          topicIndex={topicIndex}
          resumeAtLastLine={resumeAtLastLine}
          onResumeHandled={() => setResumeAtLastLine(false)}
        />
      )}
      {view === 'quiz' && <Quiz goBack={goBack} quizData={currentTopic.quizData} />}
    </>
  );
}

export default App;

