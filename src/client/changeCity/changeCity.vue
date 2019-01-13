<template>
  <div class="page-changeCity">
    <el-row>
      <el-col :span="24"><iSelect/></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><hot/></el-col>
    </el-row>
    <el-row>
      <el-col :span="24"><categroy/></el-col>
    </el-row>
  </div>
</template>
<script>
import iSelect from './cityComponents/isselect'
import Hot from './cityComponents/hot'
import Categroy from './cityComponents/catagroy'
export default {
  components: {
    iSelect,
    Hot,
    Categroy
  },
  mounted () {
    if (this.$router.fullPath.indexOf('city-')) {
      this.$router.push({
        path: '/changeCity'
      })
    }
  }
}
</script>
<style lang="css">
</style>
