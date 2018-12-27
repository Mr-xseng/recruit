<template>
  <div>
    <div class="active">
      您已注册成功,正在跳转到登录界面
      <router-link to="/login" style="color:blue;text-decoration: none">点击跳转,</router-link>
      <span>剩余{{ activeNum }}秒</span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeNum: 5
    }
  },
  async mounted () {
    const statusCode = this.$route.fullPath.split('?')[1]
    const keyValue = statusCode.split('=')
    const key = keyValue[0]
    const value = keyValue[1]
    var params = new URLSearchParams()
    params.append(key, value)
    let {status: status1, data: {status}} = await this.$axios({
      method: 'post',
      url: '/active',
      data: params
    })
    if (status === 200 && status1 === 200) {
      this.timer = setInterval(() => {
        this.activeNum--
        if (this.activeNum === -1) {
          clearTimeout(this.timer)
          this.activeNum = 0
          this.$router.push('/login')
        }
      }, 1000)
    }
  }
}
</script>
<style scoped lang="stylus">
  .active
    margin: 50px;
    font-size: 18px;
</style>
