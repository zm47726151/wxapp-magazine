// pages/search/search.js
import {SearchModel} from '../../modules/search';
const searchModel = new SearchModel();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        searchWord: '',
        searching: true
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const searchWord = options.searchWord;

        this.setData({
            searchWord
        })

        this.getData( searchWord )
    },

    getData( word ) {
        const getSearchRecommend = searchModel.getSearchRecommend(word);
        const getSearchArticleList = searchModel.getSearchArticleList(word);

        Promise.all([getSearchRecommend, getSearchArticleList]).then( res => {
            this.setData({
                tagName: res[0].tag,
                recommend: res[0].recommend,
                articleList: res[1],
                searching: false
            })
        })
    }
})