// components/video/cmp.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    videoSrc: String,
    posterSrc: String,
    mainTitle: String,
    duration: String,
    videoId: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    showPoster: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    oncontrol() {
      let id = this.properties.videoId;
      let b = this.data.showPoster;
      let video = wx.createVideoContext(id, this);
      this.setData({
        showPoster: !b
      });
      b ? video.play() : video.stop();
    },
    onend() {
      this.setData({
        showPoster: true
      });
    }
  }
})