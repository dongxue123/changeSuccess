
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
   calling:function(){
    wx.makePhoneCall({
      phoneNumber: '15010956697', 
      success:function(){
       
        wx.showToast({  
          title: '拨号成功',  
          icon: 'success',  
          duration: 2000  
          })  
      },
      fail:function(){
         wx.showToast({  
          title: '拨号失败',  
          icon: 'fail',  
          duration: 2000  
          })  
      }
    })
  },
   me: function() {
    wx.navigateTo({
      url: '../me/me'
    })
  },
  shop: function() {
    wx.navigateTo({
      url: '../shoppingcart/shoppingcart'
    })
  },
 
})
