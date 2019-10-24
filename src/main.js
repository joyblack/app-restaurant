import Vue from 'vue';
import VueRouter from 'vue-router';
import Axios from 'axios';
import App from './App.vue';
import routerConfig from './router.config';

Vue.use(VueRouter);

Vue.prototype.$http = Axios;

/**
 * 路由配置
 */
const router = new VueRouter(routerConfig);


new Vue({
  router,
  el: '#app',
  render: h => h(App)
});


