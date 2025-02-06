import React, {useState, useEffect, useContext} from 'react'
import {Modal, Button} from 'react-bootstrap'
import upload from '../assets/uploadimg.png'
import serverURL from '../services/serverURL'
import { updateProjectAPI } from '../services/allAPI'
import { editProjectResponseContext } from '../contexts/Contextapis'


const Edit = ({project}) => {

  const {editProjectResponse, setEditProjectResponse} = useContext(editProjectResponseContext)


  const [preview,setPreview]=useState("")
  const [inputImgStatus, setInputImgStatus]=useState(false)

  const [projectDetails,setProjectDetails] = useState({
    id:project._id,title:project.title, languages:project.languages, overview:project.overview, github:project.github, website:project.website, projectImg:""
  })
  console.log(projectDetails);


  const [show, setShow] = useState(false);

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

  const handleClose = () => {
    setShow(false);
    setProjectDetails({
      id:project._id,title:project.title, languages:project.languages, overview:project.overview, github:project.github, website:project.website, projectImg:""
    })
    
  }
  const handleShow = () => {
    setShow(true);
    setProjectDetails({
      id:project._id,title:project.title, languages:project.languages, overview:project.overview, github:project.github, website:project.website, projectImg:""
    })
  }

  const handleUpdateProject= async()=> {
    const {id, title,languages, overview, github, website, projectImg} = projectDetails
    if(title && languages && overview && github && website){
      // api-call - put - (id,updateDetails)
      const reqBody = new FormData()
      reqBody.append("title",title)
      reqBody.append("languages",languages)
      reqBody.append("overview",overview)
      reqBody.append("github",github)
      reqBody.append("website",website)
      preview ? reqBody.append("projectImg",projectImg) : reqBody.append("projectImg", project.projectImg)

      const token = sessionStorage.getItem("token")
      if(token){
        //make api call
        const reqHeader ={
          "Content-Type": "multipart/form-data",
          "Authorization": `Bearer ${token}`
        }

        try{
          const result = await updateProjectAPI(id, reqBody, reqHeader)
          if(result.status==200){
            alert("project updated successfully!!!")
            handleClose()
            setEditProjectResponse(result)
          }
        }catch(err){
          console.log(err);
          
        }
      }
    }else{
      alert("please the form completely!!!")
    }
  }

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
                <input onChange={e=>setProjectDetails({...projectDetails,projectImg:e.target.files[0]})} type='file' style={{display:'none'}}/>
                <img className='img-fluid ' src={preview?preview:`${serverURL}/uploads/${project.projectImg}`} alt="" />
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
          <Button onClick={handleUpdateProject} variant="primary">Update</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Edit