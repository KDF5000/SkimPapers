// pages/home/home.js
var config = require('../../config')
var qcloud = require('../../vendor/wafer2-client-sdk/index')
var util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden: false,
    papers:[],
    page: 1,
    pageSize: 4,
    noMore: false,
    hasRefresh: false,
    count: 1, //for debug
  },

  loadMore: function(){
    var that = this
    //请求后台获取数据
    qcloud.request({
      url: config.service.loadMore + "?page=" + this.data.page + "&pageSize=" + this.data.pageSize,
      login: false,
      success(result) {
        // util.showSuccess('请求成功完成')
        var data = result.data
        if (data['code'] == 0) {
          if(data['data'].length == 0){
            that.data.noMore = true
            that.setData({
              noMore: true
            })
            return
          }
          
          that.data.papers = that.data.papers.concat(data['data'])
          that.setData({
            hidden: true,
            papers: that.data.papers
          })
          that.data.page++
          // var item
          // for(item in data['data']){
          //   console.log(data['data'][item])
          // }
        } else {
          util.showModel("请求失败", data['data'])
        }
      },
      fail(error) {
        util.showModel('请求失败', error);
        console.log('request fail', error);
      },
      complete(){
        wx.stopPullDownRefresh()
      }
    })
    //mock

    // this.data.papers = [{
    //   "unique": 1,
    //   "title": "Atlas: Baidu`s key-value storage system for cloud data",
    //   "abstract": "本文针对百度网盘的存储场景，分析了百度存储文件的负责特征，发现百度网盘的文件大小范围基本在256k以下，这种文件大小不恰好文件系统和kv存储系统都不能很好的处理，因此自己设计了Atalas来解决...",
    //   "user_avatar": "/images/default.png",
    //   "user_name": "KDF5000",
    //   "date": "2017/02/13"
    // },
    // {
    //   "unique": 2,
    //   "title": "Atlas: Baidu`s key-value storage system for cloud data",
    //   "abstract": "本文针对百度网盘的存储场景，分析了百度存储文件的负责特征，发现百度网盘的文件大小范围基本在256k以下，这种文件大小不恰好文件系统和kv存储系统都不能很好的处理，因此自己设计了Atalas来解决...",
    //   "user_avatar": "/images/default.png",
    //   "user_name": "KDF5000",
    //   "date": "2017/02/13"
    // },
    // {
    //   "unique": 3,
    //   "title": "Atlas: Baidu`s key-value storage system for cloud data",
    //   "abstract": "本文针对百度网盘的存储场景，分析了百度存储文件的负责特征，发现百度网盘的文件大小范围基本在256k以下，这种文件大小不恰好文件系统和kv存储系统都不能很好的处理，因此自己设计了Atalas来解决...",
    //   "user_avatar": "/images/default.png",
    //   "user_name": "KDF5000",
    //   "date": "2017/02/13"
    // }]
    // that.setData({
    //   hidden: true,
    //   papers: that.data.papers
    // })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //请求网路获取数据
    this.loadMore()
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
    this.data.page = 1
    this.data.noMore = false
    this.setData({
      noMore: false
    })
    this.data.papers = []
    this.loadMore()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if(this.data.noMore){
      console.log("no more data")
      return
    }
    this.loadMore()
  
    // this.data.papers = this.data.papers.concat([{
    //   "unique": length+1,
    //   "title": "Atlas: Baidu`s key-value storage system for cloud data",
    //   "abstract": "本文针对百度网盘的存储场景，分析了百度存储文件的负责特征，发现百度网盘的文件大小范围基本在256k以下，这种文件大小不恰好文件系统和kv存储系统都不能很好的处理，因此自己设计了Atalas来解决...",
    //   "userImg": "/images/default.png",
    //   "userName": "KDF5000",
    //   "date": "2017/02/13"
    // }])

    // this.setData({
    //   papers: this.data.papers
    // })
    // this.data.count++
    // if(this.count > 5){
    //   this.data.noMore = true
    //   this.setData({
    //     noMore: true
    //   })
    // }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  },

  /**
   * 发布新文章
   */
  newPaper: function(){
    wx.navigateTo({
      url: "/pages/post/post",
    })
  },
  postDetail: function(event){
    console.log(event['currentTarget']['dataset']['id'])
    var id = event['currentTarget']['dataset']['id']
    wx.navigateTo({
      url: "/pages/detail/detail?id="+id,
    })
  }
})