import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext/AppProvider';

const Content = ({ children }) => {
	const { coinList, currencies, firstVisit } = useContext(AppContext);

	if (!coinList) {
		return <div>Loading Coins...</div>;
	}

	// LATER: loading for added currencies later
	if (!firstVisit && !currencies) {
		return <div>Loading Currencies...</div>;
	}

	return <div>{children}</div>;
};

export default Content;
