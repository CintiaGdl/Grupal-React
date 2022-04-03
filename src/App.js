import './App.scss';
import NavBar from './components/NavBar/NavBar';
import { BrowserRouter as Router, NavLink, Route, Routes } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/home' element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
