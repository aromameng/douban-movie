//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    items:[],
    items2:[]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
    // 影院热映
    this.getTheatersList();
    // 即将上映
    this.getComing();
  },
  getTheatersList(){
    var that = this;
    // 显示加载中
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 2000
    });
    wx.request({
      url: app.globalData.doubanBase + app.globalData.api.inTheaters,
      data: {
        "start": 0,
        "count": 10
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: { 'content-type': 'json' }, // 设置请求的 header
      success: function (res) {
        var data = res.data.subjects;
        that.setData({ "items": data});
      },
      complete: function () {
        //wx.hideToast();
      }
    })
  },
  getComing(){
    var that = this;
    wx.request({
      url: app.globalData.doubanBase + app.globalData.api.coming,
      data: {
        "start": 0,
        "count": 10
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: { 'content-type': 'json' }, // 设置请求的 header
      success: function (res) {
        var data = res.data.subjects;
        that.setData({ "items2": data });
      },
      complete: function () {
        //wx.hideToast();
      }
    })
  },
  handleMore(event){
    var type = event.currentTarget.dataset.type;
    wx.navigateTo({
      url: '/pages/list/list?type=' + type
    });
  }
})
