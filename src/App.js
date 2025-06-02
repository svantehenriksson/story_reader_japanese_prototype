// src/App.js
import React, { useState } from 'react';
import StoryReader from './StoryReader';
import Quiz from './Quiz';

function App() {
  const [view, setView] = useState('story'); // 'story' or 'quiz'

  const goToQuiz = () => setView('quiz');
  const goBack = () => setView('story');

  return (
    <>
      {view === 'story' && <StoryReader goToQuiz={goToQuiz} />}
      {view === 'quiz' && <Quiz goBack={goBack} />}
    </>
  );
}

export default App;

/*

// App.js
import React, { useState } from 'react';
import StoryReader from './StoryReader';
import Quiz from './Quiz';

function App() {
  const [mode, setMode] = useState('story'); // 'story' or 'quiz'

  return (
    <div className="App">
      {mode === 'story' ? (
        <StoryReader goToQuiz={() => setMode('quiz')} />
      ) : (
        <Quiz />
      )}
    </div>
  );
}

export default App;


*/




/*

import React from 'react';
import './style.css';
import StoryReader from './StoryReader';

function App() {
  return (
    <div className="App">
      <StoryReader />
    </div>
  );
}

export default App;
*/