import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './axios/api'
import './axios';
import './axios/fetch'
import f from './filter/index';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'swiper/dist/css/swiper.css';
import BaiduMap from 'vue-baidu-map';

Vue.use(ElementUI);
Vue.use(BaiduMap,{
  ak:'LhlQeGjemAWOfHaleYKuFjUe2W2y8CVv'
});

Vue.config.productionTip = false;

let filter: any = f;
//注册通用的过滤器
for (var filteritem in filter) {
  Vue.filter(filteritem, filter[filteritem])
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  data: {
    app: new Vue()
  },
  render: h => h(App)
}).$mount("#app")
