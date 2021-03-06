
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');
import moment from 'moment';

import VueRouter from 'vue-router'
import { Form, HasError, AlertError } from 'vform';

import Gate from "./Gate";
Vue.prototype.$gate = new Gate(window.user);

import swal from 'sweetalert2'
window.swal = swal;

const toast = swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 5000
})
window.toast = toast;

window.Form = Form;
Vue.component(HasError.name, HasError)
Vue.component(AlertError.name, AlertError)

Vue.component('pagination', require('laravel-vue-pagination'));

Vue.use(VueRouter)
import VueProgressBar from 'vue-progressbar'
Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '5px'
  })

let routes = [
    { path: '/dashboard', component: require('./components/Dashboard.vue').default },
    { path: '/profile', component: require('./components/Profile.vue').default },
    { path: '/users', component: require('./components/Users.vue').default },
    { path: '/jabatan', component: require('./components/Jabatan.vue').default },
    { path: '/lokasi', component: require('./components/Location.vue').default },
    { path: '/leader', component: require('./components/Leader.vue').default },
    { path: '/status', component: require('./components/Status.vue').default },
    { path: '/absensi', component: require('./components/Absent.vue').default },
    { path: '/dev', component: require('./components/Developer.vue').default },
    { path: '/sellorder', component: require('./components/Sellorder.vue').default },
    { path: '/outlets', component: require('./components/Outlets.vue').default },
    { path: '/disota', component: require('./components/Disota.vue').default },
    { path: '/jamker', component: require('./components/Jamker.vue').default },
    { path: '/ijin', component: require('./components/Ijin.vue').default },
    { path: '/canvaser', component: require('./components/Canvaser.vue').default },
    { path: '/filtersell', component: require('./components/Filtersell.vue').default },
  ]

  const router = new VueRouter({
    mode: 'history',
    routes // short for `routes: routes`
  })


Vue.filter('upText',function( text){
    return text.toUpperCase();
});

Vue.filter('acc',function( text){
  switch(text){
  case "0":
    return "Menunggu Persetujuan";
  case "1":
    return "Diterima";
  case "2":
    return "Ditolak";
  }
});

Vue.filter('tgl_indo',function(created){
    return moment(created).format('LL');
})

Vue.filter('tanggal',function(created){
  return moment(created).format('LLLL');
})

Vue.filter('jam',function(created){
  return moment(created).format('LT');
})



window.Fire = new Vue();

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component(
  'passport-clients',
  require('./components/passport/Clients.vue').default
);

Vue.component(
  'passport-authorized-clients',
  require('./components/passport/AuthorizedClients.vue').default
);

Vue.component(
  'passport-personal-access-tokens',
  require('./components/passport/PersonalAccessTokens.vue').default
);

Vue.component(
  'not-found',
  require('./components/notFound.vue').default
);

Vue.component(
  'dashboard',
  require('./components/Absent.vue').default
);

const app = new Vue({
    el: '#app',
    router,
    data : {
      search : ''
    },
    methods : {
      searchit: _.debounce(() => {
        Fire.$emit("searching");
      },1000)
    }
});
