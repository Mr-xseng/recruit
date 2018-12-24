<template>
  <div id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>
<script>
export default {
    components: {
    }
}
</script>
<style lang="stylus">
  #app{
    width:100%;
    height:100%;
  }
</style>
