//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    daily_one: '/image/daily.png',
    daily_two: '/image/goodluck.png',
    stack:'/image/stack.png',
    hashmap:'/image/hashmap.png',
    link:'/image/link.png',
    FindAarry:["栈","队列","哈希表","链表"]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  jumpAlgorithm:function(){
    wx.navigateTo({
      url: '/pages/Algorithm/Algorithm',
    })
  },

  jumpSql:function(){
    wx.navigateTo({
      url: '/pages/Sql/Sql',
    })
  },

  jumpShell:function(){
    wx.navigateTo({
      url: '/pages/Shell/shell',
    })
  },

  jumpThread:function(){
    wx.navigateTo({
      url: '/pages/Thread/thread',
    })
  },

  jumpcardstack:function(){
    wx.navigateTo({
      url: '/pages/CardStack/CardStack',
    })
  },

  jumpcardhash:function(){
    wx.navigateTo({
      url: '/pages/CardHashMap/CardHashMap',
    })
  },

  jumpcardlink:function(){
    wx.navigateTo({
      url: '/pages/CardLink/CardLink',
    })
  },

  jumpsearch:function(e){
    wx.navigateTo({
      url: '/pages/Search/Search',
    })
    
  }
  
})
