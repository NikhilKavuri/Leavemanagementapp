import axios from 'axios';
// https://leavemanager.onrender.com
const API = "http://localhost:5000"
export const studentLoginData = async (userData)=>{
    const response = await axios.post(`${API}/login/user`,userData);
    return response.data
}