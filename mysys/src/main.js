import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false

import {Input,Button,Select,Dialog,
  Option} from 'element-ui'
Vue.use(Input).use(Button).use(Select).use(Option).use(Dialog)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')