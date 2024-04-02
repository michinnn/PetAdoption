import { Outlet, useNavigate } from 'react-router-dom';
import NavBar from '../../Components/header/NavBar';
import useUserRole from '../../helpers/useUserRole';
import React, {useEffect} from 'react';

function App() {
  const userRole = useUserRole();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("im in user")
    if(userRole && userRole !== "user") {
      navigate("/");
    }
  }, [userRole]);

  return (
    
    <>
        <NavBar />

        <Outlet />
    </>
  )
}

export default App
