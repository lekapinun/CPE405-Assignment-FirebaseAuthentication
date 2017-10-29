// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import { firebaseApp, db } from '@/firebaseConfig'
import VueRouter from 'vue-router';

Vue.config.productionTip = false
Vue.use(VueRouter);

router.beforeEach( (to, from, next) => {
  var currentUser = firebase.auth().currentUser;

  var requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser)
    next( { name: 'Login'});
  else if (!requiresAuth && currentUser)
    next( {name: 'Hello'});
  else
    next();
})

let app;

// firebase.initializeApp(config);
firebase.auth().onAuthStateChanged(
  user => {
    if (!app) {
      app = new Vue({
        el: '#app',
        router,
        template: '<App/>',
        components: { App }
      })
    }
  }
)