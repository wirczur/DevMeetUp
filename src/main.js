import Vue from 'vue';
import ElementUI from 'element-ui';
import VeeValidate from 'vee-validate';
import App from './App';
import router from './router';
import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import '@fortawesome/fontawesome-free/css/all.css';


Vue.use(VeeValidate, {
  locale: 'en',
});
Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
