import Vue from 'vue'

// const data = {
//   text: 0
// }
const coms = {
  props: ['active', 'propOne'],
  template: `<div>
  <p>this is component {{text}}</p>
  <p v-show="active">show is active props</p>
  <p @click="handleChanges">propone: {{propOne}}</p>
  <input type="text" v-model="text" />
  </div>`,
  data () {
    return {
      text: 0
    }
  },
  mounted () {
    console.log('comp mounted')
  // this.propOne = 'Innner Content'
  },
  methods: {
    handleChanges () {
      // console.log(11)
      // this.onChange()
      this.$emit('onchange')
    }
  }
}
// Vue.component('Co', components)

// const CompVue = Vue.extend(components)

// new CompVue({
//   el: '#root',
//   propsData: {
//     propOne: 'xxx'
//   },
//   data: {
//     text: 123
//   },
//   mounted () {
//     console.log('instantent ')
//   }
// })
const parent = new Vue({
  name: 'parent'
})
const compon2 = {
  parent: parent,
  extends: coms,
  data () {
    return {
      text: 1
    }
  },
  mounted () {
    console.log(this.$parent)
    // this.$parent.text = '123456' 一般不通过$parent修改，用于查看
    console.log('compon2', this.$parent.$options.name)
  }
}
new Vue({
  parent: parent,
  name: 'Root',
  el: '#root',
  components: {
    compon2: compon2
  },
  data: {
    text: 2333
  },
  template: `
  <div>
  <p>M {{text}}</p>
  <compon2></compon2>
  </div>
  `,
  mounted () {
    console.log('new Vue', this.$parent.$options.name)
  }
})
