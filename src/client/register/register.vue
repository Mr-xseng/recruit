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
                <el-form-item class="message">
                    <el-button
                      size="mini"
                      round
                      @click="sendMsg">发送验证码</el-button>
                    <span class="status">{{ statusMsg }}</span>
                </el-form-item>
                <el-form-item
                  label="验证码"
                  prop="code">
                    <el-input
                      v-model="ruleForm.code"
                      maxlength="4" />
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
                <el-form-item>
                    <el-button
                      type="primary"
                      @click="register">点击完成注册</el-button>
                    <div class="error">{{ error }}</div>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default{
    data () {
        return {
            statusMsg: '',
            error:'',
            ruleForm: {
                name: '',
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
                    }],
                email: [{
                    required: true,
                    type: 'email',
                    message: '邮箱为空或无效',
                    trigger: 'blur'
                }],
                pwd: [{
                    required: true,
                    message: '创建密码',
                    trigger: 'blur'
                }],
                cpwd: [{
                    required: true,
                    message: '确认密码',
                    trigger: 'blur'
                },{
                    validator: (rule,value,callback) => {
                        if (value === '') {
                            callback(new Error('请再次输入密码!'))
                        } else if (value!==this.ruleForm.pwd) {
                            callback(new Error('两次输入密码不一致'))
                       } else {
                            callback()
                        }
                    },
                    trigger: 'blur'
                }]
            },
        }
    },
    methods: {
        sendMsg () {},
        register () {}
    }
}
</script>
<style scoped lang="stylus">
    .register
        width:100%;
        min-height:100%;
        background: url("./recruit_register.png")
        background-repeat no-repeat;
        background-position-y:150px;
        background-color #5dd5c8;
        .section
            width: 420px;
            height:550px;
            margin 50px auto;
            padding-top:30px;
            padding-right: 50px;
            box-sizing: border-box;
            background :#fff;
            border-radius 8px;
            box-shadow :1px 2px 20px rgba(0,0,0,.3);
            .title
                line-height 32px;
                font-size:26px;
                width:100%;
                font-weight:400;
                margin-bottom:20px;
                color:#5dd5c8;
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