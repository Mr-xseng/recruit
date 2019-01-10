<template>
  <div class="m-hcity">
    <dl>
      <dt>热门城市:</dt>
      <dd
        v-for="item in list"
        :key="item.id">
        {{ item.name === '市辖区' ? item.province: item.name }}
      </dd>
    </dl>
  </div>
</template>
<script>
import axios from 'axios'
const sign = 'bb9afbba667fd0deb80ea7faea3f1c5f'
export default {
  data () {
    return {
      list: []
    }
  },
  async mounted () {
    let {status, data: {hots}} = await axios.get(`http://cp-tools.cn/geo/hotCity?sign=${sign}`)
    if (status === 200) {
      this.list = hots
    }
  }
}
</script>
<style lang="scss">
  .m-hcity {
    dl {
      display: flex;
      dt {
        font-size: 16px;
        color: #333;
        font-weight: 500;
      }
      dd {
        margin: 0 20px;
        color: #666;
        line-height: 22px;
      }
    }
  }
</style>
