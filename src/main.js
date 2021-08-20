import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Axios from 'axios'

import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../src/assets/css/style.css';
import '../src/assets/plugins/themefisher-font/style.css';
import '../src/assets/plugins/animate/animate.css';
import '../src/assets/plugins/slick/slick.css';
import '../src/assets/plugins/slick/slick-theme.css';

//script
// import'../src/assets/plugins/google-map/gmap.js';
// import'https://maps.googleapis.com/maps/api/js?key=AIzaSyCC72vZw-6tGqFyRhhg5CkF2fqfILn2Tsw';
// import'../src/assets/plugins/slick/slick-animation.min.js';
// import'../src/assets/plugins/slick/slick.min.js';
// import'../src/assets/plugins/syo-timer/build/jquery.syotimer.min.js';
// import'../src/assets/plugins/ekko-lightbox/dist/ekko-lightbox.min.js';
// import'../src/assets/plugins/instafeed/instafeed.min.js';
// import'../src/assets/plugins/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js';
// import'../src/assets/plugins/bootstrap/js/bootstrap.min.js';
// import'../src/assets/plugins/jquery/dist/jquery.min.js';

Vue.use(BootstrapVue);

Vue.config.productionTip = false

//Vue.prototype.$api = 'https://jsonplaceholder.typicode.com/';
//Vue.prototype.$api = 'http://localhost:5000/api/';
Vue.prototype.$api = 'https://ne-blog-server.herokuapp.com/api/';
Vue.prototype.$axios = Axios;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
