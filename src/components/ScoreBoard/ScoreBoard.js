import React from 'react';
import ScoreBoardTime from "./ScoreBoardTime";
import ScoreBoardScores from "./ScoreBoardScores";
import ScoreBoardAtBat from "./ScoreBoardAtBat";

const ScoreBoard = () => {
	return (
		<section className="scoreboard">
			<ScoreBoardTime />
			<ScoreBoardScores />
			<ScoreBoardAtBat />
		</section>
	)
};

export default ScoreBoard;