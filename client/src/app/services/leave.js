import axios from 'axios'
// https://leavemanager.onrender.com
const API = "http://localhost:5000"
export const ApplyLeave = async(data)=>{
    let userData = await JSON.parse(localStorage.getItem("userData"))
    let token = userData.token
    let response = await axios.post(`${API}/student/leave`,data)
    return response.data;
}