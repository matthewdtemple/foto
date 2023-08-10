import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { HomePage } from "./pages/HomePage"
import { AboutPage } from './pages/About';
import { FilmPage } from './pages/Images/Film';
import { Navbar } from './pages/Navbar';
import { ContactPage } from './pages/Contact';
import { StreetPage } from './pages/Images/Street';
import { LandscapePage } from './pages/Images/Landscapes';
import { EventsPage } from './pages/Images/Events';

function App() {
  return (
    <div>
        <Navbar/> 
        <div >
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
            <Routes>
              <Route path='/images/street' element={<StreetPage/>} />            
            </Routes>
            <Routes>
              <Route path='/images/landscapes' element={<LandscapePage/>} />            
            </Routes>
            <Routes>
              <Route path='/images/events' element={<EventsPage/>} />            
            </Routes>
          </Router>
        </div>
    </div>
  )
}

export default App;
