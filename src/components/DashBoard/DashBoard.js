import React from 'react';

const DashBoard = ({ ball, reset, strike, foul }) => {
	return (
		<section className="dashboard">
			<button onClick={() => strike()}>Strike</button>
			<button onClick={() => ball()}>Ball</button>
			<button onClick={() => foul()}>Foul</button>
			<button onClick={() => reset()}>Hit</button>
		</section>
	)
};

export default DashBoard;