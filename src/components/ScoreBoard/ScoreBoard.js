import React from 'react';
import ScoreBoardTime from "./ScoreBoardTime";
import ScoreBoardScores from "./ScoreBoardScores";
import ScoreBoardAtBat from "./ScoreBoardAtBat";

const ScoreBoard = () => {
	return (
		<section>
			<ScoreBoardTime />
			<ScoreBoardScores />
			<ScoreBoardAtBat />
		</section>
	)
};

export default ScoreBoard;