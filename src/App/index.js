import React from 'react';
import './App.css';

import AppLayout from '../Components/Layout/AppLayout';
import Settings from '../Components/Settings';
import Buttons from '../Components/Buttons';
import AppBar from '../Components/Layout/AppBar';
import { AppProvider } from '../Components/Context/AppContext/AppProvider';

function App() {
	return (
		<AppProvider>
			<AppLayout>
				<AppBar />
				<Settings />
				<Buttons />
			</AppLayout>
		</AppProvider>
	);
}

export default App;
