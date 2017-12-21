// pages/test/test.js
var loadMore = function (that) {
  that.setData({
    hidden: false
  })
   
  that.data.papers = that.data.papers.concat([{
    "unique": 1,
    "title": "Atlas: Baidu`s key-value storage system for cloud data",
    "abstract": "本文针对百度网盘的存储场景，分析了百度存储文件的负责特征，发现百度网盘的文件大小范围基本在256k以下，这种文件大小不恰好文件系统和kv存储系统都不能很好的处理，因此自己设计了Atalas来解决...",
    "user_avatar": "http://www.amcoitsystems.com/wp-content/uploads/2017/07/golang.sh_.png",
    "user_name": "KDF5000",
    "date": "2017/02/13"
  },
  {
    "unique": 2,
    "title": "Atlas: Baidu`s key-value storage system for cloud data",
    "abstract": "本文针对百度网盘的存储场景，分析了百度存储文件的负责特征，发现百度网盘的文件大小范围基本在256k以下，这种文件大小不恰好文件系统和kv存储系统都不能很好的处理，因此自己设计了Atalas来解决...",
    "user_avatar": "http://www.amcoitsystems.com/wp-content/uploads/2017/07/golang.sh_.png",
    "user_name": "KDF5000",
    "date": "2017/02/13"
  },
  {
    "unique": 3,
    "title": "Atlas: Baidu`s key-value storage system for cloud data",
    "abstract": "本文针对百度网盘的存储场景，分析了百度存储文件的负责特征，发现百度网盘的文件大小范围基本在256k以下，这种文件大小不恰好文件系统和kv存储系统都不能很好的处理，因此自己设计了Atalas来解决...",
    "user_avatar": "http://www.amcoitsystems.com/wp-content/uploads/2017/07/golang.sh_.png",
    "user_name": "KDF5000",
    "date": "2017/02/13"
  }]);
  that.setData({
    papers: that.data.papers,
    hidden: true
  })
}
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: true,
    papers: [],
    scrollTop: 0,
    scrollHeight: 0,
    hasRefesh: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          scrollHeight: res.windowHeight
        })
      },
    })
    loadMore(that)
  },
  //页面滑动到底部
  bindDownLoad:function() {
    var that = this;
    loadMore(that);
    console.log("lower");
  },
  //滑动到顶部
  topLoad:function(){
    console.log("top");
  },
  //滑动
  scroll: function (event){
    console.log("scroll" + event.detail.scrollTop)
    this.setData({
      scrollTop : event.detail.scrollTop
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
    console.log("下拉")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("上拉")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})