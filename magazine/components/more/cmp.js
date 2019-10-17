// components/more/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tagName: String
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
      let tagName = this.properties.tagName;
      wx.showActionSheet({
        itemList: ['Nice article', `和${tagName}不相关`, `不再显示和${tagName}相干内容`]
        ,success(e) {
          wx.showToast({
            title: '已提交'
          })
          }
      })
    }
  }
})
