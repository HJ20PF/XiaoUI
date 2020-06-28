//app.js
App({
  onLaunch: function () {
    const updateManager = wx.getUpdateManager()
    updateManager.onCheckForUpdate(function (res) {
      // 请求完新版本信息的回调
      //console.log(res.hasUpdate)
    })
    updateManager.onUpdateReady(function () {
      wx.showModal({
        title: '更新提示',
        content: '新版本已经准备好，是否重启应用？',
        success(res) {
          if (res.confirm) {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            updateManager.applyUpdate()
          }
        }
      })
    })
    updateManager.onUpdateFailed(function () {
      // 新版本下载失败
    })
  },
  siteInfo: require('siteinfo.js'),
  util: require('/we7/js/util.js'),
  ajax:require('/xiao/resource/js/request.js'),
  tabSuccess() {
    this.globalData.tab = false;
  },
  navTo(url) {
    let _this = this;
    let urls = url.split('?');
    let fetchUrl = urls[0];
    let navList = wx.getStorageSync('setting').nav;
    let lunch = false;
    if (navList) {
      for (let i in navList) {
        if (fetchUrl == navList[i].link) {
          lunch = true;
        }
      }
    }
    let key = this.globalData.tab;
    if (!key) {
      this.globalData.tab = !this.globalData.tab;
      if (lunch) {
        wx.redirectTo({
          url,
          complete: _this.tabSuccess,
        })
      } else {
        wx.navigateTo({
          url,
          complete: _this.tabSuccess,
        })
      }
    }
  },
  reTo(url) {
    let _this = this;
    let key = this.globalData.tab;
    if (!key) {
      this.globalData.tab = !this.globalData.tab;
      wx.redirectTo({
        url,
        complete: _this.tabSuccess,
      })
    }
  },
  lunchTo(url) {
    let _this = this;
    let key = this.globalData.tab;
    if (!key) {
      this.globalData.tab = !this.globalData.tab;
      wx.reLaunch({
        url,
        complete: _this.tabSuccess,
      })
    }
  },
  tips(txt) {
    wx.showToast({
      title: txt,
      icon: 'none',
      duration: 1500
    })
  },
  alert(msg, cb, cancb, title, cancelText, confirmText) { // 提示信息， 确定回调， 取消回调 （cancb == 0 没有取消）， 标题，取消按钮文字， 确定按钮文字
    wx.showModal({
      title: title ? title : '提示',
      content: msg ? msg : '暂无提示！',
      showCancel: cancb == 0 ? false : true,
      cancelText: cancelText ? cancelText : '取消',
      confirmText: confirmText ? confirmText : '确定',
      success(res) {
        if (res.confirm) {
          cb && cb();
        } else if (res.cancel) {
          cancb && cancb();
        }
      }
    })
  },
  phone(tel) {
    tel && wx.makePhoneCall({
      phoneNumber: tel
    })
  },
  map(lat, lng) {
    let latitude = lat - 0;
    let longitude = lng - 0;
    wx.openLocation({
      latitude,
      longitude,
      scale: 28
    })
  },
  location() {
    let _this = this;
    return new Promise(function (resolve, reject) {
      wx.getLocation({
        type: 'wgs84',
        success(res) {
          let lat = res.latitude;
          let lng = res.longitude;
          let local = {
            lat,
            lng
          }
          resolve(local);
        },
        fail(res) {
          resolve(false);
        }
      })
    })
  },
  timePass(time) {
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        resolve();
      }, time ? time : 1000)
    })
  },
  globalData: {}
})