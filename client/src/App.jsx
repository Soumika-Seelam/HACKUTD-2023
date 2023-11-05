import './App.css';
import {Navbar} from './components/Navbar.jsx';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Resources from './pages/Resources.jsx';
import Mentors from './pages/Mentors.jsx';
import Chat from './pages/Chat.jsx'


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/chat/:id" element={<Chat/>}/>
            <Route path="/resources" element={<Resources/>}/>
            <Route path="/mentors" element={<Mentors/>}/>

        </Routes>
      </header>
    </div>
  );
}
export default App;