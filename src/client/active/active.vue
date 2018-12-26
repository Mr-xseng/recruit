<template>
  <div class="active">
    您已注册成功,正在跳转到登录界面
    <router-link to="/login" style="color:blue;text-decoration: none">点击跳转,</router-link>
    <span>剩余{{ activeNum }}秒</span>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeNum: 5
    }
  },
  mounted () {
    const status = this.$route.params
    console.log(status)
  }
  // mounted () {
  //   this.timer = setInterval(() => {
  //     this.activeNum--
  //     if (this.activeNum === -1) {
  //       clearInterval(this.timer)
  //       this.activeNum = ''
  //       this.$router.push('/login')
  //     }
  //   }, 1000)
  // }
}
</script>
<style scoped lang="stylus">
  .active
    margin: 50px;
    font-size: 18px;
</style>
