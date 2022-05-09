// pages/login/login.js
import { getProdcutList } from "../../api/login";
Page({
  /**
   * 页面的初始数据
   */
  data: {
    loginTtile: "招聘",
    usename: '',
    sms: null
  },
  submit() {
    console.log(123, this.data.usename, this.data.sms)
  },
  setUserName (e) {
    this.setData({
      usename: e.detail
    })
  },
  setSms (e) {
    this.setData({
      sms: e.detail
    })
  },
  pickerConfirm(e) {
    this.setData({
      pickerHidden: true,
    });
    this.setData({
      chosen: e.detail.value,
    });
  },

  pickerCancel() {
    this.setData({
      pickerHidden: true,
    });
  },

  pickerShow() {
    this.setData({
      pickerHidden: false,
    });
  },

  formSubmit(e) {
    console.log("form发生了submit事件，携带1数据为：", e.detail);
  },

  formReset(e) {
    console.log("form发生了reset事件，携带数据为：", e.detail.value);
    this.setData({
      chosen: "",
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("options");
    console.log(options);
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    getProdcutList();
    console.log("onReady");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    console.log("onShow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {
    console.log("onHide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {
    console.log("onUnload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    console.log("onPullDownRefresh");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    console.log("onReachBottom");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {
    console.log("onShareAppMessage");
  },
});
