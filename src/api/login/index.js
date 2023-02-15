import request from "@/utils/request"
console.log(request);
export function login(userInfo) {
    return request({
        url: '/login',
        method: 'post',
        data:userInfo
      })
}