import React from 'react';

const ScoreBoardAtBat = ({ball, strike, foul, hit}) => {
	return (
		<>
			{/*<div className="sbab-ball">*/}
				<div className="sb-title sbab-ball-title">Ball</div>
				<div className="sb-item sbab-ball-score">{ball}</div>
			{/*</div>*/}
			{/*<div className="sbab-strike">*/}
				<div className="sb-title sbab-strike-title">Strike</div>
				<div className="sb-item sbab-strike-score">{strike}</div>
			{/*</div>*/}
			{/*<div className="sbab-foul">*/}
				<div className="sb-title sbab-foul-title">Foul</div>
				<div className="sb-item sbab-foul-score">{foul}</div>
			{/*</div>*/}
			{/*<div className="sbab-hit">*/}
			{/*	<div className="sb-title sbab-hit-title">Hit</div>*/}
			{/*	<div className="sb-item sbab-hit-score">{hit}</div>*/}
			{/*</div>*/}
		</>
	)
};

export default ScoreBoardAtBat;