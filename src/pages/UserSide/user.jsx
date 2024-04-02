import { Outlet, useNavigate } from 'react-router-dom';
import NavBar from '../../Components/header/NavBar';
import useUserRole from '../../helpers/useUserRole';
import React, {useEffect} from 'react';

function App() {
  const userRole = useUserRole();
  const navigate = useNavigate();

  useEffect(() => {
    if(userRole && userRole !== "user") {
      navigate("/");
    }
  }, [userRole]);

  return (
    
    <>
        <NavBar />
        <Outlet />

        <footer className='w-full text-center py-5 font-semibold text-sm font-sans text-gray-400 italic'> 
        © All data are from 2024 Strays Worth Saving (S.W.S) Facebook.
      </footer>
    </>
  )
}

export default App
