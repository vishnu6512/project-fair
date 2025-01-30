import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import {Row, Col} from 'react-bootstrap'
import { allProjectAPI } from '../services/allAPI'

const Projects = () => {

  const [allProjects, setAllProjects]=useState([])
  const [searchKey, setSearchKey]=useState('')

  console.log(allProjects);
  useEffect(()=>{
    getAllProjects()
  },[searchKey])
  
  const getAllProjects= async()=>{
    const token = sessionStorage.getItem('token')
    if(token){
      const reqHeader={
        "Authorization": `Bearer ${token}`
      }
      try{
        const result = await allProjectAPI(searchKey,reqHeader)
        if(result.status==200){
          setAllProjects(result.data)
        }
      }catch(err){
        console.log(err);
        
      }
    }
  }
  return (
    <>
      <Header/>
      <div className='container-fluid' style={{paddingTop:'100px'}}>
        <div className='d-flex justify-content-between align-items-center'>
          <h1>All Projects</h1>
          <input onChange={e=>setSearchKey(e.target.value)} type="text" className="form-control w-25" placeholder="Search projects by their languages" />
        </div>
        <Row className='mt-3'>
          {
            allProjects?.length>0?
              allProjects?.map(project=>(
                <Col className='mb-3' lg={4} md={6} sm={12}>
                  <ProjectCard displayData={project}/>
              </Col> 
              ))
              :
              <div className='text-danger fw-bodler'> Projects not yet uploaded</div>
          }     
        </Row>
      </div>
    </>
  )
}

export default Projects