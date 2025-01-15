import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap'
import profileDP from '../assets/profileDP.png'
const Profile = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className='d-flex justify-content-evenly'>
        <h3 className='text-warning'>Profile</h3>
        <button onClick={() => setOpen(!open)} className='btn text-warning'><i class="fa-solid fa-angle-down "> </i>
        </button>
      </div>
      <Collapse in={open}>
        <div id='example-collapse-text' className='row container-fluid align-items-center justify-content-center shadow p-2 rounded'>
          <label className='d-flex justify-content-center align-items-center'>
            <input type='file' style={{ display: 'none' }} />
            <img style={{ width: '200px', height: '200px' }} className='img-fluid rounded-circle ' src={profileDP} alt="" />
          </label>
          <div className='mb-3 w-100'>
            <input type='text' className='form-control' placeholder='User Github profile link'/>
          </div>
          <div className='mb-3 w-100'>
            <input type='text' className='form-control' placeholder='User Linkedinprofile link'/>
          </div>
          <div className='d-grid w-100'>
            <button className='btn btn-warning'>Update Profile</button>
          </div>
        </div>
      </Collapse>
    </>
  )
}

export default Profile