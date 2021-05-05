import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";
import firebase from "firebase/app";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCaZp3EP0jCJBBMDhmCxjcuZY2zxZUVFN4",
    authDomain: "vueapp-ce2e8.firebaseapp.com",
    projectId: "vueapp-ce2e8",
    storageBucket: "vueapp-ce2e8.appspot.com",
    messagingSenderId: "1097224082613",
    appId: "1:1097224082613:web:e2e2d4aedba2dccf89dafc"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
let app;
firebase.auth().onAuthStateChanged(user => {

    if (user) {
        store.state.user = true;
        store.state.userName = user.displayName;
    }
    else {
        store.state.user = false
    }
    if (!app) {
        app = createApp(App);
        app.config.globalProperties.$axios = axios;
        app.use(store).use(router).mount('#app')
    }
})
