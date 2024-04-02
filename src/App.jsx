import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn-SignUp/signin';
import SignUp from './pages/SignIn-SignUp/signup';
import OTP from './pages/SignIn-SignUp/otp';
import AdminPage from './pages/AdminSide/adminpage';
import User from './pages/UserSide/user';
import Testimonial from './pages/Testimonial/testimonialpage';
import Adopt from './pages/Adopt/adoptpage';
import Profile from './pages/Profile/profilepage';
import About from './pages/About/aboutpage';
import AdoptionFile from './pages/Adopt/adoptionfile';
import PetInfo from './pages/Adopt/petinfo';
import EditProfile from './pages/Profile/editprofile';


function App() {
  return (
    <div>
      <Router basename='/'>
        <Routes>
          <Route path="/" element={<SignIn />}/>

          <Route path="/signup" element={<SignUp />}/>
          <Route path="/otp" element={<OTP />}/>

          <Route path="/user/" element={<User />}>
            <Route path='about' element={<About />}/>
            <Route path='testimonialpage' element={<Testimonial />}/>
            <Route path='adoptpage' element={<Adopt />}/>
            <Route path='profilepage' element={<Profile />}/>
            <Route path='adoptionfile' element={<AdoptionFile />}/>
            <Route path='petinfo/:id' element={<PetInfo />}/>
            <Route path='editprofile' element={<EditProfile />}/>
          </Route>

          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
