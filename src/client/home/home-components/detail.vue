<template>
    <div class="main">
        <!-- 工学 -->
        <div class="item">
            <div class="box">
                <span class="type">工学</span>
                <span class="typeEn">/Engineering</span>
            </div>
            <div class="list">
                <ul>
                    <router-link to="/prodetail" tag="li">电子信息工程</router-link>
                    <li>电子信息工程</li>
                    <li>电子信息工程</li>
                    <li>电子信息工程</li>
                    <li>电子信息工程</li>
                    <li>电子信息工程</li>
                    <li>电子信息工程</li>
                    <li>电子信息工程</li>
                    <li>电子信息工程</li>
                    <li>电子信息工程</li>
                    <li>电子信息工程</li>
                    <li>电子信息工程</li>
                </ul>
            </div>
        </div>
        <!-- 文学 -->
        <div class="item">
                <div class="box1">
                    <span class="type">文学</span>
                    <span class="typeEn">/Literature</span>
                </div>
                <div class="list">
                    <ul>
                        <li>汉语文学</li>
                        <li>汉语文学</li>
                        <li>汉语文学</li>
                        <li>汉语文学</li>
                        <li>汉语文学</li>
                        <li>汉语文学</li>
                        <li>汉语文学</li>
                    </ul>
                </div>
        </div>
        <!-- 历史学 -->
        <div class="item">
                <div class="box2">
                    <span class="type">历史学</span>
                    <span class="typeEn">/History</span>
                </div>
                <div class="list">
                    <ul>
                        <li>汉语文学</li>
                        <li>汉语文学</li>
                        <li>汉语文学</li>
                        <li>汉语文学</li>
                        <li>汉语文学</li>
                        <li>汉语文学</li>
                        <li>汉语文学</li>
                    </ul>
                </div>
        </div>
        <!-- 医学 -->
        <div class="item">
                <div class="box3">
                    <span class="type">医学</span>
                    <span class="typeEn">/Medical Science</span>
                </div>
                <div class="list">
                    <ul>
                        <li>汉语文学</li>
                        <li>汉语文学</li>
                        <li>汉语文学</li>
                        <li>汉语文学</li>
                        <li>汉语文学</li>
                        <li>汉语文学</li>
                        <li>汉语文学</li>
                    </ul>
                </div>
        </div>
        <!-- 理学 -->
        <div class="item">
                <div class="box4">
                    <span class="type">理学</span>
                    <span class="typeEn">/Science</span>
                </div>
                <div class="list">
                    <ul>
                        <li>汉语文学</li>
                        <li>汉语文学</li>
                        <li>汉语文学</li>
                        <li>汉语文学</li>
                        <li>汉语文学</li>
                        <li>汉语文学</li>
                        <li>汉语文学</li>
                    </ul>
                </div>
        </div>
        <!-- 查看全部专业 -->
        <div class="more">
            <h3 v-on:click="changeshow">查看全部专业<i class="icon iconfont">&#xe7eb;</i></h3>
            <transition name="fade">
                <div class="show-more" v-if="flag">
                    <!-- 农学/Agronomy -->
                    <div class="item">
                            <div class="box5">
                                <span class="type">农学</span>
                                <span class="typeEn">/Agronomy</span>
                            </div>
                            <div class="list">
                                <ul>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                </ul>
                            </div>
                    </div>
                    <!-- 教育学/Education -->
                    <div class="item">
                            <div class="box9">
                                <span class="type">教育学</span>
                                <span class="typeEn">/Education</span>
                            </div>
                            <div class="list">
                                <ul>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                </ul>
                            </div>
                    </div>
                    <!-- 艺术学/Art -->
                    <div class="item">
                            <div class="box10">
                                <span class="type">艺术学</span>
                                <span class="typeEn">/Art</span>
                            </div>
                            <div class="list">
                                <ul>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                </ul>
                            </div>
                    </div>
                    <!-- 法学/Law -->
                    <div class="item">
                            <div class="box11">
                                <span class="type">法学</span>
                                <span class="typeEn">/Law</span>
                            </div>
                            <div class="list">
                                <ul>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                </ul>
                            </div>
                    </div>
                    <!-- 哲学/Philosophy -->
                    <div class="item">
                            <div class="box6">
                                <span class="type">哲学</span>
                                <span class="typeEn">/Philosophy</span>
                            </div>
                            <div class="list">
                                <ul>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                </ul>
                            </div>
                    </div>
                    <!-- 管理学/Management -->
                    <div class="item">
                            <div class="box7">
                                <span class="type">管理学</span>
                                <span class="typeEn">/Management</span>
                            </div>
                            <div class="list">
                                <ul>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                </ul>
                            </div>
                    </div>
                    <!-- 经济学/Economics -->
                    <div class="item">
                            <div class="box8">
                                <span class="type">经济学</span>
                                <span class="typeEn">/Economics</span>
                            </div>
                            <div class="list">
                                <ul>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                    <li>汉语文学</li>
                                </ul>
                            </div>
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
export default {
  name: 'detail',
  data () {
    return {
      flag: false
    }
  },
  methods: {
    changeshow: function () {
      this.flag = !this.flag
    }
  }
}
</script>
<style scoped lang="stylus">
    /* @import './assets/style/globalCSS/css.styl'; */
    .main
        width:80%
        margin-left:10%
        margin-top:10px
        .item
            width:100%
            padding-bottom:20px
            .box
                background-image:url("~assets/style/img/icon.png")
                background-position:0px -44px
                background-repeat:no-repeat
                background-size:23pxg
                padding-bottom:10px
                line-height:23px
                width:18%
                border-bottom:1px solid #7cbf59
                .type
                    font-size:16px
                    color:green
                    margin-left:30px
                    font-weight:bold
                .typeEn
                    font-size:20px
                    color:#cccc
                    font-weight:bold
            .list
                width:100%
                margin-top:10px
                ul
                    li
                        width:15%
                        margin-right:1%
                        display:inline-block
                        margin-bottom:12px
                        cursor:pointer
                        &:hover
                            color:green
            .box1
                background-image:url("~assets/style/img/icon.png")
                background-position:0px -190px
                background-repeat:no-repeat
                background-size:23px
                padding-bottom:10px
                line-height:23px
                width:17%
                border-bottom:1px solid #7cbf59
                .type
                    font-size:16px
                    color:green
                    margin-left:30px
                    font-weight:bold
                .typeEn
                    font-size:16px
                    color:#cccc
                    font-weight:bold
            .box2
                background-image:url("~assets/style/img/icon.png")
                background-position:0px -542px
                background-repeat:no-repeat
                background-size:23px
                padding-bottom:10px
                line-height:23px
                width:17%
                border-bottom:1px solid #7cbf59
                .type
                    font-size:16px
                    color:green
                    margin-left:30px
                    font-weight:bold
                .typeEn
                    font-size:16px
                    color:#cccc
                    font-weight:bold
            .box3
                background-image:url("~assets/style/img/icon.png")
                background-position:0px -240px
                background-repeat:no-repeat
                background-size:23px
                padding-bottom:10px
                line-height:23px
                width:22%
                border-bottom:1px solid #7cbf59
                .type
                    font-size:16px
                    color:green
                    margin-left:30px
                    font-weight:bold
                .typeEn
                    font-size:16px
                    color:#cccc
                    font-weight:bold
            .box4
                background-image:url("~assets/style/img/icon.png")
                background-position:0px -145px
                background-repeat:no-repeat
                background-size:23px
                padding-bottom:10px
                line-height:23px
                width:16%
                border-bottom:1px solid #7cbf59
                .type
                    font-size:16px
                    color:green
                    margin-left:30px
                    font-weight:bold
                .typeEn
                    font-size:16px
                    color:#cccc
                    font-weight:bold
        .more
            width:100%
            h3
             text-align:center
             color:green
             margin-left:3px
             cursor:pointer
            .show-more
                width:100%
                .fade-enter-active, .fade-leave-active
                    transition: opacity .5s
                .fade-enter, .fade-leave-to
                    opacity: 0
                .box5
                    background-image:url("~assets/style/img/icon.png")
                    background-position:0px -596px
                    background-repeat:no-repeat
                    background-size:23px
                    padding-bottom:10px
                    line-height:23px
                    border-bottom:1px solid #7cbf59
                    .type
                        font-size:16px
                        color:green
                        margin-left:30px
                        font-weight:bold
                    .typeEn
                        font-size:16px
                        color:#cccc
                        font-weight:bold
                .box9
                    background-image:url("~assets/style/img/icon.png")
                    background-position:0px -289px
                    background-repeat:no-repeat
                    background-size:23px
                    padding-bottom:10px
                    line-height:23px
                    border-bottom:1px solid #7cbf59
                    .type
                        font-size:16px
                        color:green
                        margin-left:30px
                        font-weight:bold
                    .typeEn
                        font-size:16px
                        color:#cccc
                        font-weight:bold
                .box10
                    background-image:url("~assets/style/img/icon.png")
                    background-position:0px -697px
                    background-repeat:no-repeat
                    background-size:23px
                    padding-bottom:10px
                    line-height:23px
                    border-bottom:1px solid #7cbf59
                    .type
                        font-size:16px
                        color:green
                        margin-left:30px
                        font-weight:bold
                    .typeEn
                        font-size:16px
                        color:#cccc
                        font-weight:bold
                .box11
                    background-image:url("~assets/style/img/icon.png")
                    background-position:0px -335px
                    background-repeat:no-repeat
                    background-size:23px
                    padding-bottom:10px
                    line-height:23px
                    border-bottom:1px solid #7cbf59
                    .type
                        font-size:16px
                        color:green
                        margin-left:30px
                        font-weight:bold
                    .typeEn
                        font-size:16px
                        color:#cccc
                        font-weight:bold
                .box6
                    background-image:url("~assets/style/img/icon.png")
                    background-position:0px -647px
                    background-repeat:no-repeat
                    background-size:23px
                    padding-bottom:10px
                    line-height:23px
                    border-bottom:1px solid #7cbf59
                    .type
                        font-size:16px
                        color:green
                        margin-left:30px
                        font-weight:bold
                    .typeEn
                        font-size:16px
                        color:#cccc
                        font-weight:bold
                .box7
                    background-image:url("~assets/style/img/icon.png")
                    background-position:0px -2px
                    background-repeat:no-repeat
                    background-size:23px
                    padding-bottom:10px
                    line-height:23px
                    border-bottom:1px solid #7cbf59
                    .type
                        font-size:16px
                        color:green
                        margin-left:30px
                        font-weight:bold
                    .typeEn
                        font-size:16px
                        color:#cccc
                        font-weight:bold
                .box8
                    background-image:url("~assets/style/img/icon.png")
                    background-position:0px -145px
                    background-repeat:no-repeat
                    background-size:23px
                    padding-bottom:10px
                    line-height:23px
                    border-bottom:1px solid #7cbf59;
                    .type
                        font-size:16px
                        color:green
                        margin-left:30px
                        font-weight:bold
                    .typeEn
                        font-size:16px
                        color:#cccc
                        font-weight:bold
</style>
