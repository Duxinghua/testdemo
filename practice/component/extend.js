import Vue from 'vue'

// const data = {
//   text: 0
// }
const components = {
  props: {
    active: {
      type: Boolean
    },
    propOne: {
      type: String,
      required: true
    }
  },
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

const CompVue = Vue.extend(components)

new CompVue({
  el: '#root',
  propsData: {
    propOne: 'xxx'
  },
  data: {
    text: 123
  },
  mounted () {
    console.log('instantent ')
  }
})
