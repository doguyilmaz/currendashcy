import React, { createContext, useReducer, useMemo, useCallback } from 'react';
import appReducer from './LATERAppReducer';

const AppContext = createContext();

const AppProvide = (props) => {
	const initialState = {
		page: 'dashboard',
		locale: 'en',
		theme: 'light',
	};

	const [state, dispatch] = useReducer(appReducer, initialState);

	const console = useCallback(() => {
		console.log('context');
	}, []);

	const providerValue = useMemo(() => ({ state, console }), [state, console]);

	return (
		<AppContext.Provider value={providerValue}>
			{props.children}
		</AppContext.Provider>
	);
};

export default AppProvide;
