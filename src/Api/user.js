import instance from "./request";


// 登录请求数据
export const userLoginApi = (params) => instance.get('/user/login',params);

// 用户注册请求数据
export const userRegApi = (params) => instance.post('/user/reg',params);




