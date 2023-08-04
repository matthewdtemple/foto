import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { AboutPage } from './pages/About';
import { FilmPage } from './pages/Images/Film';
import { Navbar } from './pages/Navbar';
import { ContactPage } from './pages/Contact';

function App() {
  return (
    <div>
      <div className="App">
      <Navbar/> 
        <Router>
          <Routes>
            <Route path='/' element={<HomePage/>} />            
          </Routes>
          <Routes>
            <Route path='/about' element={<AboutPage/>} />            
          </Routes>
          <Routes>
            <Route path='/contact' element={<ContactPage/>} />            
          </Routes>
          <Routes>
            <Route path='/images/film' element={<FilmPage/>} />            
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App;
