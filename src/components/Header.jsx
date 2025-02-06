import React, { useContext } from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthContext } from '../contexts/AuthContextAPI'
const Header = (insideDashBoard) => {
  const navigate = useNavigate()
  const {isAuthorised, setIsAuthorised}= useContext(tokenAuthContext)
  const logout = ()=>{
    sessionStorage.clear()
    setIsAuthorised(false)
    navigate('/')
  }
  return (
    <>
      <Navbar className="bg-body-tertiary border-rounded position-fixed w-100" style={{ zIndex: '1' }}>
        <Container>
          <Link to="/" style={{ fontSize: '30px' }} className="text-decoration-none text-dark "><i class="fa-solid fa-record-vinyl me-2"></i>Project Fair</Link>
          {
            insideDashBoard &&
            <div className='ms-auto'>
              <button onClick={logout} className='btn btn-link text-dark'>Logout <i class="fa-solid fa-right-from-bracket"></i></button>
            </div>

          }
        </Container>
      </Navbar>
    </>
  )
}

export default Header