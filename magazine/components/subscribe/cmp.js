// components/subscribe/cmp.js

import {SubscribeModel} from "../../modules/subscribe"

const subscribeModel = new SubscribeModel()

Component({
    /**
     * 组件的属性列表
     */
    properties: {
        tagName: String,
        tagId: Number
    },

    /**
     * 组件的初始数据
     */
    data: {
        class: 'common',
        myTagList: []
    },

    attached() {
        this.judgeTag()
    },

    /**
     * 组件的方法列表
     */
    methods: {
    
        onTap() {

            const mark = {
                tagName: this.properties.tagName,
                tagId: this.properties.tagId
            }
            

            if( this.data.class === 'common') {
                const myTagList = this.getMytagList()

                myTagList.push(mark)

                subscribeModel.setMyTagList( myTagList )


            } else {
        
                subscribeModel.removeMyTag( mark.tagId )

            }

            this.toggleClass()
            this.triggerEvent('tap')


        },

        getMytagList() {
            const myTagList = subscribeModel.getMytagList();
            this.setData({
                myTagList
            })

            return myTagList;

        },

        judgeTag() {
            const myTagList = this.getMytagList();

            myTagList.forEach( item => {
                if(item.tagId === this.properties.tagId) {
                    this.setData({
                        class: 'subscibe'
                    })
                }
            } )

        },

        toggleClass() {
            let className = '';

            if( this.data.class === 'common') {
                className = 'subscribe'
            } else {
                className = 'common'
            }

            this.setData({
                class: className
            })
        }
    }
})
