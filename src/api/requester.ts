import axios from "axios";


const requester = axios.create({
    baseURL: "https://jiranew.cybersoft.edu.vn/",
    headers: {

        TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0OCIsIkhldEhhblN0cmluZyI6IjEwLzAyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNzUyMzIwMDAwMCIsIm5iZiI6MTY3OTY3NzIwMCwiZXhwIjoxNzA3NjcwODAwfQ.N-naoH9C9l_9p7kMChk45-IrJfIqEYyMlZijuzHsXsI",

    }
});

requester.interceptors.request.use((req) => {
    const token = localStorage.getItem('Token');
    if (token) {
      req.headers.Authorization = ` Bearer ${token}`
    }
    return req

})




export default requester;