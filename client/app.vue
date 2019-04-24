<template>
  <div id="app">
    <div id="cover"></div>
    <div id="loading" v-show="loading">
      <loading />
    </div>
    <Header ></Header>
    <!-- <todo></todo> -->
    <!-- <p>{{fullName}} {{count}}</p> -->
        <!-- <p>{{textA}}</p> -->
    <router-link to="/app">app</router-link>
    <router-link to="/app">app</router-link>
    <router-link to="/login">login</router-link>
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
    <button @click="notify">notify</button>
    <!-- <notification content="test notify" /> -->
    <Footer></Footer>
      <!-- <router-view name="a" /> -->

  </div>
</template>

<script>
import {
  mapState
  // mapGetters,
  // mapActions,
  // mapMutations
} from 'vuex'
import Header from './layout/header.vue'
import Footer from './layout/footer.jsx'
import Todo from './views/todo/todo.vue'
import Loading from './components/loading/loading.vue'

export default {
  metaInfo: {
    title: 'jokcy\'s todo app'
  },
  components: {
    Header,
    Footer,
    Todo,
    Loading
  },
  mounted () {
    console.log(this.$route)
    console.log(this.$store)
    // console.log('sss', this.textPlus)
    // this.$store.state.count = 3
    // let i = 1
    // this.$store.dispatch('updateCountAsync',{textPlus
    //   num:5,
    //   time:2000
    // })
    // this.updateCountAsync({
    //   num: 5,
    //   time: 2000
    // })
    // setInterval(() => {
    //   this.$store.commit('updateCount',{
    //     num: i++,
    //     num2: 2
    //     })
    // }, 1000);
    // setInterval(() => {
    //   this.updateCount({
    //     num: i++,
    //     num2: 2
    //   })
    // },1000)
    // this['a/updateText']('123')
    // console.log('a/add', this['a/add']())
    // // console.log('ssss', this.textPlus)
    // console.log('b', this['b/testAction']())
    // console.log('textC',this.textC)
  },
  computed: {
    ...mapState(['loading'])
    // textA () {
    //   return this.$store.state.b.text
    // },
    // ...mapState(['count']),
    // ...mapState({
    //   count: (state) => state.count,
    //   textA: state => state.a.text
    //   // textC: state => state.c.text
    // }),
    // count () {
    //   return this.$store.state.count
    // },
    // fullName () {
    //   return this.$store.getters.fullName
    // }
    // ...mapGetters(['fullName','a/textPlus'])
    // ...mapGetters({
    //   fullName: 'fullName',
    //   textPlus: 'a/textPlus'
    // })
  },
  methods: {
    notify () {
      this.$notify({
        content: 'this content',
        btn: 'close'
      })
    }
    // ...mapActions(['updateCountAsync', 'a/add', 'b/testAction']),
    // ...mapMutations(['updateCount', 'a/updateText'])
  }
}
</script>

<style lang="stylus" scoped>
#app{
  position absolute
  left 0
  right 0
  top 0
  bottom 0
}
#cover{
  position absolute
  left 0
  top 0
  right 0
  bottom 0
  background-color #999
  opacity .9
  z-index -1
}
#loading{
  position fixed
  top 0
  right 0
  bottom 0
  left 0
  background-color rgba(255,255,255,.3)
  z-index 99
  display flex
  align-items center
  justify-content center
}
</style>
