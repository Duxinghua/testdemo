import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  template: '<div>{{text}}</div>',
  data: {
    text: 0
  },
  beforeCreate () {
    console.log('beforeCreate')
  },
  created () {
    console.log('created')
  },
  beforeMount () {
    console.log('beforemount')
  },
  mounted () {
    console.log('mounted')
  },
  beforeUpdate () {
    console.log('beforeUpdate')
  },
  updated () {
    console.log('updated')
  },
  activated () {
    console.log('activated')
  },
  deactivated () {
    console.log('deactivated')
  },
  beforeDestroy () {
    console.log('beforeDestroy')
  },
  destroyed () {
    console.log('destroyed')
  },
  // eslint-disable-next-line vue/require-render-return
  render (h) {
    throw new TypeError('render error')
    // console.log('render function init')
    // return h('div', {}, this.text)
  },
  renderError (h, err) {
    return h('div', {}, err.stack)
  },
  errorCaptured (h, err) {
    console.log(err, '11')
    return h('div', {}, err.stack)
  }

})
app.$mount('#root')

// setInterval(() => {
//   app.text += 1
// }, 1000)
setTimeout(() => {
  app.$destroy()
}, 5000)
