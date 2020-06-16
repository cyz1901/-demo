// pages/Search/Search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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

  },

  search:function(e){
    
    var inputValue = e.detail.value

    console.log(inputValue)
    switch (inputValue) {
      case "栈":
        wx.navigateTo({
          url: '/pages/CardStack/CardStack',
        })
        break;
        case "队列":
          wx.navigateTo({
            url: '/pages/CardStack/CardStack',
          })
          break;
        case "哈希表":
          wx.navigateTo({
            url: '/pages/CardHashMap/CardHashMap',
          })
        break;
        case "链表":
          wx.navigateTo({
            url: '/pages/CardLink/CardLink',
          })
          break;
      default:
        break;
    }
  }
})