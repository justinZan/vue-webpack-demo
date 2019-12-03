import Vue from 'vue'
import App from './App.vue'
import router from './router';
import Element from 'element-ui';
import i18n from './lang'
import store from './store';
import 'element-ui/lib/theme-chalk/index.css'

import Config from './utils/appconfig'

Vue.config.productionTip = false // 阻止启动生产消息

Config(store).then(() => {

  Vue.use(Element);
  new Vue({
    router,
    i18n,
    store,
    render: h => h(App),
  }).$mount('#app')
});