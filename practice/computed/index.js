import Vue from 'vue'
new Vue({
  el: '#root',
  template: `<div>
    <span>getName: {{getName()}}</span><br/>
    <span>ComputedName: {{name}}</span>
    <p><input type='text' v-model='number'></p>
    <p>fullname:{{fullName}}</p>
      <p>{{number}}</p>
    <p>firstName:<input type='text' v-model='firstName' /></p>
    <p>lastName:<input type='text' v-model='lastName' /></p>
    <p>computed set get name:<input type='text' v-model='name'/></p>
    <p>obj.a: <input type='text' v-model='obj.a'/></p>
    </div>`,
  data: {
    firstName: 'one',
    lastName: 'tow',
    number: 0,
    fullName: '',
    obj: {
      a: 123
    }
  },
  computed: { // 拿到的数据并不是要显示的数据，而是要经过计算得来的,不建议直接用set get方法
    name: {
      get () {
        console.log('computed name')
        return this.firstName + ' ' + this.lastName
      },
      set (name) {
        const names = name.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  },
  methods: {
    getName () {
      console.log('getName')
      return this.firstName + ' ' + this.lastName
    }
  },
  watch: { // 监听到值的变化给后台发送请求 computed watch去修改值不要去设置（不要改监听的值 ）
    firstName: {
      handler (n, o) {
        this.fullName = n + ' ' + this.lastName
      },
      immediate: true,
      deep: true
    },
    'obj.a': {
      handler (n, o) {
        console.log('obj.a', n)
      },
      immediate: true
      // deep: true
    }
  }
})
