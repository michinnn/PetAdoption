import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/header/NavBar';
import Testimonial from './pages/Testimonial/testimonialpage';
import Adopt from './pages/Adopt/adoptpage';
import Profile from './pages/Profile/profilepage';
import About from './pages/About/aboutpage';

function App() {
  return (
    
    <div>
      <Router basename='/PetAdoption/'>

      <NavBar/>

      <Routes>
        <Route exact path='/' element={<About/>}/>
        <Route path='/PetAdoption/testimonialpage' element={<Testimonial/>}/>
        <Route path='/PetAdoption/adoptpage' element={<Adopt/>}/>
        <Route path='/PetAdoption/profilepage' element={<Profile/>}/>
      </Routes>

      </Router>
    </div>
  )
}

export default App
