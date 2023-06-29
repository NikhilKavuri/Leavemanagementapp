import axios from 'axios'
// https://leavemanager.onrender.com
const API = "https://leavemanager.onrender.com"
export const ApplyLeave = async(data)=>{
    let response = await axios.post(`${API}/student/leave`,data)
    return response.data;
}