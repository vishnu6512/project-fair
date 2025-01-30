import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import home from '../assets/home.png';
import ProjectCard from '../components/ProjectCard';
import { Card } from 'react-bootstrap';
import { getHomeProjectAPI } from '../services/allAPI';
const Home = () => {
    const navigate=useNavigate()
    const handleProjects=()=>{
      if(sessionStorage.getItem("token")){
        navigate('/projects')
      } else {
        alert("Please login to receive full access")
      }
    }
    const [allHomeProjects, setAllHomeProjects]=useState([])
    useEffect(()=>{
      getAllHomeProjects()
    },[])
    const getAllHomeProjects = async()=>{
      try{
        const result=await getHomeProjectAPI()
        if(result.status==200){
          setAllHomeProjects(result.data)
        }
      } catch(err){
        console.log(err);
        
      }
    }

  return (
    <>
    <div style={{minHeight:'100vh'}} className='d-flex  justify-content-between align-items-center rounded-5 shadow w-100'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-lg-6'>
            <h1 style={{fontSize:'80px'}}><i class="fa-solid fa-record-vinyl"></i>Project Fair</h1>
            <p style={{textAlign:'justify'}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor odio beatae illo sed pariatur magnam, repellat ab veritatis esse, numquam repudiandae illum! Mollitia minima exercitationem incidunt adipisci aut, consectetur harum.</p>
              {
                sessionStorage.getItem("token")?
                <Link to='/dashboard' className='btn btn-warning'>Manage your projects</Link>
                :
                <Link to='/login' className='btn btn-warning'>Start to Explore</Link>

              }
          </div>
          <div className='col-lg-6'>
              <img className='img-fluid' src={home} alt="home" style={{width:'100%'}}/>
          </div>
        </div>
      </div>
    </div>
    <div className='mt-5 text-center'>
      <h1 className='mb-5'> Explore Our Projects</h1>
      <marquee behavior="" direction="">
        <div className='d-flex'>
          {
            allHomeProjects?.map(project=>(
              <div className='me-5'>
                <ProjectCard displayData={project}/>
            </div>
            ))
  
          }
        </div>
      </marquee>
      <button onClick={handleProjects} className='btn btn-link mt-5'>Click here to view all projects</button>
    </div>
    <div className='d-flex justify-content-center align-items-center flex-column mt-5 mb-3'>
      <h1>Our Testimonials</h1>
      <div className='d-flex justify-content-evenly align-items-center mt-3 w-100' >
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
        <img width={'110px'} height={'120px'} src="https://images.ladbible.com/resize?type=webp&quality=70&width=3840&fit=contain&gravity=auto&url=https://images.ladbiblegroup.com/v3/assets/bltb5d92757ac1ee045/bltc86e7943bcc0e006/6569cbef0b642304079a348b/AI-creates-what-the-average-person.png%3Fcrop%3D590%2C590%2Cx0%2Cy0" alt="" />
        Max Miller
        </Card.Title>
        <Card.Text>
          <div className='d-flex justify-content-center mb-1'>
            <i class="fa-solid fa-star text-warning"></i>
            <i class="fa-solid fa-star text-warning"></i>
            <i class="fa-solid fa-star text-warning"></i>
            <i class="fa-solid fa-star text-warning"></i>
            <i class="fa-solid fa-star text-warning"></i>

          </div>
          <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
        </Card.Text>
      </Card.Body>
    </Card>
      </div>
    </div>
    </>
  )
}

export default Home