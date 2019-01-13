<template>
  <div class="header">
    <div class="header-warpper">
      <div class="warpper">
        <div class="logo">大学生就业网</div>
        <div class="contain">
          <router-link class="contain-1" to="/" tag="div">首页</router-link>
          <div class="contain-2">职位</div>
          <div class="contain-2">公司</div>
          <div class="contain-2">招聘会</div>
        </div>
        <div class="right">
          <router-link class="sign-in" to="/login" tag="div">登录</router-link>
          <router-link class="register" to="register" tag="div">注册</router-link>
          <div class="city">
            <span class="newCity"><i class="el-icon-location"></i>{{city}}</span>
            <router-link tag="span" class="changeCity" to="/changeCity">切换城市</router-link>
          </div>
        </div>
      </div>
      <div class="search-warpper">
        <div class="search">
          <div class="select1" @click="changeselect">
            <span>{{title1}}</span>
            <div class="icon">
              <i class="el-icon-arrow-down" v-show="!selectShow"></i>
              <i class="el-icon-arrow-up" v-show="selectShow"></i>
            </div>
          </div>
          <div class="select2" v-show="selectShow" @click="changetitle">
            <span>{{title2}}</span>
          </div>
          <input
            type="text"
            placeholder="请输入关键词：例如公司名、职位名"
            v-model="searchContent"
            @keyup.enter="search(searchContent)">
          <div class="logo" @click="search(searchContent)">
            <i class="el-icon-search"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  data () {
    return {
      selectShow: false,
      title1: '职位',
      title2: '公司',
      searchContent: ''
    }
  },
  computed: {
    ...mapGetters(['city'])
  },
  methods: {
    changeselect () {
      this.selectShow = !this.selectShow
    },
    changetitle () {
      var them = ''
      them = this.title1
      this.title1 = this.title2
      this.title2 = them
      this.changeselect()
    },
    search (text) {
      if (!text) {
        this.$router.push(`/${this.$route.fullPath}`)
      }
      const status = Math.random().toString(16).replace('.', '').slice(0, 6).toUpperCase()
      this.$router.push({
        path: `/search/${status}`,
        query: {
          keyword: text
        }
      })
    }
  }
}
</script>

<style  scoped lang="stylus" rel="stylesheet/stylus">
  .header
    position: relative
    width : 100%
    background: #414a60
    padding:0;
    margin:0;
    .header-warpper
      width : 960px
      margin :0 auto
      overflow : hidden
      border : 1px solid #414a60
      .warpper
        margin-top : 10px
        height: 46px
        .logo
          font-size: 20px
          color: aqua
          float : left
          cursor: pointer
          height : 46px
          line-height : 46px
        .contain
          float : left
          margin-left: 15px
          width : 400x
          height : 46px
          color: #fff
          .contain-1
            text-align : center
            float : left
            width : 50px
            line-height : 46px
            margin-left : 15px
            cursor: pointer
            color: aqua
          .contain-2
            text-align : center
            float : left
            width : 50px
            line-height : 46px
            margin-left : 15px
            cursor: pointer
            &:hover
              color : #5dd5c8
        .right
          float: right
          width : 200px
          overflow: hidden
          margin-right : 30px
          height : 46px
          font-size : 14px
          .city
            display inline-block;
            color  #fff;
            position:absolute;
            width: 240px;
            text-align center;
            margin-left:8%;
            top:20%;
            .changeCity
              cursor pointer;
              margin-left 5px;
              &:hover
                color:aqua;
          .sign-in
            margin-left: 15px
            float : left
            width : 50px
            height : 30px
            line-height : 30px
            border :  1px #5dd5c8 solid;
            border-radius : 15px
            color: #fff
            text-align : center
            cursor: pointer
            margin-top : 7px
            &:hover
              color : #5dd5c8
          .register
            float: right
            margin-left: 15px
            width : 50px
            height : 30px
            line-height : 30px
            border :  1px #5dd5c8 solid;
            border-radius : 15px
            color: #fff
            text-align : center
            cursor: pointer
            margin-top : 7px
            &:hover
              color : #5dd5c8
      .search-warpper
        width : 960px
        margin : 30px auto 0
        .search
          overflow : hidden
          .select1
            width : 90px
            height: 48px
            color : #fff
            float : left
            border : 1px solid #ccc
            border-right: none
            text-align : center
            cursor: pointer
            span
              display : block
              margin-top: 17px
              font-size : 14px
              float: left
              margin-left: 20px
            .icon
              float: left
              margin-top: 17px
              margin-left : 10px
              i
                font-size : 20px
          .select2
            position : absolute
            margin-top : 51px
            width : 90px
            height: 50px
            color : #000
            float : left
            border : 1px solid #ccc
            text-align : center
            cursor: pointer
            z-index : 100
            background : #fff
            span
              display : block
              margin-top: 17px
              font-size : 14px
              float: left
              margin-left: 20px
          input
            display : block
            float : left
            width : 666px
            height : 50px
            border: 1px solid #ccc
            outline: none
            padding-left : 15px
            box-sizing border-box;
          .logo
            float : left
            width: 80px
            line-height : 49px
            background : #2d8cf0
            cursor: pointer
            text-align center;
            i
              color : #fff
              font-size : 20px
</style>
