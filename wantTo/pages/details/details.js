//index.js
//获取应用实例
var app = getApp()
Page({
  data: {    
  }, 
  // 分享
  onShareAppMessage: function () {
    return {
      title: '冬季这双鞋你值得拥有……',
      desc: 'z这是一款值得拥有的美衣，这个夏天……',
      path: '/page/user?id=123',
       success:function(){
           wx.showToast({  
          title: '分享成功',  
          icon: 'success',  
          duration: 2000  
          })  
       }     
    } 
  }, 
   onLoad:function(options){ 
 // 页面初始化 options为页面跳转所带来的参数 
 this.setData({ 
 title:options.id 
 }) 
  }
 
})
