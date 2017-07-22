//logs.js
var util = require('../../utils/util.js')
//获取应用实例
var app = getApp()
Page({
  data: {
    type:null,
    items:[],
    page:0,
    rows:10,
    title:'',
    windowWidth: 0,
    windowHeight: 0,
    url:'',
    totalPage:0,
    isFreshing:false  //防止多次加载数据
  },
  onLoad: function (options) {
    // 获取视窗宽度、高度
    var windowWidth = app.globalData.windowWidth;
    var windowHeight = app.globalData.windowHeight;
    this.setData({
      type: options.type,
      windowWidth: windowWidth,
      windowHeight: windowHeight
    }) 

    // 显示加载中
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 3000
    });
    if(options.type==1){
      this.setData({
        title: '影院热映',
        url: app.globalData.doubanBase + app.globalData.api.inTheaters
      }) 
    }else{
      this.setData({
        title: '即将上映影片',
        url: app.globalData.doubanBase + app.globalData.api.coming
      })    
    }
    this.getListData();
  },
  getListData() {
    var that = this;
    // 显示加载中
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 2000
    });
    wx.request({
      url: this.data.url,
      data: {
        "start": this.data.page*this.data.rows,
        "count": this.data.rows
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: { 'content-type': 'json' }, // 设置请求的 header
      success: function (res) {
        var data = res.data.subjects;
        that.setData({ 
          "items": that.data.items.concat(data),
          "totalPage": Math.ceil(res.data.total / that.data.rows) 
         });
        that.data.isFreshing = false;
      },
      complete: function () {
        //wx.hideToast();
      }
    })
  },
  // 滚动到底部/右边，会触发 scrolltolower 事件
  handleLower(){
    if (this.data.page >= this.data.totalPage) return;
    if (!this.data.isFreshing){
      this.data.isFreshing=true;
      this.setData({ "page": this.data.page + 1 });
      this.getListData();
    }
  },
  // 滚动到顶部/左边，会触发 scrolltoupper 事件
  handleUpper(){

  }
})
