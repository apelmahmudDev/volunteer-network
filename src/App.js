import React from 'react';
import './App.css';
import { UserProvider } from './components/UserContext/UserContext';
import Routes from './Routes';

function App() {
	return (
		<UserProvider>
			<div className="App">
				<Routes></Routes>
			</div>
		</UserProvider>
	);
}

export default App;
