var url = "http://192.168.30.4:8080/gtxcx/carrier/getCarrier.action";  
var page = 1;  
var GetList = function (that) {  
    that.setData({  
        hidden:false 
    });  
    wx.request({  
        url: url,  
        data: {  
            pageSize: 10,  
            pageNo: page  
        },  
        success: function (res) {  
            var l = that.data.list  
            for (var i = 0; i < res.data.length; i++) {  
                l.push(res.data[i])  
            }  
            that.setData({  
                list: l  
            });  
            page++;  
            that.setData({  
                hidden: true  
            });  
        }  
    });  
}  
Page({  
    data: {  
        hidden: true,  
        list: [{
          "carrierName":"邱培杰",
           "carrierTelphone":"品牌创始人",
           "carrierId":77,
           "src":"http://xquser.xiangqu.com/FkpRKy0lb2wQcJjuBvenlgAbjlbC?imageView2/2/w/140/q/90/format/jpg/640x640/"
        },
        {
          "carrierName":"邱培杰",
           "carrierTelphone":"品牌创始人",
           "carrierId":33,      "src":"http://xquser.xiangqu.com/FlTl0PtGYTgygOtgAAJ3Nk1EUPDb?imageView2/2/w/40/q/90/format/jpg/40x40/"
        },
         {
          "carrierName":"邱培杰",
           "carrierTelphone":"品牌创始人",
           "carrierId":56,         "src":"http://xquser.xiangqu.com/FuXCDtRZdoD_Tx_8Hlc4xNWkEjfG?imageView2/2/w/140/q/90/format/jpg/611x611/"
        },
         {
          "carrierName":"钟绿",
           "carrierTelphone":"品牌创始人",
           "carrierId":23,         "src":"http://xquser.xiangqu.com/FqPNDjIZV_I-4f4-tWizX9Xnq-Jg?imageView2/2/w/140/q/90/format/jpg/640x640/"
        },
        {
          "carrierName":"钟绿",
           "carrierTelphone":"品牌创始人",
           "carrierId":23,          "src":"http://xquser.xiangqu.com/FrRDCE0ibLlvB7r57FkntmmKD35g?imageView2/2/w/140/q/90/format/jpg/640x640/"
        },
        {
          "carrierName":"钟绿",
           "carrierTelphone":"品牌创始人",
           "carrierId":23,                  "src":"http://xquser.xiangqu.com/Fj_Jec850hpGk-KGNUqSCkC_wV17?imageView2/2/w/140/q/90/format/jpg/638x638/"
        }, {
          "carrierName":"邱培杰",
           "carrierTelphone":"品牌创始人",
           "carrierId":56,         "src":"http://xquser.xiangqu.com/FuXCDtRZdoD_Tx_8Hlc4xNWkEjfG?imageView2/2/w/140/q/90/format/jpg/611x611/"
        },
         {
          "carrierName":"钟绿",
           "carrierTelphone":"品牌创始人",
           "carrierId":23,         "src":"http://xquser.xiangqu.com/FqPNDjIZV_I-4f4-tWizX9Xnq-Jg?imageView2/2/w/140/q/90/format/jpg/640x640/"
        },
        {
          "carrierName":"钟绿",
           "carrierTelphone":"品牌创始人",
           "carrierId":23,          "src":"http://xquser.xiangqu.com/FrRDCE0ibLlvB7r57FkntmmKD35g?imageView2/2/w/140/q/90/format/jpg/640x640/"
        }, {
          "carrierName":"邱培杰",
           "carrierTelphone":"品牌创始人",
           "carrierId":56,         "src":"http://xquser.xiangqu.com/FuXCDtRZdoD_Tx_8Hlc4xNWkEjfG?imageView2/2/w/140/q/90/format/jpg/611x611/"
        },
         {
          "carrierName":"钟绿",
           "carrierTelphone":"品牌创始人",
           "carrierId":23,         "src":"http://xquser.xiangqu.com/FqPNDjIZV_I-4f4-tWizX9Xnq-Jg?imageView2/2/w/140/q/90/format/jpg/640x640/"
        },
        {
          "carrierName":"钟绿",
           "carrierTelphone":"品牌创始人",
           "carrierId":23,          "src":"http://xquser.xiangqu.com/FrRDCE0ibLlvB7r57FkntmmKD35g?imageView2/2/w/140/q/90/format/jpg/640x640/"
        }],  
        scrollTop: 0,  
        scrollHeight: 0  
    },  
    onLoad: function () {  
        var that = this;  
        wx.getSystemInfo({  
            success: function (res) {  
                console.info(res.windowHeight);  
                that.setData({  
                    scrollHeight: res.windowHeight  
                });  
            }  
        });  
    },  
    onShow: function () {  
        var that = this;  
        GetList(that);  
    },  
    bindDownLoad: function () {  
        var that = this;  
        GetList(that);  
    },  
    scroll: function (event) {  
        this.setData({  
            scrollTop: event.detail.scrollTop  
        });  
    },  
    refresh: function (event) {  
        page = 1;  
        this.setData({  
            list: [],  
            scrollTop: 0  
        });  
        GetList(this)  
    },  
    onPullDownRefresh: function () {  
        console.log("下拉")  
    },  
    onReachBottom: function () {  
        console.log("上拉");  
    }  
})  