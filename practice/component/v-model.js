import Vue from 'vue'

const component = {
  model: {
    prop: 'value1',
    event: 'change'
  },
  props: ['value', 'value1'],
  template: `
    <div>
      <input type='text' @input='handleInput' :value="value"/>
    </div>
  `,
  methods: {
    handleInput (e) {
      this.$emit('change', e.target.value)
    }
  }
}
//       <comp-one :value="value" @input="value = arguments[0]"></comp-one>

new Vue({
  components: {
    CompOne: component
  },
  el: '#root',
  template: `
    <div>
      <comp-one :value="value" v-model="value"></comp-one>
    </div>
  `,
  data () {
    return {
      value: '123'
    }
  }
})
