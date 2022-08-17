import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.min.css';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/main.css'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

new Vue({
  store,
  router,
  vuetify: new Vuetify(),
  render: (h) => h(App)
}).$mount('#app')
