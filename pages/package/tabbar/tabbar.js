//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
  },
  //事件处理函数
  onLoad: function () {
    this._getData();
  },
  onShow() {

  },
  _getData() {
    let _this = this;
    Promise.all([app.api.apiIndexSystemSet(), app.api.apiIndexNavIcon()]).then(res => {
      let nav = foots.dealFootNav(res[1].data, res[1].other.img_root);
      let setting = {
        config: res[0].data,
        nav
      }
      wx.setStorageSync('setting', setting);
      //console.log(res[0].data.mine_bg)
      this.setData({
        mineBg: res[0].data.mine_bg ? res[0].other.img_root + res[0].data.mine_bg : this.data.mineBg,
      })
    }).catch(res => {
      console.log(res)
      app.tips(res.msg);
    })
  },
})
