<!--  -->
<template>
    <div class="container-home">
        <!-- 主页头部 -->
        <div class="headerbar">
          <cube-input
          placeholder= "请输入商家或商品名称"
          class="header_input">
            <i slot="prepend" class="cubeic-search"></i>
          </cube-input>
        </div>
        <!-- 分类导航 -->
        <navigation :sellertype="sellertype"></navigation>
        <!-- 附件商家 -->
        <div class="title">
            ---附近商家---
        </div>
        <sellerlist :sellers="indexsellers"></sellerlist>
    </div>
</template>

<script>
import navigation from '../Navigation/navigation'
import sellerlist from '../sellerlist/sellerlist'
const ErrOk = 0

export default {
  data () {
    return {
      sellertype: '',
      indexsellers: ''
    }
  },
  created () {
    this.getsellertype()
    this.getsellers()
  },
  methods: {
    getsellertype () {
      this.$axios.get('/api/sellertype', {
        params: ''
      }).then((res) => {
        if (res.data.errno === ErrOk) {
          this.sellertype = res.data.data
        }
      }).catch((e) => {})
    },
    getsellers () {
      this.$axios.get('/api/sellers', {
        params: ''
      }).then((res) => {
        if (res.data.errno === ErrOk) {
          this.indexsellers = res.data.data[0]
        }
      }).catch((e) => {})
    }
  },
  components: {
    navigation,
    sellerlist
  }
}
</script>

<style lang="stylus" scoped>
.container-home
    padding-top 50px
    .headerbar
      height 50px
      padding 0 3%
      background-color #1C1B20
      display flex
      align-items center
      position fixed
      left 0
      top 0
      width 94%
      z-index 30
      .header_input
        flex 1
        border-radius 100px
        overflow hidden
        height 30px
        padding-left 10px
        input
          font-size 14px
          padding-right 30px
    .title
        color #333
        font-size 17px
        margin 20px 0
</style>
