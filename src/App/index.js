import React from 'react';
import './App.css';

import AppLayout from '../Components/Layout/AppLayout';
import Welcome from '../Components/Welcome';
import Buttons from '../Components/Buttons';
import AppBar from '../Components/Layout/AppBar';
import { AppProvider } from '../Components/Context/AppProvider';

function App() {
	return (
		<AppProvider>
			<AppLayout>
				<AppBar />
				<Welcome name='Doğu' />
				<Buttons />
			</AppLayout>
		</AppProvider>
	);
}

export default App;
