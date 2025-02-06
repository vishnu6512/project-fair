import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import DashBoard from './pages/DashBoard'
import Projects from './pages/Projects'
import Auth from './pages/Auth'
import Footer from './components/Footer'
import { useContext, useEffect } from 'react'
import { tokenAuthContext } from './contexts/AuthContextAPI'
import Pnf from './pages/Pnf'

function App() {
  
  const {isAuthorised, setIsAuthorised} = useContext(tokenAuthContext)
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        {
          isAuthorised &&
          <>
            <Route path='/dashboard' element={<DashBoard />} />
            <Route path='/projects' element={<Projects />} />
          </>
        }
        {/* <Route path='/dashboard' element={<DashBoard />} />
        <Route path='/projects' element={<Projects />} /> */}
        <Route path='/login' element={<Auth />} />
        <Route path='/register' element={<Auth insideRegister={true} />} />
        <Route path='/*' element={<Pnf/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
