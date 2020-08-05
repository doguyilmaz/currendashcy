import React from 'react';
import './App.css';

import AppLayout from '../Components/Layout/AppLayout';
import Welcome from '../Components/Welcome';
import Buttons from '../Components/Buttons';
import AppBar from '../Components/Layout/AppBar';

function App() {
	return (
		<AppLayout>
			<AppBar />
			<Welcome name='Doğu' />
			<Buttons />
		</AppLayout>
	);
}

export default App;
