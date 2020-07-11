// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchText: "请输入关键文字",
    type: "qita"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
    var app = getApp();
    wx.setNavigationBarTitle({
      title: "搜索",
    });
    this.setData({
      searchText: options.wd,
      type: app.globalData.wasteSort[options.wd]
    });

  },
  search: function () {
    var app = getApp();
    var value = (this.data.searchText || "").trim();
    if (value.length < 1) {
      wx.showToast({
        title: '请输入查询内容',
        icon: "none"
      })
      return;
    }
    this.setData({ 
      type: app.globalData.wasteSort[value]
    });
  },
  hotTap:function(event){ 
    var app = getApp();
    this.setData({
      searchText: event.target.dataset.text,
      type: app.globalData.wasteSort[event.target.dataset.text]
    });
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

  }
})