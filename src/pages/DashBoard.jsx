import React from 'react'
import Header from '../components/Header'
import View from '../components/View'
import Profile from '../components/Profile'

const DashBoard = () => {
  return (
    <>
      <Header insideDashBoard={true}/>
      <div className='container-fluid' style={{paddingTop:'100px'}} >
        <div className='row mt-3'>
          <div className='col-lg-8'>
            <h1>Welcome <span className='text-warning'>Vishnu</span></h1>
            <View/>
          </div>
          <div className='col-lg-4'>
            <Profile/>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashBoard