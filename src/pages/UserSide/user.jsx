import { Outlet } from 'react-router-dom';
import NavBar from '../../Components/header/NavBar';

function App() {
  return (
    
    <>
        <NavBar />

        <Outlet />
    </>
  )
}

export default App
