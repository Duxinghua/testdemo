import Vue from 'vue'
const ChilcComponent = {
  template: '<div>chilc: {{data.value}} </div>',
  inject: ['yeye', 'data'],
  mounted () {
    console.log(this.$parent.$options.name)
    // console.log(this.yeye, 'yeye', this.data)
  }
}
const component = {
  name: 'comp',
  components: {
    ChilcComponent
  },
  // template: `
  //   <div :style="style">
  //   <div class="header">
  //   <slot name="header"></slot>
  //   </div>
  //   <div class="body">
  //   <slot name="body"></slot>
  //   </div>
  //   </div>
  // `,
  template: `
    <div :style="style">
    <slot value="456" aaa="111"></slot>
    <ChilcComponent></ChilcComponent>
    </div>
  `,
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      }
    }
  }
}

new Vue({
  provide () {
    const data = {}
    Object.defineProperty(data, 'value', {
      get: () => this.value,
      enumerable: true
    })
    return {
      yeye: this,
      data
    }
  },
  components: {
    CompOne: component
  },
  el: '#root',
  data () {
    return {
      value: '123'
    }
  },
  template: `
  <div>
    <comp-one ref="comps">
    <span slot-scope="props" ref="span">{{props.value}} {{props.aaa}}</span>
    </comp-one>
    <input type="text" v-model="value" />
  </div>
  `,
  mounted () {
    console.log(this.$refs.comps.style, this.$refs.span)
  }
})
