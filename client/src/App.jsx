import './App.css';
import {Navbar} from './components/Navbar.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import RandomChar from './components/RandomChar.jsx';
import Resources from './pages/Resources.jsx';
import Mentors from './pages/Mentors.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/chat" element={<RandomChar/>}/>
            <Route path="/resources" element={<Resources/>}/>
            <Route path="/mentors" element={<Mentors/>}/>
        </Routes>
      </header>
    </div>
  );
}
export default App;