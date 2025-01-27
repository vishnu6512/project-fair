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