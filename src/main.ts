import Vue from 'vue'
import App from './App.vue'
import router from './router';
import Element from 'element-ui';
import i18n from './lang'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element);

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
