<template>
  <div class="card">
    <div class="block">
      <el-carousel trigger="click" height="274px">
        <el-carousel-item v-for="(item, index) in swiperImg" :key="index">
          <img :src="item"/>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      swiperImg: [
        'http://static.zheyibu.com/student/images/background/B-2.jpg?u=80746ac8-316f-4dcc-9de1-a3836e741beb',
        'http://static.zheyibu.com/student/images/background/B-4.jpg?u=80746ac8-316f-4dcc-9de1-a3836e741beb',
        'http://static.zheyibu.com/student/images/background/B-3.jpg?u=80746ac8-316f-4dcc-9de1-a3836e741beb',
        'http://static.zheyibu.com/student/images/background/B-1.jpg?u=80746ac8-316f-4dcc-9de1-a3836e741beb',
        'http://static.zheyibu.com/student/images/background/B-2.jpg?u=80746ac8-316f-4dcc-9de1-a3836e741beb',
        'http://static.zheyibu.com/student/images/background/B-4.jpg?u=80746ac8-316f-4dcc-9de1-a3836e741beb'
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
  .card
    margin: 10px auto
    width:70%;
</style>
