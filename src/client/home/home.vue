<template>
    <div>
        <div class="home">home</div>
        <div>
            <router-link to="/login">登录</router-link>
            <router-link to="/singup">注册</router-link>
        </div>
    </div>
</template>

<script>
// import { mapGetters } from 'vuex'
export default {
    computed: {
        // ...mapGetters(['count'])
    },
    mounted () {
        // this.$store.dispatch('setCount',9)
        // console.log(this.count)
    }
}
</script>
<style scoped lang="stylus">
</style>