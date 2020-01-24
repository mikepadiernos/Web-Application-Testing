import React from 'react';
import { Route } from 'react-router-dom';
import ScoreBoard from "./components/ScoreBoard/ScoreBoard";

function App() {
  return (
    <main className="App">
      <header>
        <h1>Scoreboard</h1>
      </header>
      <Route exact path="/" component={ScoreBoard} />
    </main>
  );
}

export default App;
