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
  props: ['prop1'],
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
  // template: `
  //   <div :style="style">
  //   <slot></slot>
  //   </div>
  // `,
  render (createElement) {
    return createElement('div', {
      style: this.style
      // on: {
      //   click: () => {
      //     this.$emit('click')
      //   }
      // }
    }, [this.$slots.header, this.prop1])
  },
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
  // template: `
  // <div>
  //   <comp-one ref="comps">
  //   <span  ref="span">{{value}}</span>
  //   </comp-one>
  // </div>
  // `,
  mounted () {
    console.log(this.$refs.comps.style, this.$refs.span)
  },
  render (createElement) {
    return createElement('comp-one', {
      ref: 'comps',
      props: {
        prop1: this.value
      },
      // on: {
      //   click: this.handClick
      // },
      nativeOn: {
        click: this.handClick
      }
    }, [createElement('span', {
      ref: 'span',
      slot: 'header',
      domProps: {
        innerHTML: '<span>345</span>'
      },
      attrs: {
        id: 'test'
      }
    }, this.value)])
  },
  methods: {
    handClick () {
      console.log('handClick')
    }
  }
})
