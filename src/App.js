import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import About from './components/AboutMe';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import {Routes, Route,} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>

      <Routes>
          <Route exact path="/" element={ <About/> } />
      
          <Route exact path ='/portfolio' element={ <Projects/>} />

          <Route exact path ='/contact' element={ <Contact />} />

          <Route exact path ='/resume' element={ <Resume />} />

        </Routes>
  
    <Footer/>
    </div>
  );
}

export default App;
