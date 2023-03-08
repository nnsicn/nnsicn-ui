import request from "@/utils/request"

export function getMenuList(data) {
    return request({
        url: '/system/saveMenu',
        method: 'post',
        data
      })
}

