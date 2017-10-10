// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueFire from 'vuefire'
import firebase from 'firebase'
import push from './push'

Vue.use(VueFire)

let config = {
  apiKey: "AIzaSyAmBHKfSPtfPw3Ylr3LBZ0tA3XuvzHbkuQ",
  authDomain: "vue-pwa-a1432.firebaseapp.com",
  databaseURL: "https://vue-pwa-a1432.firebaseio.com",
  projectId: "vue-pwa-a1432",
  storageBucket: "",
  messagingSenderId: "5474289554"
};

firebase.initializeApp(config);

push()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
