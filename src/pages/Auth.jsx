import React, { useState } from 'react'
import register from '../assets/register.png'
import {Form,FloatingLabel,Button} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import { registerAPI, loginAPI } from '../services/allAPI'
import Spinner from 'react-bootstrap/Spinner';

const Auth = ({insideRegister}) => {
  const [isLogin,setIsLogin]= useState(false)

  const navigate = useNavigate()

  const [inputData, setInputData] = useState({
    username: '',
    email: '',
    password: ''
  })
  console.log(inputData)

  const handleRegister = async (e) => {
    e.preventDefault()
    if(inputData.username && inputData.email && inputData.password){
      //console.log('Register api call')
      try{
        const result = await registerAPI(inputData)
        console.log(result);
        if(result.status==200) {
          alert(`Welcome ${result.data.username}! You have been registered successfully. Please Login`)
          navigate('/login')
          setInputData({username:"",email:"",password:""})
        } else{
          if(result.response.status==406){
            alert(result.response.data)
            setInputData({username:"",email:"",password:""})

          }
        }
        
      }catch(err){
        console.log(err)
      }
    }else{
      console.log('Please fill all the fields')
    }
  }

  const handleLogin = async (e)=>{
    e.preventDefault()
    if(inputData.email && inputData.password){
      try{
        const result = await loginAPI(inputData)
        if(result.status==200){
          sessionStorage.setItem("user",JSON.stringify(result.data.user))
          sessionStorage.setItem("token",result.data.token)
          setIsLogin(true)
          setTimeout(()=>{
            setInputData({username:"",email:"",password:""})
          navigate('/')
          setIsLogin(false)
          },2000)
          

        } else {
          if(result.response.status==404){
            alert(result.response.data)
          }
        }
      } catch(err){
        console.log(err);
        
      }
    } else {
      alert('please fill the form completely')
    }
  }


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
                      <Form.Control value={inputData.username} type='text' placeholder='Username' onChange={(e) => setInputData({...inputData, username: e.target.value})} />
                    </FloatingLabel>
                  
                }
                <FloatingLabel  controlId='floatingInput' label='Email' className='mb-3'>
                  <Form.Control value={inputData.email} type='email' placeholder='Email' onChange={(e) => setInputData({...inputData, email: e.target.value})} />
                </FloatingLabel>
                <FloatingLabel  controlId='floatingInput' label='Password' className='mb-3'>
                  <Form.Control value={inputData.password} type='password' placeholder='Password' onChange={(e) => setInputData({...inputData, password: e.target.value})} />
                </FloatingLabel>
                {
                  insideRegister ?
                  <div className='mt-3 d-grid gap-2'>
                    <Button onClick={handleRegister} className='btn btn-primary mb-2' type='submit'>
                      Register
                    </Button>
                    <p>Already have an account? <Link to='/login'>Login</Link></p>
                  </div>
                  :
                  <div className='d-grid gap-2'>
                    <Button onClick={handleLogin} className=' btn btn-primary d-flex' variant='primary' type='submit'>
                      Login
                      {isLogin &&       <Spinner animation="border" variant="light" />}
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