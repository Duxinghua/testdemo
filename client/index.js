import Vue from 'vue'
import Vuex from 'vuex'
import App from './app.vue'
import VueRouter from 'vue-router'
import createRouter from './config/router'
import createStore from './store/store'

import './assets/styles/global.styl'

Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()
store.registerModule('c', {
  state: {
    text: 33
  }
})

store.unregisterModule('c')

store.watch((state) => state.count + 1, (newCount) => {
  console.log('newCount:', newCount)
})

// store.subscribe((mutation, state) => {
//   console.log(mutation.type)
//   console.log(mutation.payload)
// })

store.subscribeAction((action, state) => {
  console.log('subscribeAction')
  console.log(action.type)
  console.log(action.payload)
})

// router.beforeEach((to, from, next) => {
//   // 用户验证
//   // if (to.fullPath === '/app') {
//   //   console.log('before each')
//   //   next('/login')
//   // } else {
//   //   next()
//   // }
//   console.log('before each')
//   next()
// })

router.beforeResolve((to, from, next) => {
  console.log('before resolve')
  next()
})

router.afterEach((to, from) => {
  console.log('afer each')
})

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#root')
