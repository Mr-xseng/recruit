<template>
  <div class="m-hcity">
    <dl>
      <dt>热门城市:</dt>
      <dd
        v-for="item in list"
        :key="item.pid"
        @click=getHotCity(item.label)
      >
        {{item.label}}
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
  methods: {
    getHotCity (item) {
      this.$store.dispatch('getPosition', item)
      this.$router.push('/')
    }
  },
  async mounted () {
    let {status, data: {hots}} = await axios.get(`http://cp-tools.cn/geo/hotCity?sign=${sign}`)
    let self = this
    if (status === 200) {
      self.list = hots.map(item => {
        return {
          label: item.name === '市辖区' ? item.province : item.name,
          pid: item.id
        }
      })
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
        cursor: pointer;
      }
    }
  }
</style>
