import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyAGXJg0NC8Pe1Nl4Wz0qrmqbaSUSK2h5gk",
  authDomain: "first-node-project-209114.firebaseapp.com",
  databaseURL: "https://first-node-project-209114.firebaseio.com",
  projectId: "first-node-project-209114",
  storageBucket: "first-node-project-209114.appspot.com",
  messagingSenderId: "623464499019",
  appId: "1:623464499019:web:45326991305b45185bcace"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
