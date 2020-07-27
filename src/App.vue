<template>
  <div id="app">
    <div class="container">
        <div class="container-main">
          <router-view></router-view>
        </div>
        <footerbar></footerbar>
    </div>
  </div>
</template>

<script>
import footerbar from './components/footerbar/footerbar'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    footerbar
  }
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  height 100%
  .container
    height 100%
    display flex
    flex-direction column
    .container-main
      flex 1
      width 100%
      overflow scroll
</style>
