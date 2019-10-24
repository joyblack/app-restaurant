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

            <div class="support-count" v-if="seller.supports">
                <span class="count">{{seller.supports.length}}个 ></span>
                <i></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            classMap: []
        }
    },
    props: {
        seller: {
            type: Object
        }
    },
    created: function(){
        this.classMap = ["icon-image-decrease", "icon-image-discount", "icon-image-special", "icon-image-invoice", "icon-image-guarantee"];
    }
}
</script>

<style>
 .headers {
     color: #fff;
     background: #999;
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


</style>