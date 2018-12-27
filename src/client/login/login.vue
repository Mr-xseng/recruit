<template>
  <div class="register">
    <div class="section">
      <div class="title">欢迎登录</div>
      <el-form
        ref="registerForm"
        :model="ruleForm"
        :rules="rules"
        label-width="100px"
        class="demo-ruleForm">
        <el-form-item
          label="账号"
          prop="name">
          <el-input v-model="ruleForm.name" placeholder="请使用昵称、邮箱或手机号"/>
        </el-form-item>
        <el-form-item
          class="codeForm"
          label="验证码"
          prop="code"
        >
          <el-input type="text" v-model="ruleForm.code"/>
          <input
            type="button"
            id="checkCode"
            class="newcode"
          />
          <input
            type="button"
            class="code"
            value="点击刷新"
            @click="createCode"
            style="margin-left:20px;"
          />
        </el-form-item>
        <el-form-item
          label="密码"
          prop="pwd">
          <el-input
            v-model="ruleForm.pwd"
            type="password" />
        </el-form-item>
        <el-form-item class="registerBtn">
          <el-checkbox v-model="checked" class="autostyle">自动登录</el-checkbox>
          <button
            @click="login"
            class="registerName"
          >登录</button>
          <div class="error">{{ error }}</div>
        </el-form-item>
      </el-form>
      <div class="register-info">
        <div class="register-login">
          <em>没有账号</em>
          <router-link to="/register" class="loginSty">点击注册</router-link></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    var namePass = (rule, value, callback) => {
      if (/@/.test(value)) {
        this.loginType = 'email'
      } else if (/^[0-9]{11}$/.test(value)) {
        this.loginType = 'telephone'
      } else {
        this.loginType = 'username'
      }
      if (/\s+/g.test(value)) {
        callback(new Error('禁用空格字符'))
      } else {
        callback()
      }
    }
    var pwdPass = (rule, value, callback) => {
      const pwdReg = /^[0-9a-zA-Z]+$/
      if (pwdReg.test(value)) {
        callback()
      } else {
        callback(new Error('密码格式有误'))
      }
    }
    var codePass = (rule, value, callback) => {
      if (value !== this.currentCode) {
        callback(new Error('验证码错误'))
      } else {
        callback()
      }
    }
    return {
      error: '',
      loginType: '',
      autoLogin: '0',
      checked: false,
      ruleForm: {
        name: '',
        code: '',
        pwd: ''
      },
      rules: {
        code: [{
          required: true,
          message: '请输入验证码',
          trigger: 'blur'
        }, {validator: codePass, trigger: 'blur'}],
        name: [{
          required: true,
          message: '请输入账号',
          trigger: 'blur'
        }, {validator: namePass, trigger: 'blur'}],
        pwd: [{
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }, {validator: pwdPass, trigger: 'blur'}]
      }
    }
  },
  mounted () {
    this.createCode()
  },
  methods: {
    login () {
      let self = this
      this.$refs['registerForm'].validate(async (valid) => {
        var params = new URLSearchParams()
        if (self.checked) {
          this.autoLogin = '1'
        } else {
          this.autoLogin = '0'
        }
        if (valid) {
          params.append('username', this.ruleForm.name)
          params.append('password', this.ruleForm.pwd)
          params.append('UserType', this.loginType)
          params.append('autoLogin', this.autoLogin)
          let {status: status1, data: {status, data}} = await self.$axios({
            method: 'post',
            data: params,
            url: '/login'
          })
          if (status1 === 200 && status === 200) {
            console.log(data)
          }
        }
      })
    },
    createCode () {
      this.currentCode = ''
      var codeLength = 5
      var checkCode = document.getElementById('checkCode')
      var random = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      for (var i = 0; i < codeLength; i++) {
        var charIndex = Math.floor(Math.random() * 36)
        this.currentCode += random[charIndex]
      }
      checkCode.value = this.currentCode
    }
  }
}
</script>
<style scoped lang="stylus">
  .register
    background-image: url("~assets/style/img/recruit_register.png");
    position: fixed;
    top:0;
    left:0;
    background-size: contain !important;
    background-repeat no-repeat;
    background-position:center bottom;
    background-color #5dd5c8;
    width:100%;
    height: 100%;
    .section
      width: 30%;
      height:60%;
      margin:120px auto;
      padding-top:30px;
      box-sizing: border-box;
      background :#fff;
      border-radius 8px;
      box-shadow :1px 2px 20px rgba(0,0,0,.3);
      .register-info
        font-size:13px;
        color: #b8d3ff;
        text-align center;
        .register-login
          margin-top 10px;
          .loginSty
            margin-left: 3px;
            color:#18c3b1;
            text-decoration:none;
      .demo-ruleForm
        padding-right:50px;
        .codeForm
          width:220px;
          position:relative;
          .code
            position: absolute;
            top:25px;
            right:-100px
            border:none;
            color:red;
            font-size:11px;
            line-height:15px;
            margin-top -3px;
            font-style italic;
          .newcode
            font-family: Arial;
            font-style: italic;
            font-weight: bold;
            border: 0;
            letter-spacing: 3px;
            color: blue;
            position absolute;
            top:0;
            right:-100px;
        .registerBtn
          .autostyle
            display block;
            width:30%;
            margin-top -15px;
            color:#5dd5c8;
          .registerName
            width:100%;
            font-size:16px;
            line-height 42px;
            cursor:pointer;
            background:#5dd5c8;
            border:none;
            color:#fff;
      .title
        line-height:32px;
        font-size:26px;
        width:100%;
        font-weight:400;
        margin-bottom:20px;
        color:#5dd5c8;
        vertical-align: middle;
        text-align:center;
      .message
        margin-top: -8px;
        .status
          font-size: 12px;
          margin-left:20px;
          color: #e6a23c;
      .error
        color:red;

</style>
