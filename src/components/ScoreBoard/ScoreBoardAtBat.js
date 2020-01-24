import React from 'react';

const ScoreBoardAtBat = () => {
	return (
		<div>
			<div className="sbab sbab-ball">
				<div className="sb-title sbab-ball-title">Ball</div>
				<div className="sb-item sbab-ball-score">03</div>
			</div>
			<div className="sbab sbab-strike">
				<div className="sb-title sbab-strike-title">Strike</div>
				<div className="sb-item sbab-strike-strike">01</div>
			</div>
			<div className="sbab sbab-out">
				<div className="sb-title sbab-out-title">Out</div>
				<div className="sb-item sbab-out-score">2</div>
			</div>
		</div>
	)
};

export default ScoreBoardAtBat;