import Vue from 'vue'
// 如果没有声明，后期是不会去更新
new Vue({
  el: '#root',
  template: `
    <div :id='aaa' :style="[style,stylediy]" :class="{active: isActive}" @click="handleClick">
    {{isActive ? 'active' : 'not active'}}<br/>
    {{arr.join(' ')}}<br/>
    <p v-html="html"></p>
    <br>
    {{getJoinedArr(arr)}}
    </div>
  `,
  data: {
    isActive: false,
    arr: [1, 2, 3],
    html: '<span>123</span>',
    aaa: 'main',
    style: {
      color: 'red'
    },
    stylediy: {
      color: 'yellow'
    }
  },
  methods: {
    handleClick () {
      console.log('handeclick')
    },
    getJoinedArr (arr) {
      return arr.join(' ')
    }
  }
})
