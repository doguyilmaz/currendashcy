import React from 'react';
import './App.css';

import AppLayout from '../Components/Layout/AppLayout';
import Settings from '../Components/Settings';
import Dashboard from '../Components/Dashboard';
// import Buttons from '../Components/Buttons';
import AppBar from '../Components/Layout/AppBar';
import { AppProvider } from '../Components/Context/AppContext/AppProvider';
import Content from '../Components/Layout/Content';

function App() {
	return (
		<AppLayout>
			<AppProvider>
				<AppBar />
				<Content>
					<Settings />
					<Dashboard />
				</Content>
				{/* <Buttons /> */}
			</AppProvider>
		</AppLayout>
	);
}

export default App;
