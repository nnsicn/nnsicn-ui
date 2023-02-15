import axios from "axios";
// 创建axios实例
const service = axios.create({
    baseURL: '/nnsicn',
    timeout: 10000,
    // headers: {'X-Custom-Header': 'foobar'}
  });

//   请求拦截器
service.interceptors.request.use(config=>{
    return config
  },error=>{
    return Promise.reject(error);
  })

//   响应拦截器
service.interceptors.response.use(result=>{
    const res = result.data;
    if(res.status==500){
      return Promise.reject(res);
    }
    return res;
},error=>{
    return Promise.reject(error);
})
export default service