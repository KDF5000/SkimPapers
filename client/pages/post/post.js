// pages/post/post.js
var config = require('../../config')
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  
  },
  formSubmit: function(e){
     console.log(e.detail.value)
     var data = e.detail.value
     if(data.title == "" || data.abstract == "" || data.content == ""){
       util.showModel("输入错误", "内容不能为空")
       return
     }
     qcloud.request({
       url: config.service.post,
       data: data,
       dataType: 'json',
       method: 'POST',
       success: function(res){
        console.log(res)
        if(res.data['code'] == -1){
          util.showModel("服务器错误", res.data['data'])
        }else{
          wx.navigateBack({})
        }
       },
       fail: function(err){
         console.log(res.data)
       }
     })
  }
})