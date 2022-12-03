import Contact from './components/contact/Contact';
import Projects from './components/projects/Projects';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/home/Home';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/projects' element={ <Projects /> } />
        <Route path='/contact' element={ <Contact /> } />
      </Routes>
    </div>
  );
}

export default App;
