import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './views/Login';
import Profile from './views/Profile';
import Translations from './views/Translations';
import Navbar from './components/Navbar/Navbar';

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Login />} />
					<Route path="/translate" element={<Translations />} />
					<Route path="/profile" element={<Profile />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;