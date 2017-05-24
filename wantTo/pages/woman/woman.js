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
   toast: function(event) {
       console.log(event); 
 var p = event.currentTarget.id 
    wx.navigateTo({
      url: '../details/details?id='+p
    })
  },
  click:function(event){
     console.log("click")
      
  },
 

})
