// app.js
import { promisifyAll } from 'wx-promise-pro'
import { updataInit } from './miniprogram_npm/wx-updata/index'  // 你的库文件路径
promisifyAll()  // promisify all wx api
App({
  onLaunch() {
    // wx-updata挂载到Page
    Page = updataInit(Page, { debug: true })
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
