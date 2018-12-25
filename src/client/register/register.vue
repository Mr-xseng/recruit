<template>
  <div class="register">
    <div class="section">
      <div class="title">欢迎注册</div>
      <el-form
        ref="ruleForm"
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
          <el-input v-model="ruleForm.phoneNum"/>
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
          <el-button
            @click="register()"
            type="primary"
          >注册</el-button>
          <div class="error">{{ error }}</div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default{
  data () {
    var namePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入昵称'))
        this.nameFlag = false
      } else {
        this.nameFlag = true
      }
    }
    var codePass = (rule, value, callback) => {
      if (value === '') {
        this.nameFlag = false
        callback(new Error('验证码为空'))
      } else if (value !== this.currentCode) {
        this.nameFlag = false
        callback(new Error('验证码错误'))
      } else {
        this.codeFlag = true
        callback()
      }
    }
    var cpwdPass = (rule, value, callback) => {
      if (value === '') {
        this.nameFlag = false
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pwd) {
        this.nameFlag = false
        callback(new Error('两次密码不一致'))
      } else {
        callback()
        this.pwdFlag = true
      }
    }
    var phonePass = (rule, value, callback) => {
      this.phoneFlag = true
      if (value === '') {
        this.nameFlag = false
        callback(new Error('手机号为空'))
      }
      let phoneArr = value.split('')
      if (phoneArr.length !== 11) {
        this.nameFlag = false
        callback(new Error('手机号格式错误'))
      }
      for (var i = 0; i < phoneArr.length; i++) {
        if (isNaN(phoneArr[i])) {
          this.nameFlag = false
          callback(new Error('手机号格式错误'))
        }
      }
    }
    var pwdPass = (rule, value, callback) => {
      if (value === '') {
        this.nameFlag = false
        callback(new Error('请再次输入密码'))
      } else {
        this.cpwdFlag = true
      }
    }
    var emailPass = (rule, value, callback) => {
      if (value === '') {
        this.emailFlag = false
        callback(new Error('请再次输入邮箱'))
      } else {
        this.emailFlag = true
      }
    }
    return {
      currentCode: '',
      statusMsg: '',
      error: '',
      nameFlag: false,
      phoneFlag: false,
      codeFlag: false,
      pwdFlag: false,
      cpwdFlag: false,
      emailFlag: false,
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
          type: 'email',
          message: '邮箱为空或无效',
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
      // if (this.nameFlag&&this.emailFlag&&this.pwdFlag&&this.cpwdFlag&&this.phoneFlag&&this.codeFlag){
      //     alert('pass')
      //     console.log(this.nameFlag,this.emailFlag,this.pwdFlag,this.cpwdFlag)
      // } else {
      //     alert('no passing')
      // }
      this.$refs['ruleForm'].validate(function (valid) {
        console.log(valid, 'op')
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
    background-image: url("./recruit_register.png");
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
      height:85%;
      margin:50px auto;
      padding-top:30px;
      box-sizing: border-box;
      background :#fff;
      border-radius 8px;
      box-shadow :1px 2px 20px rgba(0,0,0,.3);
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
