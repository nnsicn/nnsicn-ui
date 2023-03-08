import { login } from "@/api/login/index";
import { getInfo } from "@/api/user/index";
import { setToken } from "@/utils/token";
const state = {
  token: "",
  roles: [],
};

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles;
  },
};

const actions = {
  login({ commit }, userInfo) {
    let { name, password } = userInfo;
    name = name.trim();
    return new Promise((resolve, reject) => {
      // 调用接口,获取token,有token就resolve并存储cookie及提交commit,否则reject
      login({ name, password })
        .then(res => {
          if (res.status == 200) {
            commit("SET_TOKEN", res.data.token);
            setToken(res.data.token);
            resolve();
          }
        })
        .catch(err => {
          reject(err.message)
        });
    });
  },
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      getInfo({ token: state.token }).then(res => {
        if (res.status == 200) {
          const { data } = res;
          const { roles } = data;
          commit("SET_ROLES", roles);
          resolve(roles);
        }
      });
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
