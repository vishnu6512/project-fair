import React, { useEffect, useState } from 'react'
import { Collapse } from 'react-bootstrap'
import profileDP from '../assets/profileDP.png'
import serverURL from '../services/serverURL';
import { updateUserAPI } from '../services/allAPI';
const Profile = () => {
  const [open, setOpen] = useState(false);
  const [existingProfileImg, setExistingProfileImg] = useState("")
  const [preview, setPreview] = useState("")
  const [userDetails, setUserDetails] =useState({
    username:"", email:"", password:"", github:"", linkedin:"", profilePic:""
  })

  useEffect(()=>{
    if(sessionStorage.getItem("user")){
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUserDetails({
        ...userDetails, username:user.username, email:user.email, password:user.password, github:user.github, linkedin:user.linkedin
      })
      setExistingProfileImg(user.profilePic)
    }
  },[open])

  useEffect(()=>{
    if(userDetails.profilePic){
      setPreview(URL.createObjectURL(userDetails.profilePic))
    } else {
      setPreview("")
    }
  },[userDetails.profilePic])

  const handleUpdateProfile= async()=>{
    const {username, email, password, github, linkedin, profilePic}= userDetails
    if(github && linkedin){
      const reqBody = new FormData()
      reqBody.append("username", username)
      reqBody.append("email",email)
      reqBody.append("password",password)
      reqBody.append("github",github)
      reqBody.append("linkedin",linkedin)
      preview ? reqBody.append("profilePic",profilePic) : reqBody.append("profilePic", existingProfileImg)
      const token = sessionStorage.getItem('token')
      if(token){
        //make api call
        const reqHeader ={
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }

        //make api call
        try {
          const result = await updateUserAPI(reqBody, reqHeader)
          if(result.status==200){
            alert("User Profile Updated Successfully")
            sessionStorage.setItem("user",JSON.stringify(result.data))
            setOpen(!open)
          }
        } catch (err){
            console.log(err);
        }
      }  

    } else{
      alert("Please fill the form completely")
    }
  }

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
            <input onChange={e=>setUserDetails({...userDetails, profilePic:e.target.files [0]})} type='file' style={{ display: 'none' }} />
            {
              existingProfileImg==""?
              <img style={{ width: '200px', height: '200px' }} className='img-fluid rounded-circle ' src={preview?preview:profileDP} alt="" />
              :
              <img style={{ width: '200px', height: '200px' }} className='img-fluid rounded-circle ' src={preview?preview:`${serverURL}/uploads/${existingProfileImg}`} alt="" />

            }
          </label>
          <div className='mb-3 w-100'>
            <input value={userDetails?.github} onChange={e=>setUserDetails({...userDetails, github:e.target.value})} type='text' className='form-control' placeholder='User Github profile link'/>
          </div>
          <div className='mb-3 w-100'>
            <input value={userDetails?.linkedin} onChange={e=>setUserDetails({...userDetails, linkedin:e.target.value})} type='text' className='form-control' placeholder='User Linkedinprofile link'/>
          </div>
          <div className='d-grid w-100'>
            <button onClick={handleUpdateProfile} className='btn btn-warning'>Update Profile</button>
          </div>
        </div>
      </Collapse>
    </>
  )
}

export default Profile