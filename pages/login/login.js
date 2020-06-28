const app = getApp()
Page({
  data: {},
  onLoad: function(options) {    
    var newUrl = decodeURIComponent(options.id)
    if (newUrl) {
      this.setData({
        backurl: newUrl
      })
    } else {
      this.setData({
        backurl: "../index/index"
      })
    }
  },
  onLoginTab: function(res) {
    if (res.detail.errMsg === 'getUserInfo:fail auth deny') {
      return;
    }
    this.setData({
      info: res.detail.userInfo
    })
    this.wxLogin();
  },
  wxLogin() {
    var _this = this;
    wx.login({
      success: function(res) {
        if (res.code) {
          app.ajax({
            url: 'minilogin',
            data: {
              code: res.code
            },
            method: 'GET',
            success: function(res) {
              //console.log(res)
              if (!res.code) {
                wx.setStorageSync('session_key', res.data.session_key); 
                wx.setStorageSync('open_id', res.data.openid); 
                _this.setData({
                  openid: res.data.openid,
                })
                _this.getUserInfo(res.data.openid); 
              } else {
                app.tips(res.msg);
              }
            }
          })
        } else {
          app.tips('登录失败！' + res.errMsg);
        }
      }
    });
  },
  getUserInfo(openid) {
    // var share_user_id = wx.getStorageSync('share_user_id'); //分享人id
    var _this = this;
    var param = {
      openid: openid,
      name: this.data.info.nickName,
      img: this.data.info.avatarUrl,
      gender: this.data.info.gender,
      // share_user_id: share_user_id,
      email: '',
    }
    app.ajax({
      url: 'Cuser|login',
      data: param,
      method: 'GET',
      success: function(res) {
        if (!res.code) {
          wx.setStorageSync('userInfo', res.data);
          wx.setStorageSync('isauthlogin', 1);
          app.reTo(_this.data.backurl);
        } else {
          app.tips(res.msg);
        }
      }
    })
  },
  onHomeTap(){
    app.lunchTo("/sqtg_sun/pages/home/index/index")
  }
  
})