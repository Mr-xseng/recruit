<template>
  <div class="main">
    <div class="item" v-for="(item, index) in professionData" :key="index">
      <div class="item-line"></div>
      <div class="box">
        <span class="type">{{item.type}}</span>
        <span class="typeName">/{{item.typeEn}}</span>
      </div>
      <div class="list" style="font-size:14px;color:#666666">
        <ul>
          <router-link
            to="/prodetail"
            tag="li"
            v-for="(k, indx) in item.classificationData"
            :key="indx">{{k.name}}</router-link>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'detail',
  data () {
    return {
      flag: false,
      professionData: [{
        type: '经济学',
        typeEn: 'Economics',
        classificationData: [{
          name: '汉语文学',
          id: '909'
        }]
      }, {
        type: '工学',
        typeEn: 'Engineering',
        classificationData: [{
          name: '汉语文学',
          id: '909'
        }]
      }, {
        type: '教育学',
        typeEn: 'Education',
        classificationData: [{
          name: '汉语文学',
          id: '909'
        }]
      }, {
        type: '法学',
        typeEn: 'Law',
        classificationData: [{
          name: '汉语文学',
          id: '909'
        }]
      }, {
        type: '哲学',
        typeEn: 'Philosophy',
        classificationData: [{
          name: '汉语文学',
          id: '909'
        }]
      }]
    }
  }
}
</script>
<style scoped lang="stylus">
    .item-line
      position: absolute;
      border-top:1px solid #e9e9e9;
      width:74%;
      top:47%;
      left:26%;
    .main
      width:70%
      margin: 10px auto;
      .item
        width:100%
        position:relative;
        .box
          background-image:url("~assets/style/img/icon.png")
          background-position:0px -44px
          background-repeat:no-repeat
          background-size:23pxg
          padding-bottom:10px
          line-height:23px
          width:35%
          border-bottom:1px solid #7cbf59
          .type
              font-size:16px
              color:#7cbf59
              margin-left:30px
              font-weight:bold
          .typeName
              font-size:17px
              color: #a8a8a8;
        .list
          width:100%
          margin-top:10px
          font-size:15px;
          color: rgba(136, 136, 136, 0.48);
          margin-bottom:-10px;
          ul
            li
              width:15%
              margin-right:1%
              display:inline-block
              margin-bottom:12px
              cursor:pointer
              &:hover
                color:green
</style>
