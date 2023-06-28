import axios from 'axios'
const API = "http://localhost:5000"
export const ApplyLeave = async(data)=>{
    let userData = await JSON.parse(localStorage.getItem("userData"))
    let token = userData.token
    let response = await axios.post(`${API}/student/leave`,data,{
        headers:{
            Token: `${token}`
        }
    })
    return response.data;
}