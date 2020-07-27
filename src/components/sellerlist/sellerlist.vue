<!--   -->
<template>
    <div class='list-container'>
        <div class="list">
            <div class="seller" v-for="item in sellers" :key="item.title">
                <div class="left">
                    <img :src="item.img" alt="">
                </div>
                <div class="right">
                    <!-- 商家标题 -->
                    <div class="sellertitle">
                        <span>{{ item.title }}</span>
                    </div>
                    <!-- 商家介绍 -->
                    <div class="dec">
                        <div class="left">
                            <!-- 评分组件 -->
                            <cube-rate v-model="item.score" class="rate"
                            :disabled=true
                            :justify=true></cube-rate>
                            <span class="scroce">{{ item.score }}</span>
                            <span>月售{{ item.yueshou }}+</span>
                        </div>
                        <div class="right">
                            <span>{{ item.min }}分钟 {{ item.km }}km</span>
                        </div>
                    </div>
                    <!-- 商品及配送价格 -->
                    <div class="dec_price">
                        <span>起送￥{{ item.qisong }} 配送￥{{ item.peisong  }} 人均 ￥{{ item.renjun }}</span>
                    </div>
                    <!-- 减免及折扣信息 -->
                    <div class="adver">
                        <div>
                            <img src="https://p0.meituan.net/activityconfig/6087b33fd42d14fd94e899084aaef56d1720.png" alt="">
                            满19减18;满59减27;满99减39;满188减68</div>
                        <div>
                            <img src="https://p0.meituan.net/activityconfig/3da2d9c7a4ddf89e4e71cfdfff168c391088.png" alt="">
                            折扣商品5.66折起</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'sellerlist',
  data () {
    return {
      value: 3.6
    }
  },
  props: ['sellers']
}
</script>

<style lang="stylus" scoped>
    .list
        .seller
            padding 0 10px
            margin-top 10px
            margin-bottom 25px
            display flex
            >.left
                width 76px
                height 57px
                overflow hidden
                margin-right 8px
                border-radius 2px
                img
                    width 100%
            .right
                text-align left
                flex 1
                .sellertitle
                    span
                        font-size: 16px;
                        color: #333;
                        line-height: 1.4;
                        white-space: nowrap;
                        width: 80%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        font-weight: 600;
                .dec
                    display flex
                    margin-top 4px
                    justify-content space-between
                    .right
                        text-align right
                    .left
                        .rate
                            width 80px
                            vertical-align baseline
                        .scroce
                            margin-left 4px
                            margin-right 10px
                    span
                        font-size: 11px;
                        color: #333;
                        line-height: 1.4;
                .dec_price
                    margin-top 4px
                    font-size: 11px;
                    color: #333;
                    line-height: 1.4
                .adver
                    font-size: 11px;
                    color: #666;
                    line-height: 1.4
                    div
                        margin-top 8px
                    img
                        width 15px
                        height 15px
                        margin-right 5px
                        vertical-align top
</style>
