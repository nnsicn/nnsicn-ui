// 用来判断是否为外部链接,
export function isExternal(path){
    console.log(path);
    // 校验以http://开头或https://开头的路径
    console.log(/^(https?:\/\/)/.test(path));
    return /^(https?:\/\/)/.test(path);
}