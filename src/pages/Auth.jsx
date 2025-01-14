import React from 'react'
import register from '../assets/register.png'
import {Form,FloatingLabel,Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
const Auth = ({insideRegister}) => {
  return (
    <div style={{ height: '100vh' }} className='d-flex justify-content-center align-items-center'>
      <div className='container w-75'>
        <div className='card shadow p-2'>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <img className='img-fluid'  src={register} alt="" />
            </div>
            <div className='col-lg-6'>
              <h1 className='mt-2'><i className='fa-brands fa-docker'></i>Project Fair</h1>
              <h5 className='mt-2'>Sign {insideRegister ? 'up' : 'in'} to your account</h5>
              <Form>
                {
                  insideRegister && 
                    <FloatingLabel  controlId='floatingInput' label='Username' className='mb-3'>
                      <Form.Control type='text' placeholder='Username' />
                    </FloatingLabel>
                  
                }
                <FloatingLabel  controlId='floatingInput' label='Email' className='mb-3'>
                  <Form.Control type='email' placeholder='Email' />
                </FloatingLabel>
                <FloatingLabel  controlId='floatingInput' label='Password' className='mb-3'>
                  <Form.Control type='password' placeholder='Password' />
                </FloatingLabel>
                {
                  insideRegister ?
                  <div className='mt-3 d-grid gap-2'>
                    <Button className='btn btn-primary mb-2' type='submit'>
                      Register
                    </Button>
                    <p>Already have an account? <Link to='/login'>Login</Link></p>
                  </div>
                  :
                  <div className='d-grid gap-2'>
                    <Button variant='primary' type='submit'>
                      Login
                    </Button>
                    <p>New user? Please click here to <Link to='/register'>Register</Link></p>

                  </div>
                }
              </Form>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Auth