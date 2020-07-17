const app = getApp();
let foot = require('../xfooter/dealfoot.js');
/**
 * banner:(轮播图数据) 数组
 * height: (高度) 数字
 * showSearch: (是否显示搜索) 布尔值
 * searchLink： （搜索链接地址） 字符串
 */
Component({
  properties: {
    nav: {
      type: Object,
      value: [],
      observer(newVal, oldVal) {
        if (!newVal) return;
        let na = foot.dealFootNav(newVal.list, newVal.root,1);
        this._dealData(na);
      }
    },
    height: {
      type: [String, Number],
      value: 340
    },
    showSearch: {
      type: Boolean,
      value: false
    },
    searchLink: {
      type: String,
      value: ''
    }
  },
  data: {

  },
  attached() {
  },
  methods: {
    _dealData(data) {
      let navs = data;
      let newNavs = [];
      for (let i = 0; i < navs.length; i += 10) {
        newNavs.push(navs.slice(i, i + 10));
      }
      this.setData({
        na: newNavs
      })
    },
    _onNavTap(e) {
      let pages = getCurrentPages();
      let index = e.currentTarget.dataset.index;
      let idx = e.currentTarget.dataset.idx; 
      let urls = this.data.na[index][idx].link;
      let currentPage = pages[pages.length - 1];
      let url = '/' + currentPage.route;           
      let id = this.data.na[index][idx].typeid;
      let class_id = this.data.na[index][idx].class_id;
      console.log(this.data.na)
      // let class_id = 0
      if (urls == url || urls == '') {
        return;
      }
      app.navTo(urls + '?id=' + id + "&class_id=" + class_id);
    },
    _onSearchTap() {
      app.navTo(this.data.searchLink);
    }
  }
})
