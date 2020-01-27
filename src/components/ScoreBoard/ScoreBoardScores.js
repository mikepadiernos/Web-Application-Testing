import React from 'react';

const ScoreBoardScores = () => {
	return (
		<div>
			<div className="sbs sbs-home">
				<div className="sb-title sbs-home-title">Home</div>
				<div className="sb-item sbs-home-score">12</div>
			</div>
			<div className="sbs sbs-inning">
				<div className="sb-title sbs-inning-title">Inning</div>
				<div className="sb-item sbs-inning-inning">05</div>
			</div>
			<div className="sbs sbs-guests">
				<div className="sb-title sbs-guests-title">Guests</div>
				<div className="sb-item sbs-guests-score">07</div>
			</div>
		</div>
	)
};

export default ScoreBoardScores;