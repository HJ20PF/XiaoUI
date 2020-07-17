// pages/package/package.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
        {
            id: 'form',
            name: '表单',
            open: false,
            pages: []
        },
        {
            id: 'layout',
            name: '基础组件',
            open: false,
            pages: []
        },
        {
            id: 'feedback',
            name: '操作反馈',
            open: false,
            pages: [{page:'picker',title:'选择器'}]
        },
        {
            id: 'nav',
            name: '导航相关',
            open: false,
            pages: [{page:'menunav',title:'宫格导航'},{page:'iconnav',title:'图标导航'}]
        },
        {
            id: 'search',
            name: '搜索相关',
            open: false,
            pages: []
        },
        {
          id: 'show',
          name: '展示组件',
          open: false,
          pages: [{page:'poster',title:'海报'},]
      }
      ]
    // list: [
    //   {
    //       id: 'form',
    //       name: '表单',
    //       open: false,
    //       pages: ['button', 'input', 'form', 'list', 'slideview', 'slider', 'uploader']
    //   },
    //   {
    //       id: 'layout',
    //       name: '基础组件',
    //       open: false,
    //       pages: ['article', 'badge', 'flex', 'footer', 'gallery', 'grid', 'icons', 'loading', 'loadmore', 'panel', 'preview', 'progress']
    //   },
    //   {
    //       id: 'feedback',
    //       name: '操作反馈',
    //       open: false,
    //       pages: ['actionsheet', 'dialog', 'half-screen-dialog', 'msg', 'picker', 'toast', 'top-tips']
    //   },
    //   {
    //       id: 'nav',
    //       name: '导航相关',
    //       open: false,
    //       pages: ['navigation-bar', 'tabbar']
    //   },
    //   {
    //       id: 'search',
    //       name: '搜索相关',
    //       open: false,
    //       pages: ['searchbar']
    //   }
    // ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  onOpen(e){
    console.log(e)
    let id = e.target.dataset.id;
    let list = this.data.list;
    list.forEach((k,v) => {
      if(k.id == id){
        k.open = !k.open;
      }
    });
    console.log(list)
    this.setData({
      list
    })
  },
  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})