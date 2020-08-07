import React, { useContext } from 'react';
import { AppContext } from '../Context/AppContext/AppProvider';

const Content = ({ children }) => {
	const { coinList } = useContext(AppContext);

	return !coinList ? <div>Loading Coins...</div> : <div>{children}</div>;
};

export default Content;
