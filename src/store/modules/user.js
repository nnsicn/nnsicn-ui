import { login } from "@/api/login/index";
const state = {
    token:""
}

const mutations = {
    SET_TOKEN: (state,token) => {
        console.log(token);
        state.token = token;
      },
}

const actions = {
    login({commit},userInfo){
        console.log(userInfo);
        // const username = userInfo.userName.trim()
        let {name,password} = userInfo;
        name = name.trim()
        return new Promise((resolve,reject)=>{
            // 调用接口,获取token,有token就resolve并存储cookie及提交commit,否则reject
            login({name,password}).then(res=>{
                commit("SET_TOKEN",res.token)
                resolve()
            }).catch(err=>{
                console.log(err.message);
            })
        })
    }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}