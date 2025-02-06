import commonAPI from "./commonAPI"
import serverURL from "./serverURL"

//register api call by auth component when user clicked on register button
export const registerAPI= async (reqBody)=>{
    return await commonAPI("POST",`${serverURL}/register`,reqBody)
}

//login api call by auth component when user clicked on login button
export const loginAPI= async (reqBody)=>{
    return await commonAPI("POST",`${serverURL}/login`,reqBody)
}

//AddProject API call by Add component when user clicked on add project button
export const addProjectAPI= async (reqBody, reqHeader)=>{
    return await commonAPI("POST",`${serverURL}/add-project`,reqBody, reqHeader)
}

//getHomeProject API call by Home component when page loaded in browser (useEffect())
export const getHomeProjectAPI= async ()=>{
    return await commonAPI("GET",`${serverURL}/home-project`,[])
}

//allProject API call by Project component when page loaded in browser (useEffect())
export const allProjectAPI= async (searchKey,reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/all-project?search=${searchKey}`,{},reqHeader)
}

//userProject API call by View component when page loaded in browser (useEffect())
export const userProjectAPI= async (reqHeader)=>{
    return await commonAPI("GET",`${serverURL}/user-project`,{},reqHeader)
}

//updateProject API call by Edir component when user clicked on edit button 
export const updateProjectAPI= async (id,reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${serverURL}/projects/${id}/edit`,reqBody,reqHeader)
}

//removeProject API call by View component when user clicked on delete button 
export const userProjectRemoveAPI= async (id, reqHeader)=>{
    return await commonAPI("DELETE",`${serverURL}/projects/${id}/remove`,{},reqHeader)
}

//updateUser API call by Profile component when user clicked on update button button 
export const updateUserAPI= async (reqBody, reqHeader)=>{
    return await commonAPI("PUT",`${serverURL}/edit-user`,reqBody,reqHeader)
}