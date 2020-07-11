//app.js
const {picsMap,wasteSort}=require("./config/config.js");
App({
  onLaunch: function () {
  },
  globalData: {
    picsMap:picsMap,
    wasteSort:wasteSort
  }
})