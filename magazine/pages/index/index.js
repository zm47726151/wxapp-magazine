// pages/index/index.js
import {LikeModel} from "../../modules/like"
import {IndexModule} from '../../modules/index';
const indexModule = new IndexModule();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    articleList: [],
    markList: [],
    recommend: {},
    magazineId: 0,
    loading: true
  },
  getdata(magazineId) {
    Promise.all([
      indexModule.getArticleList(magazineId),
      indexModule.getMarkList(magazineId),
      indexModule.getRecommendInfo(magazineId)
      ]).then(res => {
        this.setData({
          articleList: res[0],
          markList: res[1],
          recommend: res[2]
        })
        this.hideLoading();
      })
  },
  onNav(e) {
    const magazineId = e.detail.index;
    console.log(magazineId)
    this.setMagazineId(magazineId)
    this.resetData()
    this.scrollPageToTop()
    this.getdata(magazineId)
  },
  hideLoading() {
    this.setData({
      loading: false
    })
  },
  onCatalog() {
    wx.switchTab({
      url: "/pages/catalog/catalog"
    })
  },
  resetData() {
    this.setData({
      articleList: [],
      markList: [],
      recommend: {}
    })
  },
  scrollPageToTop() {
    wx.pageScrollTo({
      scrollTop: 0,
      duration: 0
    })
  },
  setMagazineId(magazineId) {
    this.setData({
      magazineId
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   this.getdata(this.data.magazineId);
  //  setTimeout(() => {
  //    wx.hideTabBar({
  //      animation: true
  //    })
  //  }, 1000);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

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
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})