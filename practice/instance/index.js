import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: '<div ref="divs">this {{text}} {{obj}} is content</div>',
  data: {
    text: 0,
    obj: {}
  }
  // watch: {
  //   text: (n, o) => {
  //     console.log(n, o)
  //   }
  // }
})
app.$mount('#root')
// var i = 0
setInterval(() => {
  // app.text += 1
  // app.text += 1
  // app.text += 1
  // app.text += 1
  // app.text += 1
  // app.text += 1
  // app.$options.data.text += 1
  // app.$data.text += 1
  // 没有声明的值就是非响应式的
  // i++
  // app.obj.a = i
  // app.$forceUpdate()
  // app.$set(app.obj, 'a', i)
}, 1000)

// console.log(app.$data)
// console.log(app.$props)
// console.log(app.$el)
// console.log(app.$options)

// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// }

// console.log(app.$children)

// console.log(app.$slots)
// console.log(app.$scopedSlots)
// console.log(app.$refs)

// console.log(app.$isServer)

// const unWitch = app.$watch('text', (n, o) => {
//   console.log(n, o)
// })

// setTimeout(() => {
//   unWitch()
// }, 4000)

// app.$on('tests', (a, b) => {
//   console.log(`test emit ${a} ${b}`)
// })

// app.$emit('tests', 1, 2)

// app.$once('abc', (a, b, c) => {
//   console.log(`test once ${a} ${b} ${c}`)
// })
// setInterval(() => {
//   app.$emit('abc', 1, 2, 3)
// }, 1000)

