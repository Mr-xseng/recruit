<template>
  <div>
    <homeHeader/>
    <div class="box">
      <div class="main">
        <div class="box-left">
          <div class="header">
            java开发
            <span>智</span>
          </div>
          <div class="box1">
            <div class="drec">来自：<span>华为</span></div>
            <div class="drec1">公司行业：<span>华为国际有想哥哥</span></div>
            <div class="drec1">公司规模：<span>1000人</span></div>
            <div class="drec1">公司类型：<span>民营</span></div>
          </div>
          <div class="box1">
            <div class="drec1">工作类别：<span>java开发工程师</span></div>
            <div class="drec1">招聘人数：<span>若干</span></div>
            <div class="drec1">发布时间：<span>2019-02-01</span></div>
            <div class="drec1">职位性质：<span>全职</span></div>
            <div class="drec1">学历要求：<span>本科以上</span></div>
          </div>
          <div class="commit">马上投递</div>
          <div class="info">
            <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
              <el-tab-pane label="职位描述" name="first">
                <p>1.接触过java编程语言，对IT行业感兴趣者亦可。</p>
                <p>2.工作认真负责，严谨细致，喜欢钻研技术，乐于接受工作挑战,有良好的团队精神和沟通能力。</p>
                <p>3.熟悉掌握主流的技术框架，如SpringMvc</p>
                <p>4.熟悉MySQL,Oracle等主流数据库</p>
                <p> 5.有Java开发经验优先</p>
                <p>6.薪资待遇：6k-8k</p>
              </el-tab-pane>
              <el-tab-pane label="公司介绍" name="second">
                <h1>A1</h1>
                <p style="line-height:25px">是一家以提升用户体验为成长驱动的食品公司
                  秉承“为家人而生”的理念
                  提供高品质、跨品类、多场景的食品解决方案
                  依托轻资产、新零售运营模式驱动公司快速成长
                  目前A1已成为拥有超过200多万粉丝用户
                  覆盖包括盒马鲜生、永辉便利、苏果等60000多个售点
                  在食品行业与创投圈引起极大关注的食品“新物种”</p>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
        <div class="box-right">
        </div>
      </div>
      <div class="floot">
        <h1>相似职位推荐</h1>
        <div class="item">
          <div class="item1">
            <h2>c#工程师</h2>
            <span>广州</span>
            <span>博士以上</span>
            <div class="company">
              <img src="https://campusrd.zhaopin.com/CompanyLogo/20180829\20180829174231453697042.jpg">
              <h3>阿里国际邮箱公司</h3>
              <p>上市公司</p>
            </div>
          </div>
          <div class="item1">
            <h2>c#工程师</h2>
            <span>广州</span>
            <span>博士以上</span>
            <div class="company">
              <img src="https://campusrd.zhaopin.com/CompanyLogo/20180829\20180829174231453697042.jpg">
              <h3>阿里国际邮箱公司</h3>
              <p>上市公司</p>
            </div>
          </div>
          <div class="item1">
            <h2>c#工程师</h2>
            <span>广州</span>
            <span>博士以上</span>
            <div class="company">
              <img src="https://campusrd.zhaopin.com/CompanyLogo/20180829\20180829174231453697042.jpg">
              <h3>阿里国际邮箱公司</h3>
              <p>上市公司</p>
            </div>
          </div>
          <div class="item2">
            <h2>c#工程师</h2>
            <span>广州</span>
            <span>博士以上</span>
            <div class="company">
              <img src="https://campusrd.zhaopin.com/CompanyLogo/20180829\20180829174231453697042.jpg">
              <h3>阿里国际邮箱公司</h3>
              <p>上市公司</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="margin:80px auto 0 auto" >
      <homeFooter/>
    </div>
  </div>
</template>
<script>
import homeHeader from 'client/public/header/header.vue'
import homeFooter from 'client/public/footer/footer.vue'
export default {
  name: 'ProDetail',
  components: {
    homeHeader,
    homeFooter
  },
  data () {
    return {
      activeName2: 'first'
    }
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event)
    }
  }
}
</script>
<style lang="stylus" scoped>
  .box
      width:80%
      padding-bottom:40px
      margin:10px auto
    .main
        border:1px solid #3333
        padding-bottom:30px
        .box-left
            width:75%
            /* background-color:blue */
            .header
                margin-left:3%
                font-size:20px
                padding-top:20px
                font-weight:blod
                span
                    padding:0px 3px
                    background-color:green
                    margin-left:10px
                    border-radius:5px
                    font-size:16px
                    color:white
            .box1
                padding-bottom:10px
                border-bottom:1px solid #333
                margin-top:20px
                margin-left:3%
                .drec
                    font-size:14px
                    color:#88888
                    span
                        font-size:10px
                        color:blue
                .drec1
                    margin-top:20px
                    font-size:14px
                    display:inline-block
                    margin-right:5%
                    color:#888888
                    width:25%
                    over-flow:hidden
                    span
                        font-size:10px
                        width:30%
                        color:#000
            .commit
                padding:10px
                color: #ffff
                width:10%
                box-shadow:1px 1px 3px #333
                text-align:center
                font-size:20px
                background-color:blue
                margin-left:3%
                margin-top:18px
                border-radius:10px
            .info
                margin-left:3%
                margin-top:20px
                p
                    font-size:14px
                    line-height:20px
                    color:rgba(0,0,0,.8)
    .floot
        margin-top:20px
        padding-bottom:50px
        h1
            border-left:3px solid blue
            padding-left:5px
            font-size:20px
        .item
            width:100%
            margin-top:20px
            .item1
                width:22.5%
                height:100%
                float:left
                margin-right:3.2%
                border:1px solid #3333
                box-sizing:border-box
                margin-top:10px
                overflow: hidden
                text-overflow: ellipsis
                white-space: nowrap
                h2
                    margin:10px
                    font-size:16px
                span
                    margin-right:15px
                    margin-left:10px
                    color:#7777
                .company
                    margin-top:10px
                    color:#666666
                    img
                        width:60px
                        height:60px
                        float:left
                        border-radius:60px
                        margin:10px
                    h3
                        color:#666666
                        font-size:16px
                        margin-bottom:10px
                        padding-top:5px
                    p
                        margin-top:20px
            .item2
                width:22.5%
                height:100%
                float:right
                border:1px solid #3333
                margin-top:10px
                overflow: hidden
                text-overflow: ellipsis
                white-space: nowrap
                h2
                    margin:10px
                    font-size:16px
                span
                    margin-right:15px
                    margin-left:10px
                    color:#7777
                .company
                    margin-top:10px
                    color:#666666
                    img
                        width:60px
                        height:60px
                        float:left
                        border-radius:60px
                        margin:10px
                    h3
                        font-size:16px
                        margin-bottom:10px
                        padding-top:5px
                        margin-top:20px
</style>
