import Vue from 'vue'

// const data = {
//   text: 0
// }
const components = {
  props: {
    active: Boolean,
    propOne: String,
    onChange: Function
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
  // this.propOne = 'Innner Content'
  },
  methods: {
    handleChanges () {
      console.log(11)
      this.onChange()
    }
  }
}
// Vue.component('Co', components)

new Vue({
  el: '#root',
  methods: {
    handleChange () {
      this.prop1 += 1
    }
  },
  data: {
    prop1: 'text1'
  },
  components: {
    Co: components
  },
  template: `
  <div>
  <p>this i p</p>
  <Co :on-change="handleChange" :active="true" :prop-one="prop1"></Co>
  <Co :active="true" propOne="133"></Co>
  </div>
  `
})
