import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DashBoard from './pages/DashBoard'
import Projects from './pages/Projects'
import Auth from './pages/Auth'
import Footer from './components/Footer'
function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth insideRegister={true} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
