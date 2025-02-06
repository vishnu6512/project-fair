import React, {useContext, useEffect, useState} from 'react'
import {Modal, Button} from 'react-bootstrap'
import upload from '../assets/uploadimg.png'
import { addProjectAPI } from '../services/allAPI'
import { addProjectResponseContext } from '../contexts/Contextapis'

const Add = () => {
  const {addProjectResponse, setAddProjectResponse} = useContext(addProjectResponseContext)
  const [preview,setPreview]=useState("")
  const [projectDetails,setProjectDetails] = useState({
    title:"", languages:"", overview:"", github:"", website:"", projectImg:""
  })
  console.log(projectDetails);

  const [inputImgStatus, setInputImgStatus]=useState(false)

  useEffect(()=>{
    if(projectDetails.projectImg.type=="image/png" || projectDetails.projectImg.type=="image/jpeg" || projectDetails.projectImg.type=="image/jpg"){
      //valid image
      setInputImgStatus(true)
      setPreview(URL.createObjectURL(projectDetails.projectImg))
    } else {
      //invalid image
      setInputImgStatus(false)
      setPreview("")
      setProjectDetails({...projectDetails, projectImg:""})
    }
  }, [projectDetails.projectImg])
  
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setPreview("")
    setInputImgStatus(false)
    setProjectDetails({ title:"", languages:"", overview:"", github:"", website:"", projectImg:""})

  }
  const handleShow = () => setShow(true);

  const handleAddProject= async ()=>{
    const {title, languages, overview, github, website, projectImg} = projectDetails
    if(title && languages && overview && github && website && projectImg){
      //alert("pocedd api call")
      const reqBody = new FormData()
      reqBody.append("title",title)
      reqBody.append("languages",languages)
      reqBody.append("overview",overview)
      reqBody.append("github",github)
      reqBody.append("website",website)
      reqBody.append("projectImg",projectImg)
      const token = sessionStorage.getItem("token")
      if(token) {
        const reqHeader ={
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }
        //make api call
        try{
          const result = await addProjectAPI(reqBody,reqHeader)
          if(result.status==200){
            alert("Projected added successfully")
            setAddProjectResponse(result)
            handleClose()
          } else{
            alert(result.response.data)
          }
        } catch(err){
          console.log(err);
          
        }
        
      }


    } else {
      alert("please fill all the blanks")
    }
  }


  return (
    
    <>
      <button onClick={handleShow} className='btn btn-primary '>New Project</button>
      <Modal centered size='lg'
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Project Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='row align-items-center'>
            <div className='col-lg-4'>
              <label >
                <input onChange={e=>setProjectDetails({...projectDetails,projectImg:e.target.files[0]})} type='file' style={{display:'none'}}/>
                <img className='img-fluid ' src={preview?preview:upload} alt="" />
              </label>
              
                {
                  !inputImgStatus && <div className='text-warning fw-bolder my-2'><p>Upload Only JPG, JPEG, PNG</p></div> 
                }
              
            </div>
            <div className='col-lg-8'>
              <div className='mb-2'>
                <input value={projectDetails.title} onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})} type='text' className='form-control' placeholder='Project Title'/>
              </div>
              <div className='mb-2'>
                <input value={projectDetails.languages} onChange={e=>setProjectDetails({...projectDetails,languages:e.target.value})} type='text' className='form-control' placeholder='Languages Used'/>
              </div>
              <div className='mb-2'>
                <input value={projectDetails.overview} onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})} type='text' className='form-control' placeholder='Project OverView'/>
              </div>
              <div className='mb-2'>
                <input value={projectDetails.github} onChange={e=>setProjectDetails({...projectDetails,github:e.target.value})} type='text' className='form-control' placeholder='Poject Github  Link'/>
              </div>
              <div className='mb-2'>
                <input value={projectDetails.website} onChange={e=>setProjectDetails({...projectDetails,website:e.target.value})} type='text' className='form-control' placeholder='Project Website Link'/>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleAddProject} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add