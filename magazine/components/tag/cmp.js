// components/tag/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tagName: String,
    tagId: Number,
    targetSrc: String
  },

  /**
   * 组件的初始数据
   */
  data: { 
  },

  /**
   * 组件的方法列表
   */
  methods: {
    ontap() {
      let id = +this.properties.tagId;
      let src = this.properties.targetSrc;
      wx.navigateTo({
        url: `${src}?tagId=${id}`,
        success(res) {
          
        },
        fail(res) {
          _showError();
        }
      });
    },
    _showError() {
      wx.showToast({
        title: '当前小程序为测试版本, 不能点击跳转哟',
        icon: 'none',
        duration: 1000,
        mask: true
      });
    }
  }
})
