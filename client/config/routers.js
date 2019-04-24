// 测试专用
// import Login from '../views/login/login.vue'
// import Test from '../views/test/test.vue'
// import Todo from '../views/todo/todo.vue'
export default [
  {
    path: '/',
    redirect: '/app'
  },
  {
    path: '/app',
    props: true,
    component: () => import(/* webpackChunkName: "todo-view" */'../views/todo/todo.vue'),
    // components: {
    //   default: Todo,
    //   a: Login
    // },
    // 测试专用
    // component: Todo,
    name: 'app',
    meta: {
      title: 'this is app',
      description: 'asdasd '
    }
    // beforeEnter (to, from, next) {
    //   console.log('app router before')
    //   next()
    // }
    // children: [
    //   {
    //     path: 'test',
    //     component: Test
    //   }
    // ]
  },
  {
    path: '/login',
    component: () => import(/* webpackChunkName: "login-view" */'../views/login/login.vue')
    // components: {
    //   default: Login,
    //   a: Todo
    // }
    // 测试专用
    // component: Login
  }
]
