import request from "@/utils/request"

export function saveMenu(data) {
    return request({
        url: '/system/saveMenu',
        method: 'post',
        data
      })
}
export function updateMenu(data) {
  return request({
    url: '/system/updateMenu',
    method: 'post',
    data
  })
}

