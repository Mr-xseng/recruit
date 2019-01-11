<template>
  <div class="m-iselect">
    <span
      class="name"
      style="margin-right: 15px;font-size:16px">按省份选择:</span>
    <el-select
      v-model="pvalue"
      placeholder="省份"
    >
      <el-option
        v-for="item in province"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
    <el-select
      v-model="cvalue"
      @change="selectCity"
      :disabled="!city.length"
      placeholder="城市"
      style="margin-left:15px"
    >
      <el-option
        v-for="item in city"
        :key="item.value"
        :label="item.label"
        :value="item.label"
      />
    </el-select>
    <span style="margin-left:30px;font-size:16px">直接搜索：</span>
    <el-autocomplete
      v-model="input"
      :fetch-suggestions="querySearchAsync"
      placeholder="请输入城市中文或拼音"
      @select="handleSelect"
    />
  </div>
</template>
<script>
import axios from 'axios'
import _ from 'lodash'
import pyjs from 'js-pinyin'
import {mapActions} from 'vuex'
const sign = 'bb9afbba667fd0deb80ea7faea3f1c5f'
export default {
  data () {
    return {
      pvalue: '',
      newProvince: '',
      newCity: '',
      province: [],
      cvalue: '',
      city: [],
      input: '',
      cities: [],
      newPosition: {}
    }
  },
  watch: {
    pvalue: async function (newPvalue) {
      let self = this
      let {status, data: {city}} = await axios.get(`http://cp-tools.cn/geo/province/${newPvalue}?sign=${sign}`)
      if (status === 200) {
        self.city = city.map(item => {
          return {
            value: item.id,
            label: item.name === '市辖区' ? item.province : item.name
          }
        })
      }
      self.cvalue = ''
    },
    newCity (Ncity) {
      this.getPosition(Ncity)
      this.$router.push('/')
    }
  },
  mounted: async function () {
    let self = this
    let {status, data: {province}} = await axios.get(`http://cp-tools.cn/geo/province?sign=${sign}`)
    if (status === 200) {
      self.province = province.map(item => {
        return {
          label: item.name,
          value: item.id
        }
      })
    }
  },
  methods: {
    querySearchAsync: _.debounce(async function (query, cb) {
      let self = this
      const isChinese = /.*[\u4e00-\u9fa5]+.*$/.test(query)
      if (!self.cities.length) {
        let {status, data: {city}} = await axios.get(`http://cp-tools.cn/geo/city?sign=${sign}`)
        if (status === 200 && query) {
          self.cities = city.map(item => {
            return {
              value: item.name,
              province: item.province,
              city: item.name,
              pinyin: pyjs.getFullChars(item.name).toLocaleLowerCase()
            }
          })
        }
      }
      cb(self.cities.filter(item => (isChinese ? item.value : item.pinyin).indexOf(query) > -1))
    }, 200),
    handleSelect: async function () {
      this.newCity = this.input
    },
    selectCity (value) {
      this.newCity = value
    },
    ...mapActions(['getPosition'])
  }
}
</script>
<style lang="scss">
  .page-changeCity{
    width: 1190px;
    box-sizing: border-box;
    margin: 20px auto 0;
    background-color: #fff;
    border: 1px solid #E5E5E5;
    border-radius: 4px;
    min-height: 1000px;
    padding: 20px;
    .m-iselect {
      .province {
        cursor: pointer;
        border-radius: 4px;
        margin: 0 10px 0 20px;
      }
      .city {
        cursor: not-allowed;
        border-radius: 4px;
        margin: 0 20px 0 10px;
      }
      .label {
        margin-left: 40px;
      }
      .input {
        width: 220px;
        height: 40px;
        border-radius: 4px;
        margin-left: 10px;
        font-size: 14px;
        color: #666;
        box-sizing: border-box;
      }
    }
    .el-row {
      padding-bottom: 20px;
      &:after{
        content: ' ';
        height: 1px;
        width: 100%;
        border-bottom: 1px solid #E5E5E5;
        padding-top: 20px;
      }
    }
  }
</style>
