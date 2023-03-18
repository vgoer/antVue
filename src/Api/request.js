import axios from "axios";


const service = axios.create({

    baseURL:'http://127.0.0.1:8000/api',

    timeout: 1000,

    headers: {
        "Content-Type": "application/json;charset=utf-8",
    }
})

service.interceptors.request.use((config) => {
    return config
}, (error) => {
    console.log(error)
    return Promise.reject(error)
})


service.interceptors.response.use((res) => {

    console.log(res.data)

    
    return res.data
},(error) => {
    console.log(error)
    return Promise.reject(error)
})


export default service;