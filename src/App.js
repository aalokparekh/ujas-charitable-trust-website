
import { Routes , Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

import Work from './pages/Work';
import Contact from './pages/Contact';
import Donate from './pages/Donate';
import Footer from './components/Footer';
import About from './pages/About';


function App() {
  return (
   <div className="bg-softBeige text-gray-800 font-sans">
    <Navbar />
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/donate" element={<Donate />} />
    </Routes>
    <Footer/>
   </div>
  );
}

export default App;
