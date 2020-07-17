const app = getApp();
let foot = require('../xfooter/dealfoot.js');
/**
 * banner:(轮播图数据) 数组
 * count:(一行个数) 数字
 */
Component({
  properties: {
    nav: {
      type: Object,
      value: [],
      observer(newVal, oldVal) {
        if (!newVal) return;
        let na = foot.dealFootNav(newVal.list, newVal.root,1);
        console.log(na)
        this.setData({
          na: na
        })
      }
    },
    count:{
      type:Number,
      value:4,
    }
  },
  data: {

  },
  attached() {
  },
  methods: {
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
    }
  }
})
