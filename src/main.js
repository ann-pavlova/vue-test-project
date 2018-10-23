import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';
import Vuetify from 'vuetify';
import BuyModalComponents from '@/components/Shared/BuyModal';
import * as fb from 'firebase';
import 'vuetify/dist/vuetify.min.css';

Vue.use(Vuetify);
Vue.component('app-buy-modal', BuyModalComponents);
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
            storageBucket: 'ads-vue.appspot.com',
            messagingSenderId: '674485206957'
        });

        fb.auth().onAuthStateChanged(user => {
            if (user) {
                this.$store.dispatch('autoLoginUser', user);
            }
        });
        this.$store.dispatch('fetchAds');
    }
});
