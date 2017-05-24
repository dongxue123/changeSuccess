var app = getApp();

Page({
  	data: {
  		userInfo: {},
      mode: ['我的收藏','我的订单','我的地址','联系客服','关注我们']
  	},
  
  	onLoad: function() {
  		var that = this;
  		wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.setData({
                userInfo: res.userInfo
              })
            }
          })
        }
      });
  	},
  
    back: function() {
    wx.navigateTo({
      url: '../my/my'
     
    })
    
  },
  att:function(){
    
    
  }
})