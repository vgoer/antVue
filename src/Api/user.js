import request from './request'

// 登录请求数据
// export const userLoginApi = (params) => request.get('/user/login',params);

// 用户注册请求数据
export const userRegApi = (params) => request.get('/user/reg',params);

// 更好
export const userLoginApi = (query) => {
    request({
        url:'/user/login',
        method:'get',
        params: query
    })
}


export const getBloglist = query => {
    request({
        url:'/blog/list',
        method:'post',
        params:query
    })
}

