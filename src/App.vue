<template>
  <div id="app">
    <v-header :seller="seller"></v-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/rating">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <div class="content">
      I am content!
    </div>
    <div>
       <router-view></router-view>
    </div>
   
  </div>
</template>

<script>
import header from "./components/header/Header";

export default {
  name: 'app',
  data () {
    return {
      seller: {}
    }
  },
  components: {
    'v-header': header
  },
  created: function(){
    const vm = this;
    this.$http.get('data.json').then(function(response){
          vm.seller = response.data.seller;
    });
  }
}
</script>

<style>
  /* 菜单样式 */
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid rgba(7,17,27,0.1);
  }
  .tab .tab-item {
    flex: 1;
    text-align: center; 
  }
  /* 链接样式 */
  .tab-item a {
    display: block;
    text-decoration: none;
    font-size: 14px;
    color: rgb(77, 85, 93);
  }
  a.router-link-active {
    color: rgb(240, 20, 20);
  }
  
</style>
