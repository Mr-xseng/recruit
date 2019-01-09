<template>
  <el-carousel :interval="4000" type="card" class="card" height="200px">
    <el-carousel-item v-for="(item, index) in swiperImg" :key= index>
      <img :src="item"/>
    </el-carousel-item>
  </el-carousel>
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
    margin-top 20px;
</style>
