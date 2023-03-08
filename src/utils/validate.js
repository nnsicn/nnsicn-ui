// 用来判断是否为外部链接,
export function isExternal(path){
    // 校验以http://开头或https://开头的路径
    return /^(https?:\/\/)/.test(path);
}