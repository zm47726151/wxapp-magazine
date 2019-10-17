// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLike: {
      // 0: true,
      // 1: true,
      // 2: true,
      // 3: true,
      // 4: true,
      // 5: true,
      // 6: true,
      // 7: true,
    }
  },
  islike(e) {
    var i = e.currentTarget.dataset.articleindex;
    var isLike = this.data.isLike;
    var f = !isLike[i];
    isLike[i] = f;
    this.setData({
      isLike: isLike
    });
    wx.setStorageSync('isLike', isLike);
  }, 
  showAction() {
    wx.showActionSheet({
      itemList: ['超喜欢','超垃圾','不感冒'],
      itemColor: '#fcc',
      success(e) {
        console.log(e.tapIndex+'列表')
      }
    });
  },
  showK() {
    wx.showModal({
      title: '为伊消得人憔悴',
      content: '如果我爱你,和你倾听风的呼吸, 如果我爱你,心是无声的默契',
      cancleText: 'sorry,you are nice boy',
      cancleColor: '#aaf',
      confirmText: 'i waiting for a long time',
      confirmColor: '#cfc',
      success(res) {
        if(res.confirm){
          console.log('你成功了哥们儿')
        }
        if(res.cancle){
          console.log('被发了好人卡')
        }
      }
    })
  },
  showBlock() {
    wx.showToast({
      title: '你被GOD选中了',
      icon: 'loading',
      image: '/img/胡歌.jpg',
      duration: 2000,
      mark: true
    });
  },
  doStorage() {
    var obj = wx.getStorageSync('isLike');
    obj || (obj = {});
    this.setData({
       isLike: obj
     })
  },
  goTo(e) {
    var typeId = e.currentTarget.dataset.typeId;
    wx.navigateTo({
      url: '/pages/view/view?typeId='+typeId
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDetails();
    this.doStorage();
    console.log(options);

  },
  getDetails() {
    var BaseUrl = 'https://easy-mock.com/mock/5bb8c1c63ccc501a316e3ccb/magazine';
    var dataUrl = '/home';
    var self = this;
    wx.request({
      url: BaseUrl+dataUrl,
      success(res) {
        var details = res.data;
        self.setData({
          recommend: details.recommend,
          markType: details.markType,
          articleList: details.articleList
        })  
        
      }
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