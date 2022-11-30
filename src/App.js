import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import {Routes, Route} from "react-router-dom";
import TC from './Cropped Trees.jpg';
import {Image} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
     
      
      <header className="App-header">
        <NavBar/>
        <Image fluid variant="top" src={TC} alt="your mom" />
      </header>

      <Routes>
          <Route  path="/" element={ <About/> } />
      
          <Route  path ='/portfolio' element={ <Projects/>} />

          <Route  path ='/contact' element={ <Contact />} />

          <Route  path ='/resume' element={ <Resume />} />
      
        </Routes>
    
    <Footer/>
    </div>
  );
}

export default App;
