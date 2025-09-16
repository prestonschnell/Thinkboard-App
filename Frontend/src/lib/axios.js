import axios from "axios";


const api =  axios.create({
    baseURL: "http://localhost:3000/api",   // Setting a base URL so we don't have to type the full URL for every request.
});

export default api;