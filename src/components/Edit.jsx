import React, {useState} from 'react'
import {Modal, Button} from 'react-bootstrap'
import upload from '../assets/uploadimg.png'

const Edit = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
     <button onClick={handleShow} className='btn text-white'><i class="fa-solid fa-edit"></i></button>
     <Modal centered size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update Project Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row align-items-center'>
            <div className='col-lg-4'>
              <label >
                <input type='file' style={{display:'none'}}/>
                <img className='img-fluid ' src={upload} alt="" />
              </label>
              <div className='text-warning fw-bolder my-2'>
                <p>Upload Only JPG, JPEG, PNG</p>
              </div>
            </div>
            <div className='col-lg-8'>
              <div className='mb-2'>
                <input type='text' className='form-control' placeholder='Project Title'/>
              </div>
              <div className='mb-2'>
                <input type='text' className='form-control' placeholder='Languages Used'/>
              </div>
              <div className='mb-2'>
                <input type='text' className='form-control' placeholder='Project OverView'/>
              </div>
              <div className='mb-2'>
                <input type='text' className='form-control' placeholder='Poject Github  Link'/>
              </div>
              <div className='mb-2'>
                <input type='text' className='form-control' placeholder='Project Website Link'/>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit