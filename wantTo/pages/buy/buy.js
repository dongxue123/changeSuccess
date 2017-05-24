//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}   
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  },
    onShareAppMessage: function () {
    return {
      title: '自定义分享标题',
      path: '/page/user?id=123',
      success: function(res) {
        // 分享成功
      },
      fail: function(res) {
        // 分享失败
      }
    }
  },
  toast: function() {
    wx.navigateTo({
      url: '../buy_total/buy_total'
    })
  },
   woman: function() {
    wx.navigateTo({
      url: '../woman/woman'
    })
  },
//    statego: function(event) {
//      console.log(event); 
//  var p = event.currentTarget.id 
//     wx.navigateTo({
//       url: '../project/project?id='+p
//     })
//   }
})
