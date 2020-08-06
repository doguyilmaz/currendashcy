import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext/AppProvider';

const Welcome = ({ name }) => {
	const { firstVisit } = useContext(AppContext);

	return firstVisit ? (
		<div>
			Welcome to CurrenDashcy, please select your favourite currencies/coins to
			continue.
		</div>
	) : (
		<div> Hello, {name || 'Guest'}...</div>
	);
};

export default Welcome;
