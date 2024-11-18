import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Experience from './Experience.jsx';
import Projects from './Projects.jsx';
import Contact from './Contact.jsx';
import Game from './Game';
import './styles.css';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/experience">Experiência</Link>
        <Link to="/projects">Projetos</Link>
        <Link to="/contact">Contato</Link>
        
      </nav>
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/game" element={<Game />} />
           
        </Routes>
      </div>
    </Router>
  );
}

export default App;