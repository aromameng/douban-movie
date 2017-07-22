//app.js
App({
  onLaunch: function() {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.globalData.windowWidth = res.windowWidth;
        that.globalData.windowHeight = res.windowHeight;
      }
    });
  },

  getUserInfo: function(cb) {
    var that = this
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      wx.getUserInfo({
        withCredentials: false,
        success: function(res) {
          that.globalData.userInfo = res.userInfo
          typeof cb == "function" && cb(that.globalData.userInfo)
        }
      })
    }
  },

  globalData: {
    userInfo: null,
    doubanBase: "https://api.douban.com",
    // 豆瓣API  https://developers.douban.com/wiki/?title=movie_v2#subject
    api:{
      inTheaters: "/v2/movie/in_theaters",
      coming:"/v2/movie/coming_soon",
      subjectDetail:'/v2/movie/subject/',
    },
    windowWidth:0,
    windowHeight:0
  }
})
