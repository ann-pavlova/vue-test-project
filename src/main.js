import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import Vuetify from 'vuetify';
import * as fb from 'firebase';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App),
    created() {
        fb.initializeApp({
            apiKey: 'AIzaSyBxI4050swAgxqrqJbMToDWO68OrZwKLe4',
            authDomain: 'ads-vue.firebaseapp.com',
            databaseURL: 'https://ads-vue.firebaseio.com',
            projectId: 'ads-vue',
            storageBucket: '',
            messagingSenderId: '674485206957'
        });
    }
});
