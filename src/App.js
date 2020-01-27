import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import DashBoard from "./components/DashBoard/DashBoard";

function App() {

  const [strike, setStrike] = useState('0');
  const [ball, setBall]     = useState('0');

  return (
    <main className="app app-container">
      <div className="wrapper">
        <header>
          <h1>Scoreboard</h1>
        </header>
        <div role="main-content" className="main-content">
          <ScoreBoard />
          <DashBoard />
        </div>
      </div>
    </main>
  );
}

export default App;
