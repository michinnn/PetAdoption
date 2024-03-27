import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPage from './adminpage';

function App() {
  return (
    
    <>
    <Router basename='/'>
        <Routes>
            <Route path='/admin' element={<AdminPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
