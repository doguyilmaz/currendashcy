import React from 'react';
import './App.css';

import AppLayout from '../Components/Layout/AppLayout';
import Welcome from '../Components/Welcome';
import Buttons from '../Components/Buttons';

function App() {
	return (
		<AppLayout>
			<Welcome name='Doğu' />
			<Buttons />
		</AppLayout>
	);
}

export default App;
