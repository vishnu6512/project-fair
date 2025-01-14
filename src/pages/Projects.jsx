import React from 'react'
import Header from '../components/Header'
import ProjectCard from '../components/ProjectCard'
import {Row, Col} from 'react-bootstrap'
const Projects = () => {
  return (
    <>
      <Header/>
      <div className='container-fluid' style={{paddingTop:'50px'}}>
        <div className='d-flex justify-content-between align-items-center'>
          <h1>All Projects</h1>
          <input type="text" className="form-control w-25" placeholder="Search projects by their languages" />
        </div>
        <Row className='mt-3'>
          <Col className='mb-3' lg={4} md={6} sm={12}>
            <ProjectCard/>
          </Col>      
        </Row>
      </div>
    </>
  )
}

export default Projects