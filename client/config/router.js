import Router from 'vue-router'

import routes from './routers'

// const router = new Router({
//   routes
// })

// export default router

export default () => {
  return new Router({
    routes,
    mode: 'history',
    // base: '/base/'
    linkActiveClass: 'active-link',
    linkExactActiveClass: 'exact-active-link',
    scrollBehavior (to, from, savePosition) {
      if (savePosition) {
        return savePosition
      } else {
        return {x: 0, y: 0}
      }
    },
    // parseQuery (query) {

    // },
    // stringifyQuery (obj) {

    // }
    fallback: true

  })
}
