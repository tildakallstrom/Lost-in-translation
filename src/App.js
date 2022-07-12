import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './views/Login';
import Profile from './views/Profile';
import Orders from './views/Orders';

function App() {

  
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={ <Login /> } />
        <Route path="/" element={ <Orders /> } />
        <Route path="/" element={ <Profile /> } />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
