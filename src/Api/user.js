import instance from "./request";


// 登录请求数据
// export const userLoginApi = (params) => instance.get('/user/login',params);

// 用户注册请求数据
export const userRegApi = (params) => instance.post('/user/reg',params);


// 这样写更优雅
export const userLoginApi = (query) => {
    instance({
        url:'/user/login',
        method:'post',
        params: query
    })
}