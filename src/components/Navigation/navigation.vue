<!--  -->
<template>
<div class="navigation">
    <div class="nav" v-for="item in sellertype" :key="item.id">
        <div>
            <img :src="item.link">
        </div>
        <span>{{ item.type }}</span>
    </div>
</div>
</template>

<script>
export default {
  props: ['sellertype']
}
</script>

<style lang="stylus" scoped>
.navigation
    display flex
    flex-wrap wrap
    .nav
      margin-top 15px
      width 20%
      text-align center
      img
        width 44px
        height 44px
      span
        font-size 11px
        color #333
</style>
