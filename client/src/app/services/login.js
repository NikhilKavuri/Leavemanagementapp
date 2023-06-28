import axios from 'axios';
const API = "https://leavemanager.onrender.com"
export const studentLoginData = async (userData)=>{
    const response = await axios.post(`${API}/login/user`,userData);
    return response.data
}