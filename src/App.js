import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import './css/App.css'

import ScoreBoard from "./components/ScoreBoard/ScoreBoard";
import DashBoard from "./components/DashBoard/DashBoard";

function App() {

  const [strike, setStrike] = useState(0);
  const [ball, setBall]     = useState(0);
  const [foul, setFoul]     = useState(0);
  const [hit, setHit]       = useState(0);

  const reset = () => {
    setBall(0);
    setStrike(0);
    setFoul(0);
  };

  const ballCount = () => {
    ball === 4 ? reset() : setBall(balls => balls + 1);
  };

  const foulCount = () => {
    // foul >= 2 ? setFoul(2) : setFoul(fouls => fouls + 1); setStrike(strikes => strikes + 1);
    if( foul >= 2) {
      setFoul(2);
    } else {
      setFoul(fouls => fouls + 1);
      setStrike(strikes => strikes + 1);
    }
  };

  const strikeCount = () => {
    strike === 3 ? reset() : setStrike(strikes => strikes + 1);
  };

  return (
    <main className="app app-container">
      <div className="wrapper">
        <header>
          <h1>Scoreboard</h1>
        </header>
        <div role="main-content" className="main-content" data-testid="main-content">
          <ScoreBoard
            ball={ball}
            strike={strike}
            foul={foul}
            hit={hit}
          />
          <DashBoard
            ball={ballCount}
            strike={strikeCount}
            reset={reset}
            foul ={foulCount}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
