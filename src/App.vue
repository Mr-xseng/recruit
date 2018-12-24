<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>
<script>
import Header from './client/public/header/index'
import Footer from './client/public/footer/index'
export default {
    components: {
        Header,
        Footer
    }
}
</script>
<style lang="stylus">
</style>
