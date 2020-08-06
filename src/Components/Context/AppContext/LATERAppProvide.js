import React, { createContext, useReducer } from 'react';
import appReducer from './LATERAppReducer';

const AppContext = createContext();

const AppProvide = (props) => {
	const initialState = {
		page: 'dashboard',
		locale: 'en',
		theme: 'light',
	};

	const [state, dispatch] = useReducer(appReducer, initialState);

	const console = () => {
		console.log('context');
	};

	return (
		<AppContext.Provider value={(state, console)}>
			{props.children}
		</AppContext.Provider>
	);
};

export default AppProvide;
