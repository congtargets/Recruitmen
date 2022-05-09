
const service = {
  get (url,data) {
    return new Promise((resolve,reject) => {
      wx.request({
        method: 'get',
        url: url,
        data: data,
        header: {"content-type": "application/json"},
        success: (res) =>{
          // 调用接口成功
          resolve(res)
        },
        fail: (err) => {
          // 调用接口失败
          reject(err)
        }
      })
    })
  },
  post (url,data) {
    return new Promise((resolve,reject) => {
      wx.request({
        method: 'post',
        url: url,
        data: data,
        header: {"content-type": "application/x-www-form-urlencoded"},
        success: (res) =>{
          // 调用接口成功
          resolve(res)
        },
        fail: (err) => {
          // 调用接口失败
          reject(err)
        }
      })
    })
  }
}
 
module.exports = service
