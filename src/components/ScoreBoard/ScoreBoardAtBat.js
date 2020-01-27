import React from 'react';

const ScoreBoardAtBat = () => {
	return (
		<div className="sbab">
			<div className="sbab-ball">
				<div className="sb-title sbab-ball-title">Ball</div>
				<div className="sb-item sbab-ball-score">03</div>
			</div>
			<div className="sbab-strike">
				<div className="sb-title sbab-strike-title">Strike</div>
				<div className="sb-item sbab-strike-strike">01</div>
			</div>
			<div className="sbab-foul">
				<div className="sb-title sbab-foul-title">Foul</div>
				<div className="sb-item sbab-foul-strike">01</div>
			</div>
			<div className="sbab-hit">
				<div className="sb-title sbab-hit-title">Hit</div>
				<div className="sb-item sbab-hit-score">02</div>
			</div>
		</div>
	)
};

export default ScoreBoardAtBat;