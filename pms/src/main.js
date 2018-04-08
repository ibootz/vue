// import vue
import Vue from 'vue';
import axios from 'axios';
import moment from 'moment';
import lodash from 'lodash';
// import element-ui
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'simple-line-icons/css/simple-line-icons.css';
// import vue2-animate
import 'vue2-animate/dist/vue2-animate.css';
import 'animate.css';
// import layout
import './assets/global/css/components-rounded.css';
import './assets/global/css/plugins.css';
import './assets/layouts/layout/css/layout.css';
import './assets/layouts/layout/css/themes/light.css';
import './assets/layouts/layout/css/custom.css';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(Element);

Vue.prototype.$axios = axios;
Vue.prototype.$moment = moment;
Vue.prototype.$lodash = lodash;

// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
