import urls from './urls'
import service from './request'

module.exports = {
  // 获取产品列表
  getProdcutList: (data) => {
    console.log('1231')
    return new Promise((resolve,reject)=> {
      resolve(service.get(urls.productList,data))
    })
  },
  // 获取产品详情
  getProductShow: (data) => {
    return new Promise((resolve,reject)=> {
      resolve(service.get(urls.productShow,data))
    })
  }
}