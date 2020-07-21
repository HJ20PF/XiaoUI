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
    banner: {
      type: Object,
      value: {
        list: [],
        root: ''
      },
      observer(newVal, oldVal) {
        if (!newVal) return;
        let ban = foot.dealFootNav(newVal.list, newVal.root,1);
        this.setData({
          ban
        })
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
  methods: {
    _onNavTap(e) {
      let pages = getCurrentPages();
      let currentPage = pages[pages.length - 1];
      let url = '/' + currentPage.route;
      let idx = e.currentTarget.dataset.index;
      let urls = this.data.ban[idx].link;
      if (!urls) return; 
      let id = this.data.ban[idx].typeid;
      let class_id = this.data.ban[idx].class_id;
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