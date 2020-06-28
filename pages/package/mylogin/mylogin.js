// pages/package/mylogin/mylogin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isauthlogin:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  //授权
  clickme() {
    let url = encodeURIComponent('/pages/package/mylogin/mylogin');
    wx.redirectTo({
      url: "/pages/login/login?id=" + url
    })
  },
})