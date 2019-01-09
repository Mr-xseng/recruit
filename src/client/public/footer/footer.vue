<template>
  <div class="foot">
    <div class="foot-warpper">
      <div class="warpper">
        <div class="warpper-left">
        <dl>
          <dt>企业服务</dt>
          <dd>
            <a href="#">职位搜索</a>
            <a href="#">新闻</a>
          </dd>
        </dl>
      </div>
        <div class="warpper-help">
          <dl>
            <dt>使用与帮助</dt>
            <dd>
              <a href="#">用户协议与隐私政策</a>
              <a href="#">防骗指南</a>
              <a href="#">使用帮助</a>
            </dd>
          </dl>
        </div>
        <div class="warpper-contact">
          <dl>
            <dt>联系大学就业网</dt>
            <dd>
              <p>北京华品博睿网络技术有限公司</p>
              <p>北京市朝阳区太阳宫中路8号冠捷大厦302</p>
              <p>
                联系电话
                <span>08415063310</span>
              </p>
            </dd>
          </dl>
        </div>
        <div class="warpper-right">
          <dl>
            <dt>大学就业网</dt>
            <dd>
              <p>企业服务热线和举报投诉 </p>
              <p>
                工作日
                <span>8:00 - 22:00</span>
              </p>
            </dd>
          </dl>
        </div>
      </div>
    </div>
    <div class="warpper-bottom">
      <span>Copyright © 2018 BOSS直聘</span>
      <span>京ICP备14013441号-5</span>
      <a href="#">电子营业执照</a>
      <a href="#">京公网安备11010502032801 </a>
    </div>
  </div>
  </template>
<script>
export default {
}
</script>
  <style scoped lang="stylus" rel="stylesheet/stylus">
  .foot
    width : 100%
    background : #fff
    position : relative
    a
      display: block
      width: 100%
      font-size: 12px
      text-decoration: none
      color: #8d92a1
      height: 24px
      line-height: 24px
    .foot-warpper
      width : 960px
      margin : 0 auto
      overflow : hidden
      .warpper
        margin-top : 20px
        dt
          height: 30px
          line-height: 30px
          font-size: 14px
          color: #414a60
          margin-bottom: 10px
        p
          display: block
          width: 100%
          font-size: 12px
          color: #8d92a1
          height: 24px
          line-height: 24px
        .warpper-left
          float: left
          width : 200px
        .warpper-help
          float : left
          width : 200px
          margin-left : 50px
        .warpper-contact
          float : left
          width : 220px
          margin-left : 50px
        .warpper-right
          float : right
          width : 200px
    .warpper-bottom
      text-align center;
      margin-top: 20px;
      span
        color: #8d92a1
        font-size : 14px
        margin-right: 15px
      a
        color: #414a60
  </style>
