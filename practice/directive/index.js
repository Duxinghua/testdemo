import Vue from 'vue'
new Vue({
  el: '#root',
  template: `
    <div v-bind:id='active'>
      <div v-text="text" v-show="active"></div>
      <div v-if="active">2</div>
      <div v-else-if="text === 1">11</div>
      <div v-else>3</div>
      <div v-html="html"></div>
      <ul>
        <li v-for="(item,key) in arr" :key="item" >{{item}}</li>
      </ul>
      <ul v-pre>
        <li v-for="(val, index, key) in obj" :key="val">{{val}} {{index}} {{key}}</li>
      </ul>
      <input type="text" v-model.lazy="text" v-once/><br/>
      <input type="checkbox" v-model="active"/>
      <div>
      <input type="checkbox" :value="1" v-model="arr"/>
      <input type="checkbox" :value="2" v-model="arr"/>
      <input type="checkbox" :value="3" v-model="arr"/>
      </div>
      <div>
      <input type="radio" value="one" v-model="picked"/>
      <input type="radio" value="two" v-model="picked"/>
      </div>
    </div>
  `,
  data: {
    text: 0,
    active: true,
    html: '<p>1111</p>',
    arr: [1, 2, 3, 54],
    obj: {
      a: '123',
      b: '456',
      c: '789'
    },
    picked: ' '
  }
})
