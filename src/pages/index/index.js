//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    searchText: ""
  },
  onLoad: function () {
    wx.setNavigationBarTitle({
      title: "首页",
    });
  },
  search() {
    var value = (this.data.searchText || "").trim();
    if (value.length < 1) {
      wx.showToast({
        title: '请输入查询内容',
        icon: "none"
      })
      return;
    }
    wx.navigateTo({
      url: "/pages/search/search?wd=" + value,
    })
  },
  hotSearch(event) {
    wx.navigateTo({
      url: "/pages/search/search?wd=" + event.target.dataset.text,
    })
  },
  // searchInput(event){
  //   var value=(event.detail.value||"").trim();
  //   this.setData({searchText:value}); 
  // }

})