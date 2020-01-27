import React from 'react';
import ScoreBoardTime from "./ScoreBoardTime";
import ScoreBoardScores from "./ScoreBoardScores";
import ScoreBoardAtBat from "./ScoreBoardAtBat";

const ScoreBoard = ({ball, strike, foul, hit}) => {
	return (
		<section className="scoreboard">
			<ScoreBoardTime />
			<ScoreBoardScores />
			<ScoreBoardAtBat
				ball={ball}
				strike={strike}
				foul={foul}
				hit={hit}
			/>
		</section>
	)
};

export default ScoreBoard;