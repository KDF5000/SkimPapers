// pages/detail.js
var config = require('../../config')
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    item:{},
    hidden: false,
  },
  loadData: function(id){
    var that = this
    //异步请求获取数据
    wx.request({
      url: config.service.detailUrl+"?id="+id, //仅为示例，并非真实的接口地址
      success: function (result) {
        console.log(result.data)
        var data = result.data
        if (data['code'] == 0) {
             that.setData({
              hidden: true,
              item: data.data
            })
            return
        } else {
          that.setData({
            hidden: true,
          })
          util.showModel("请求失败", data)
        }
      },
      fail: function(error){
        util.showModel('请求失败', error);
        console.log('request fail', error);
      }
    })
    // qcloud.request({
    //   url: config.service.detailUrl,
    //   login: false,
    //   success(result) {
    //     // util.showSuccess('请求成功完成')
    //     var data = result.data
    //     if (data['code'] == 0) {
    //          that.setData({
    //           hidden: true,
    //           item: data.data
    //         })
    //         return
    //     } else {
    //       that.setData({
    //         hidden: true,
    //       })
    //       util.showModel("请求失败", data)
    //     }
    //   },
    //   fail(error) {
    //     util.showModel('请求失败', error);
    //     console.log('request fail', error);
    //   }
    // })

    // this.data.item = {
    //   "unique": 1,
    //   "title": "Atlas: Baidu`s key-value storage system for cloud data",
    //   "abstract": "本文针对百度网盘的存储场景，分析了百度存储文件的负责特征，发现百度网盘的文件大小范围基本在256k以下，这种文件大小不恰好文件系统和kv存储系统都不能很好的处理，因此自己设计了Atalas来解决...",
    //   "user_avatar": "http://www.amcoitsystems.com/wp-content/uploads/2017/07/golang.sh_.png",
    //   "user_name": "KDF5000",
    //   "date": "2017/02/13",
    //   "content":"http://www.baidu.com",
    // };
    this.setData({
      item: this.data.item,
      hidden: true,
    })
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var post_id = options.id
    console.log(post_id)
    this.loadData(post_id)
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
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})