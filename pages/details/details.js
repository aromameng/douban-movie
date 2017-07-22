//logs.js
var util = require('../../utils/util.js')
//获取应用实例
var app = getApp()
Page({
  data: {
    info: {},
    id:null,
    casts:[],
    directors:[],
    comments:[]
  },
  onLoad: function (options) {
    this.setData({
      id: options.id
    }) 
    // 显示加载中
    wx.showToast({
      title: '加载中',
      icon: 'loading',
      duration: 3000
    });
    // 影片详情
    this.getDetail();  
    // 获取短评 (无权限)
    //this.getComments();
  },
  getDetail(){
    var that=this;
    wx.request({
      url: app.globalData.doubanBase + app.globalData.api.subjectDetail + this.data.id,
      data:{},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: { 'content-type': 'json' }, // 设置请求的 header
      success: function (res) {
        var data = res.data;
        // console.log(data);
        that.setData({ "info": data, "casts": data.casts, "directors": data.directors });
      },
      complete: function () {
        //wx.hideToast();
      }
    })
  },
  getComments(){
    var that = this;
    wx.request({
      url: app.globalData.doubanBase + app.globalData.api.subjectDetail + this.data.id +'/comments',
      data: {
        "start": 0,
        "count": 20
      },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      header: { 'content-type': 'json' }, // 设置请求的 header
      success: function (res) {
        var data = res.data;
        console.log(data);
        that.setData({ "comments": data});
      },
      complete: function () {
        //wx.hideToast();
      }
    })
  }
})
