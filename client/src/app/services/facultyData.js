import axios from 'axios'
// https://leavemanager.onrender.com
const API = "https://leavemanager.onrender.com"

export const leavesData = async()=>{
    const response = await axios.get(`${API}/faculty/data`)
    return response.data
}
export const acceptanceData = async(id,acceptance)=>{
    const response = await axios.post(`${API}/faculty/status`,{id,acceptance})
    return response.data
}