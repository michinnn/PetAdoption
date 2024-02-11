import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/header/NavBar';
import Testimonial from './pages/Testimonial/testimonialpage';
import Adopt from './pages/Adopt/adoptpage';
import Profile from './pages/Profile/profilepage';
import About from './pages/About/aboutpage';
import AdoptionFile from './pages/Adopt/adoptionfile';
import PetInfo from './pages/Adopt/petinfo';

function App() {
  return (
    
    <div>
      <Router basename='/PetAdoption/'>

      <NavBar/>

      <Routes>
        <Route exact path='/' element={<About/>}/>
        <Route path='/testimonialpage' element={<Testimonial/>}/>
        <Route path='/adoptpage' element={<Adopt/>}/>
        <Route path='/profilepage' element={<Profile/>}/>
        <Route path='/adoptionfile' element={<AdoptionFile/>}/>
        <Route path='/petinfo' element={<PetInfo/>}/>
      </Routes>

      </Router>
    </div>
  )
}

export default App
