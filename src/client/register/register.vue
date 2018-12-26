<template>
  <div class="register">
    <div class="section">
      <div class="title">欢迎注册</div>
      <el-form
        ref="registerForm"
        :model="ruleForm"
        :rules="rules"
        label-width="100px"
        class="demo-ruleForm">
        <el-form-item
          label="昵称"
          prop="name">
          <el-input v-model="ruleForm.name" />
        </el-form-item>
        <el-form-item
          label="邮箱"
          prop="email">
          <el-input v-model="ruleForm.email" />
        </el-form-item>
        <el-form-item
          label="手机号"
          prop="phoneNum"
        >
          <el-input type="text" v-model.number="ruleForm.phoneNum"/>
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
        <el-form-item
          label="确认密码"
          prop="cpwd">
          <el-input
            v-model="ruleForm.cpwd"
            type="password" />
        </el-form-item>
        <el-form-item class="registerBtn">
          <button
            @click="register()"
            class="registerName"
          >注册</button>
          <div class="error">{{ error }}</div>
        </el-form-item>
      </el-form>
      <div class="register-info">
        <p class="register-content">点击注册按钮即为您同意 用户协议及隐私政策</p>
        <div class="register-login">
          <em>已有账号</em>
          <router-link to="/login" class="loginSty">直接登录</router-link></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    var namePass = async (rule, value, callback) => {
      if (/\s+/g.test(value)) {
        callback(new Error('禁用空格字符'))
      } else {
        var params = new URLSearchParams()
        params.append('username', value)
        let {status: status1, data: {status}} = await this.$axios({
          method: 'post',
          url: '/checkUsername',
          data: params
        })
        if (status1 === 200 && status === 200) {
          callback()
        }
      }
    }
    var codePass = (rule, value, callback) => {
      if (value !== this.currentCode) {
        callback(new Error('验证码错误'))
      } else {
        callback()
      }
    }
    var pwdPass = (rule, value, callback) => {
      const pwdReg = /^[0-9a-zA-Z]+$/
      if (pwdReg.test(value)) {
        callback()
      } else {
        callback(new Error('密码设置格式为数字和字母组合'))
      }
    }
    var cpwdPass = (rule, value, callback) => {
      if (value !== this.ruleForm.pwd) {
        callback(new Error('两次密码不一致'))
      } else {
        callback()
      }
    }
    var phonePass = async (rule, value, callback) => {
      if (!value) {
        return callback(new Error('手机号不能为空'))
      } else {
        const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
        console.log(reg.test(value))
        if (reg.test(value)) {
          var params = new URLSearchParams()
          params.append('telephone', value)
          let {status: status1, data: {status}} = await this.$axios({
            method: 'post',
            url: '/checkTelephone',
            data: params
          })
          if (status1 === 200 && status === 200) {
            callback()
          }
        } else {
          return callback(new Error('请输入正确的手机号'))
        }
      }
    }
    var emailPass = async (rule, value, callback) => {
      const emailReg = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
      const comReg = /163|qq/
      if (comReg.test(value)) {
        if (!/.com$/.test(value)) {
          callback(new Error('邮箱格式有误'))
        }
      }
      if (emailReg.test(value)) {
        var params = new URLSearchParams()
        params.append('email', value)
        let {status: status1, data: {status}} = await this.$axios({
          method: 'post',
          url: '/checkEmail',
          data: params
        })
        if (status1 === 200 && status === 200) {
          callback()
        }
      } else {
        callback(new Error('邮箱格式有误'))
      }
    }
    return {
      currentCode: '',
      statusMsg: '',
      error: '',
      ruleForm: {
        name: '',
        phoneNum: '',
        code: '',
        pwd: '',
        cpwd: '',
        email: ''
      },
      rules: {
        name: [{
          required: true,
          type: 'string',
          message: '请输入昵称',
          trigger: 'blur'
        }, {validator: namePass, trigger: 'blur'}],
        email: [{
          required: true,
          message: '邮箱为空或无效',
          type: 'email',
          trigger: 'blur'
        }, {validator: emailPass, trigger: 'blur'}],
        phoneNum: [{
          required: true,
          message: '请输入手机号',
          trigger: 'blur'
        }, {validator: phonePass, trigger: 'blur'}],
        code: [{
          required: true,
          message: '请输入验证码',
          trigger: 'blur'
        }, {validator: codePass, trigger: 'blur'}],
        pwd: [{
          required: true,
          message: '创建密码',
          trigger: 'blur'
        }, {validator: pwdPass, trigger: 'blur'}],
        cpwd: [{
          required: true,
          message: '确认密码',
          trigger: 'blur'
        }, {validator: cpwdPass, trigger: 'blur'}]
      }
    }
  },
  mounted () {
    this.createCode()
  },
  methods: {
    register () {
      let self = this
      this.$refs['registerForm'].validate(async (valid) => {
        if (valid) {
          var params = new URLSearchParams()
          params.append('username', this.ruleForm.name)
          params.append('telephone', this.ruleForm.phoneNum)
          params.append('email', this.ruleForm.email)
          params.append('password', this.ruleForm.pwd)
          let {status: status1, data: {status}} = await self.$axios({
            method: 'post',
            url: '/register',
            data: params
          })
          if (status1 === 200 && status === 200) {
            self.$router.push('/active')
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
      width: 28%;
      height:90%;
      margin:50px auto;
      padding-top:30px;
      box-sizing: border-box;
      background :#fff;
      border-radius 8px;
      box-shadow :1px 2px 20px rgba(0,0,0,.3);
      .register-info
        text-align center
        font-size:13px;
        color: #b8d3ff;
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
          .registerName
            width:100%;
            font-size:16px;
            line-height 42px;
            text-align center;
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
