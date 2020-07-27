<!--  -->
<template>
    <div>
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
    </div>
</template>

<script>
import navigation from '../Navigation/navigation'
const ErrOk = 0

export default {
  data () {
    return {
      sellertype: ''
    }
  },
  created () {
    console.log(this)
    this.getsellertype()
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
    }
  },
  components: {
    navigation
  }
}
</script>

<style lang="stylus" scoped>
    .headerbar
      height 50px
      padding 0 10px
      background-color #1C1B20
      display flex
      align-items center
      .header_input
        flex 1
        border-radius 100px
        overflow hidden
        height 30px
        padding-left 10px
        input
          font-size 14px
          padding-right 30px
</style>
