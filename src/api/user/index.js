import request from "@/utils/request"

export function getInfo(data) {
    return request({
        url: '/getInfo',
        method: 'post',
        data
      })
}

