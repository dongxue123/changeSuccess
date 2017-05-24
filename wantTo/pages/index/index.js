//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
   
     movies:[    
    {url:'http://xqproduct.xiangqu.com/FrthBk_FNPWYrUbYwFF8Rf_D5STe?imageView2/2/w/300/q/90/format/jpg/750x750/'} ,    
     {url:'http://xqproduct.xiangqu.com/FiIt_vlx8CTM-hMn22uI-ZRpZ9RH?imageView2/2/w/300/q/90/format/jpg/800x800/'} ,      
     {url:'http://xqproduct.xiangqu.com/Fhtnoi2L_89bXOPsQI2zqiCoefh1?imageView2/2/w/300/q/90/format/jpg/800x800/'} ,      
     {url:'http://xqproduct.xiangqu.com/FtYQImYiI1jHwcujIj0R_UtzRlOE?imageView2/2/w/300/q/90/format/jpg/800x800/'},        
     {url:'http://xqproduct.xiangqu.com/FomvjVEM4tqbwvHyJ7gSKNRqbnMx?imageView2/2/w/300/q/90/format/jpg/800x800/'}        
    ]    
   
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  
  }
})
