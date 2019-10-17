// components/articleList/cmp.js
import {
  IndexModule
} from '../../modules/index';
const indexModule = new IndexModule();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // articleList: Array,
    articleList: {
      type: Array,
      value: [],
      observe() {

      }
    },
    magazineId: Number,
    word: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    loading: false,
    isAll: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    scrolltolower() {
      console.log('加载更多')
      if(this.data.loading || this.data.isAll){
        return;
      }
      this.setData({
        loading: true
      })
      let magazineId = this.data.magazineId;
      indexModule.getArticleList(magazineId, this.data.articleList.length)
        .then(data => {
          let conbineList = this.data.articleList.concat(data);
          let l = conbineList.length;
          if(l == this.data.articleList.length){
            this.setData({
              isAll: true
            });
            return;
            }  
            this.setData({
              articleList: conbineList,
              loading: false
            });
          });
    }
  }
})