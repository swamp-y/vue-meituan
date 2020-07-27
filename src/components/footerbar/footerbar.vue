<!--  -->
<template>
  <cube-tab-bar
    class="footerbar"
    v-model="selectedLabelDefault"
    value
    :data="tabs"
    @click="clickHandler"
    @change="changeHandler">
  </cube-tab-bar>
</template>

<script>
export default {
  name: 'footerbar',
  data () {
    return {
      selectedLabelDefault: '主页',
      tabs: [{
        label: '主页',
        icon: 'cubeic-home',
        path: '/home'
      }, {
        label: '订单',
        icon: 'cubeic-mall'
      }, {
        label: '我的',
        icon: 'cubeic-person'
      }]
    }
  },
  methods: {
    clickHandler (label) {
      // if you clicked home tab, then print 'Home'
      if (label === '主页') {
        this.$router.push('/home')
      } else if (label === '订单') {
        this.$router.push('/order')
      } else if (label === '我的') {
        this.$router.push('/my')
      }
    },
    changeHandler (label) {
      // if you clicked different tab, this methods can be emitted
    }
  }
}
</script>

<style lang="stylus" >
.footerbar
    z-index 10
    width 100%
    background-color #fafafa
    .cube-tab
        color #ccc
        i
            font-size 28px
        div
            font-size 12px
            line-height 14px
            color #333
    .cube-tab_active
        color #ffbd27
</style>
