// pages/timepicker/tiempicker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    minDate: new Date(2002, 10, 1).getTime(),
    maxDate: new Date(2039, 10, 1).getTime(),
    color:'color:red',
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
  showTime() {
    this.setData({ show: true });
    console.log(this.data.show);
  },
  confirm(e) {
    console.log(e)
    this.setData({ show: false});
  },
  timeChange(e) {
    var arr = e.detail.getValues();
    console.log(e)
    console.log(arr)
  }
})