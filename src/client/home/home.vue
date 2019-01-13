<template>
<div class="main">
    <!-- 头部 -->
    <home-header></home-header>
     <!-- 轮播图 -->
    <home-swiper></home-swiper>
    <!-- 详情 -->
    <detail></detail>
    <!-- 公司   -->
    <company></company>
    <router-link tag="div" to="/" style="text-align: center;margin-bottom:20px;cursor: pointer">
      <img style="width:76.8%;" src="http://static.zheyibu.com/student/images/background/take_a_look.jpg?u=e99883fc-10f7-49dc-ae98-06f1ba3f421e" alt="">
    </router-link>
    <home-footer></home-footer>
</div>
</template>

<script>
import HomeSwiper from './home-components/swiper'
import HomeHeader from 'client/public/header/header.vue'
import HomeFooter from 'client/public/footer/footer.vue'
import Detail from './home-components/detail'
import Company from './home-components/company'
export default {
  name: 'Home',
  components: {
    HomeSwiper,
    HomeHeader,
    HomeFooter,
    Detail,
    Company
  }
}
</script>
<style scoped lang="stylus">

</style>
