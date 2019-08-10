// 封装操作sessionStorage的函数
// 1.约定好key的名字
// 2.约定好value的格式
const KEY = 'hm-toutiao-user'
export default {
  // 设置用户信息
  setUser (user) {
    //   存储 user 对象数据
    window.sessionStorage.setItem(KEY, JSON.stringify(user))
  },
  //   获取用户信息
  getUser () {
    return JSON.parse(window.sessionStorage.getItem(KEY) || '{}')
  },
  // 移除用户信息
  clearUser () {
    window.sessionStorage.removeItem(KEY)
  }
}
