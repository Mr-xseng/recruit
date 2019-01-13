<template>
  <div class="">
    <dl class="m-categroy">
      <dt>按拼音首字母选择:</dt>
      <dd
        v-for="item in list"
        :key="item">
        <a :href="'#city-'+item" style="text-decoration: none;color:#13D1BE">{{ item }}</a>
      </dd>
    </dl>
    <dl
      v-for="item in block"
      :key="item.title"
      class="m-categroy-section"
    >
      <dt :id="'city-' + item.title">{{ item.title }}</dt>
      <dd>
        <span
          v-for="c in item.city"
          :key="c"
          @click="handleCity(c)"
        >{{ c }}</span>
      </dd>
    </dl>
  </div>
</template>
<script>
import axios from 'axios'
import pyjs from 'js-pinyin'
import {mapActions} from 'vuex'
const sign = 'bb9afbba667fd0deb80ea7faea3f1c5f'
export default {
  data () {
    return {
      list: 'ABCDEFGHJKLMNPQRSTWXYZ'.split(''),
      block: []
    }
  },
  methods: {
    handleCity (city) {
      this.getPosition(city)
      this.$router.push('/')
    },
    ...mapActions(['getPosition'])
  },
  async mounted () {
    this.$router.push('/changeCity')
    let blocks = []
    let self = this
    let {status, data: {city}} = await axios.get(`http://cp-tools.cn/geo/city?sign=${sign}`)
    if (status === 200) {
      let c
      let d = {}
      let p
      city.forEach(item => {
        c = pyjs.getFullChars(item.name).toLocaleLowerCase().slice(0, 1)
        p = c.charCodeAt(0)
        if (p > 96 && p < 123) {
          if (!d[c]) {
            d[c] = []
          }
          d[c].push(item.name)
        }
      })
      for (let [k, v] of Object.entries(d)) {
        blocks.push({
          title: k.toUpperCase(),
          city: v
        })
      }
      blocks.sort((a, b) => a.title.charCodeAt(0) - b.title.charCodeAt(0))
      self.block = blocks
    }
  }
}
</script>
<style lang="scss">
  .m-categroy {
    display: flex;
    margin-bottom: 30px;
    dt {
      font-size: 16px;
      color: #333;
      font-weight: 500;
    }
    dd {
      font-size: 15px;
      color: #666;
      margin: 0 6px;
      width: 24px;
      height: 24px;
      padding: 4px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border-radius: 50%;
      &:hover {
        background: #F8F8F8;
      }
    }
  }
  .m-categroy-section {
    display: flex;
    padding: 13px 30px 13px 10px;
    border-radius: 10px;
    &:hover {
      background: #F8F8F8;
    }
    dt {
      box-sizing: border-box;
      vertical-align: top;
      padding-top: 10px;
      display: inline-block;
      text-align: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      color: #fff;
      background: #13D1BE;
      box-shadow: 0 4px 5px 0 rgba(39, 178, 164, .22);
    }
    dd {
      flex: 1;
      span {
        margin: 10px 20px;
        color: #666;
        display: inline-block;
        font-size: 14px;
        cursor: pointer;
        &:hover {
          color: #13D1BE;
        }
      }
    }
  }

</style>
