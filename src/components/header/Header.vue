<template>
    <div class="headers">
        <div class="content-wrapper">
            <div class="avatar">
                <img width="64" height="64" :src="seller.avatar" alt="">
            </div>
            <div class="content">
                <div class="title">
                    <span class="brand"></span>
                    <span class="name">{{seller.name}}</span>
                </div>
                <div class="description">
                    {{seller.description}}/{{seller.deliveryTime}}分钟送达
                </div>
                <div v-if="seller.supports" class="support">
                    <span id="support-icon" :class="classMap[seller.supports[0].type]"></span>
                    <span class="text">{{seller.supports[0].description}}</span>
                </div>
            </div>

            <div class="support-count" v-if="seller.supports" @click="showDetail">
                <span class="count">{{seller.supports.length}}个 ></span>
                <i></i>
            </div>
        </div>

        <!-- 公告 -->
        <div class="bulletin-wrapper" @click="showDetail">
            <span class="bulletin-title"></span>
            <span class="bulletin-text">{{seller.bulletin}}</span>
            <span class="icon-bulletin">></span>
        </div>

        <!-- 背景图 -->
        <div class="header-background">
            <img :src="seller.avatar" height="100%" width="100%"/>
        </div>

        <!-- 浮层 -->
        <div class="detail" v-show="detailShow">
            <div class="detail-wrapper clearfix">
                <div class="detail-main">
                        {{seller.bulletin}}
                        {{seller.bulletin}}
                        {{seller.bulletin}}
                        {{seller.bulletin}}
                        {{seller.bulletin}}
                        {{seller.bulletin}}
                        {{seller.bulletin}}
                        {{seller.bulletin}}
                        {{seller.bulletin}}
                        {{seller.bulletin}}
                </div>
            </div>
            <div class="detail-close">
                X
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            classMap: [],
            detailShow: false
        }
    },
    props: {
        seller: {
            type: Object
        }
    },
    created: function(){
        this.classMap = ["icon-image-decrease", "icon-image-discount", "icon-image-special", "icon-image-invoice", "icon-image-guarantee"];
    },
    methods: {
        showDetail: function(){
            this.detailShow = true;
        }
    }
}
</script>

<style>
 .headers {
    position: relative;
    color: #fff;
    /* 通过设置此浮层，才能模糊显示底部的背景图片 */
    background: rgba(7, 17, 27, 0.5);
    overflow: hidden;
 }

 .content-wrapper{
     position: relative;
     padding: 24px 12px 18px 24px;
     font-size: 0
 }

 .content-wrapper .avatar{
     display: inline-block; 
     vertical-align: top;
 }

  .content-wrapper .avatar img{
     border-radius: 2px;
 }

 .content-wrapper .content{
     display: inline-block;
     margin-left: 16px;
 }

.content-wrapper .content .title{
    margin: 2px 0 8px 0
}

.content-wrapper .content .title .brand{
    display: inline-block;
    width: 30px;
    height: 18px;
    background-image: url('../../assets/img/brand@3x.png');
    background-size: 30px 18px;
    background-repeat: no-repeat;
}

.content-wrapper .content .title .name{
    margin-left: 6px;
    font-size: 16px;
    line-height: 18px;
    font-weight: bold;
}

.content-wrapper .content .description{
    margin-bottom: 10px;
    line-height: 12px;
    font-size: 12px;
}

.content-wrapper .content .support{
    margin-bottom: 10px;
    line-height: 12px;
    font-size: 12px;
}

.content-wrapper .support-count{
    position: absolute;
    right: 12px;
    bottom: 14px;
    padding: 0 8px;
    height: 24px;
    line-height: 20px;
    border-radius: 14px;
    background: rgba(0,0,0,0.2);
    text-align: center;
}

.content-wrapper .support-count .count{
    vertical-align: top;
    font-size: 10px;
}

#support-icon{
    display: inline-block;
    width: 12px;
    height: 12px;
    margin-right: 4px;
    background-size: 12px 12px;
    background-repeat: no-repeat;
    vertical-align: top;

}

.icon-image-decrease {
    background-image: url('../../assets/img/decrease_1@2x.png');
}

.icon-image-discount {
    background-image: url('../../assets/img/discount_1@2x.png');
}

.icon-image-special {
    background-image: url('../../assets/img/special_1@2x.png');
}

.icon-image-guarantee {
    background-image: url('../../assets/img/guarantee_1@2x.png');
}

.icon-image-invoice {
    background-image: url('../../assets/img/invoice_1@2x.png');
}

/* 公告部分 */
.bulletin-wrapper {
    position: relative;
    height: 28px;
    line-height: 28px;
    padding: 0 22px 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    background: rgba(7, 17, 27, 0.2)
}

.bulletin-wrapper .bulletin-title {
    margin-top: 7px;
    display: inline-block;
    vertical-align: top;
    width: 22px;
    height: 12px;
    background-image: url('../../assets/img/bulletin@2x.png');
    background-size: 22px 12px;
    background-repeat: no-repeat;
}

.bulletin-wrapper .bulletin-text {
    vertical-align: top;
    font-size: 10px;
    margin: 0 4px;
}

.bulletin-wrapper .icon-bulletin{
    position: absolute;
    font-size: 10px;
    right: 12px;
    top: 2px;
}

/* 背景图 */
.headers .header-background{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
   
}

/* 浮层 sticky footer 设计技巧 保证X不遮挡文字 */
.headers .detail{
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: rgba(7, 17, 27, 0.8);
    top: 0;
    left: 0;
}

.detail .detail-wrapper {
    min-height: 100%;   
}

.detail .detail-wrapper .detail-main {
    margin-top: 64px;
    padding-bottom: 64px;  
    background: red;
}

.detail .detail-close {
    width: 32px;
    height: 32px;
    position: relative;
    margin: -64px auto 0 auto;
    clear: both;
    font-size: 32px;
}

</style>