import React from 'react'
import { Card,Modal } from 'react-bootstrap';
import project1 from '../assets/project1.png'
import { useState } from 'react';

const ProjectCard = () => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <>
      <Card className='btn shadow' style={{ width: '18rem' }} onClick={handleShow}>
        <Card.Img height={'200px'} variant="top" src={project1} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <img style={{height:'200px'}} className='img-fluid' src={project1} alt="" />
            </div>
            <div className='col-lg-6'>
              <h1>Project Title</h1>
              <h6 className='fw-bolder'>Languages used: <span className='text-primary'>HTML, CSS, JS</span></h6>
              <p style={{textAlign:'justify'}}><span className='fw-bolder'>Description:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
            </div>
          </div>
          <div className='mt-2 float-start d-flex gap-2'>
            <a href='https://github.com/your-repo' target='_blank' className='btn btn-secondary'><i className='fa-brands fa-github'></i></a>
            <a href='https://github.com/your-repo' target='_blank' className='btn btn-secondary'><i className='fa-solid fa-link'></i></a>


          </div>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default ProjectCard