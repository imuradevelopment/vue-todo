import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

Vue.config.productionTip = true

  // WebアプリのFirebase設定
  var firebaseConfig = {
    apiKey: "AIzaSyCQMB_1sivPmm6xFKST3ABSGVLXYak0-x4",
    authDomain: "vuetodo-75755.firebaseapp.com",
    projectId: "vuetodo-75755",
    storageBucket: "vuetodo-75755.appspot.com",
    messagingSenderId: "58349506691",
    appId: "1:58349506691:web:04ae8fcf472b7bed94cbb6",
    measurementId: "G-H86WVPBS1G"
  };
  // Firebaseを初期化する
  firebase.initializeApp(firebaseConfig);


new Vue({
  render: h => h(App),
}).$mount('#app')
