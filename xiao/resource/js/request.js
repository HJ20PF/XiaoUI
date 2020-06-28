var ajaxs = require('../../../we7/js/util.js');
/* request
 *@object{url,data,method,success,fail,complete}
 */
module.exports = function(object) {
  if (!object.data)
    object.data = {};

  if (!object.data.m)
    object.data.m = 'xiao';
  ajaxs.request({
    'url': 'entry/wxapp/' + object.url,
    'data': object.data,
    'method': object.method ? object.method : 'POST',
    'showLoading': false,
    success: function(res) {
      if (object.success) {
        if (!res.data.code) {
          object.success(res.data);
        } else {
          if (object.fail) {
            object.fail(res);
          } else {
            wx.showToast({
              title: res.data.msg,
              icon: 'none',
              duration: 1500
            })
          }
        }
      }
    },
    fail: function(res) {
      wx.showToast({
        title: res.errMsg,
        icon: 'none',
        duration: 2000
      })
      if (object.fail)
        object.fail(res);
    },
    complete: function(res) {
      if (res.statusCode != 200) {
        wx.showToast({
          title: res.statusCode + '。。。',
          icon: 'none',
          duration: 2000
        })
      }
      if (object.complete)
        object.complete(res);
    }
  });
};