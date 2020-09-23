import 'whatwg-fetch';
import 'custom-event-polyfill';
import 'core-js/stable/promise';
import 'core-js/stable/symbol';
import 'core-js/stable/string/starts-with';
import 'core-js/web/url';
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { registerMicroApps, start } from 'qiankun';
localStorage.setItem('test','2222222')
Vue.config.productionTip = false
class Event {
  constructor() {
    this.callbacks = []
  }
  on (cb) {
    this.callbacks.push(cb)
  }
  emit (data) {
    this.callbacks.forEach(fn => fn(data))
  }
}
let e = new Event()
window.$bus=e

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

registerMicroApps([
  { 
    name: 'app-vue-hash', 
    entry: 'http://localhost:1111', 
    container: '#appContainer', 
    activeRule: '/app-vue-hash', 
    props: { data : { store, router } }
  },
  { 
    name: 'app-jquery-index', 
    entry: 'http://localhost:3333', 
    container: '#appContainer', 
    activeRule: '/app-jquery-index', 
    props: { data : { store, router },top:window}
  },
  { 
    name: 'app-jquery-detail', 
    entry: 'http://localhost:3333/detail.html', 
    container: '#appContainer', 
    activeRule: '/app-jquery-detail', 
    props: { data : { store, router },top:window}
  },
  { 
    name: 'app-vue-history',
    entry: 'http://localhost:2222', 
    container: '#appContainer', 
    activeRule: '/app-vue-history',
    props: { data :  { store, router } }
  },
]);

start();
