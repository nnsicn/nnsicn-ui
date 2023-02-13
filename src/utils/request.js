import axios from "axios";
// 创建axios实例
const service = axios.create({
    baseURL: 'nnsicn',
    timeout: 10000,
    // headers: {'X-Custom-Header': 'foobar'}
  });

//   请求拦截器
service.interceptors.request.use(config=>{
    console.log(config);
    return config
  },error=>{
    console.log(error);
    return Promise.reject(error);
  })

//   响应拦截器
service.interceptors.response.use(res=>{
    console.log(res);
    return res;
},error=>{
    console.log(error);
    return Promise.reject(error);
})