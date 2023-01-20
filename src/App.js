import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Event from './components/Event';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
       <>
    <Router>
      <Navbar />
      <Routes>
        <Route path= '/' element={<Home/>} exact/>
        <Route path= '/about' element={<About />} exact />
        <Route path= '/events' element={<Event />} exact />
        <Route path= '/contact' element={<Contact />} exact />
      </Routes>
    </Router>
  </>
     
    </div>
  );
}

export default App;
