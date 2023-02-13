
const state = {
    token:""
}

const mutations = {
    SET_TOKEN: (state) => {
        state.token = 123;
      },
}

const actions = {
    login({commit},userInfo){
        const username = userInfo.userName.trim()
        return new Promise((resolve,reject)=>{
            // 调用接口,获取token,有token就resolve并存储cookie及提交commit,否则reject
            commit("SET_TOKEN")
            resolve()
        })
    }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
