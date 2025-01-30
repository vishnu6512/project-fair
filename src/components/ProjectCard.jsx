import React from 'react'
import { Card,Modal } from 'react-bootstrap';
import project1 from '../assets/project1.png'
import { useState } from 'react';
import serverURL from '../services/serverURL';

const ProjectCard = ({displayData}) => {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (

    <>
      <Card className='btn shadow' style={{ width: '28rem' }} onClick={handleShow}>
        <Card.Img height={'200px'} variant="top" src={`${serverURL}/uploads/${displayData?.projectImg}`} />
        <Card.Body>
          <Card.Title>{displayData?.title}</Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row align-items-center'>
            <div className='col-lg-6'>
              <img style={{height:'200px'}} className='img-fluid' src={`${serverURL}/uploads/${displayData?.projectImg}`} alt="" />
            </div>
            <div className='col-lg-6'>
              <h1>{displayData?.title}</h1>
              <h6 className='fw-bolder'>Languages used: <span className='text-primary'>{displayData?.languages}</span></h6>
              <p style={{textAlign:'justify'}}><span className='fw-bolder'>Description:</span>{displayData?.overview}</p>
            </div>
          </div>
          <div className='mt-2 float-start d-flex gap-2'>
            <a href={displayData?.github} target='_blank' className='btn btn-secondary'><i className='fa-brands fa-github'></i></a>
            <a href={displayData?.website} target='_blank' className='btn btn-secondary'><i className='fa-solid fa-link'></i></a>


          </div>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default ProjectCard