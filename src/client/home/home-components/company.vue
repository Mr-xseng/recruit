<template>
  <div class="main">
    <div class="header">
        <h1>2019届校园招聘推荐企业</h1>
    </div>
    <div class="company">
      <ul>
        <li v-for="(item, index) in companyData" :key="index" @mouseenter="onEnter(index)" @mouseleave="onLeave(index)">
          <div class="info">
            <img :src="item.img" ref="Img">
            <div style="margin-top:-10px;margin-bottom:20px;" class="icon">
              <span>{{item.name}}</span>
              <img :src="item.imgIcon">
            </div>
            <div class="name" ref="Name" v-show="!item.flag">
              <p>{{item.content}}</p>
            </div>
            <div class="chckJob" v-show="item.flag" ref="check">
              <p>[上海]电子工程师</p>
              <p>[上海]机械工程师</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Company',
  data () {
    return {
      companyData: [{
        flag: false,
        check: false,
        img: 'http://admin.zheyibu.com/Upload/CompanyRecommend/636638814432823063.png',
        name: '中国石化有限公司',
        imgIcon: 'http://static.zheyibu.com/student/images/icon/homepage-vip-icon.png',
        content: '人民日报社控股的上市公司，国际互联网上最大的综合性网络媒体之一'
      }, {
        flag: false,
        check: false,
        img: 'http://admin.zheyibu.com/Upload/CompanyRecommend/636638814432823063.png',
        name: '中国石化有限公司',
        imgIcon: 'http://static.zheyibu.com/student/images/icon/homepage-vip-icon.png',
        content: '人民日报社控股的上市公司，国际互联网上最大的综合性网络媒体之一'
      }, {
        flag: false,
        check: false,
        img: 'http://admin.zheyibu.com/Upload/CompanyRecommend/636638814432823063.png',
        name: '中国石化有限公司',
        imgIcon: 'http://static.zheyibu.com/student/images/icon/homepage-vip-icon.png',
        content: '人民日报社控股的上市公司，国际互联网上最大的综合性网络媒体之一'
      }, {
        flag: false,
        check: false,
        img: 'http://admin.zheyibu.com/Upload/CompanyRecommend/636638814432823063.png',
        name: '中国石化有限公司',
        imgIcon: 'http://static.zheyibu.com/student/images/icon/homepage-vip-icon.png',
        content: '人民日报社控股的上市公司，国际互联网上最大的综合性网络媒体之一'
      }, {
        flag: false,
        check: false,
        img: 'http://admin.zheyibu.com/Upload/CompanyRecommend/636638814432823063.png',
        name: '中国石化有限公司',
        imgIcon: 'http://static.zheyibu.com/student/images/icon/homepage-vip-icon.png',
        content: '人民日报社控股的上市公司，国际互联网上最大的综合性网络媒体之一'
      }, {
        flag: false,
        check: false,
        img: 'http://admin.zheyibu.com/Upload/CompanyRecommend/636638814432823063.png',
        name: '中国石化有限公司',
        imgIcon: 'http://static.zheyibu.com/student/images/icon/homepage-vip-icon.png',
        content: '人民日报社控股的上市公司，国际互联网上最大的综合性网络媒体之一'
      }, {
        flag: false,
        check: false,
        img: 'http://admin.zheyibu.com/Upload/CompanyRecommend/636638814432823063.png',
        name: '中国石化有限公司',
        imgIcon: 'http://static.zheyibu.com/student/images/icon/homepage-vip-icon.png',
        content: '人民日报社控股的上市公司，国际互联网上最大的综合性网络媒体之一'
      }, {
        flag: false,
        check: false,
        img: 'http://admin.zheyibu.com/Upload/CompanyRecommend/636638814432823063.png',
        name: '中国石化有限公司',
        imgIcon: 'http://static.zheyibu.com/student/images/icon/homepage-vip-icon.png',
        content: '人民日报社控股的上市公司，国际互联网上最大的综合性网络媒体之一'
      }]
    }
  },
  methods: {
    onEnter (index) {
      const Imgtag = this.$refs['Img'][index]
      Imgtag.style = `transition: all 0.4s linear;transform:translate3d(0, -30px, 0) scale(0.78)`
      this.companyData[index].flag = true
      this.$refs['check'][index].style['paddingBottom'] = `30px`
    },
    onLeave (index) {
      const Imgtag = this.$refs['Img'][index]
      Imgtag.style = `transition: all 0.4s linear;transform:translate3d(0, 0, 0) scale(1)`
      this.companyData[index].flag = false
    }
  }
}
</script>
<style scoped lang="stylus">
  .chckJob
    text-align center
    p
      color #7cbf59
      font-size:14px;
      display inline-block
  .check
    line-height:25px;
    background #7cbf59
    color: #fff;
    width 60%;
    padding:10px;
    margin-top:10px;
    display none;
  .main
    width:70%
    margin:10px auto;
    overflow:hidden
    .header
      height:20px
      width:100%
      h1
        font-size:20px
        font-weight:bold
        color:#7cbf59
        float:left
      span
        color:#7777
        float:right
    .company
      margin-top:20px
      margin-left:-2%
      ul
        li
          width:22.5%;
          min-height: 216px;
          height:21%;
          float:left
          margin-left:2%
          border:1px solid #ccc
          cursor pointer
          padding-bottom:10px;
          box-sizing border-box;
          margin-bottom:10px;
          overflow hidden;
          &:hover
            border:1px solid #7cbf59
          .info
            text-align:center
            .icon
              img
                width:16px
                height:16px
                margin-left:5px
              span
                font-size:16px
                color:#9999
                font-weight:bold
            img
              margin:30px auto 0 auto
            .name
              width:80%
              margin:20px auto
              p
                margin-top:10px
                color:#999
                font-size:14px;
                text-align left;
</style>
