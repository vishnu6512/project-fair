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
    return await commonAPI("GET",`${serverURL}/all-project?search=${searchKey}`,[],reqHeader)
}