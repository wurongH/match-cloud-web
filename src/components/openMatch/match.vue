<template>
  <!-- 开通赛事平台表单 -->
  <div class="v-open-match-from">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="赛事名称" prop="trackName">
        <el-input v-model="ruleForm.trackName" placeholder="请输入赛事名称"></el-input>
      </el-form-item>
      <el-form-item label="联系人" prop="contacts">
        <el-input v-model="ruleForm.contacts" placeholder="请输入联系人"></el-input>
      </el-form-item>
      <el-form-item label="单位名称" prop="hostUnit">
        <el-input v-model="ruleForm.hostUnit" placeholder="请输入单位名称"></el-input>
      </el-form-item>
      <el-form-item label="手机号码" prop="phone">
        <el-input v-model="ruleForm.phone" maxlength="11" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item label="短信验证码" prop="smsVerifyCode">
        <el-input v-model="ruleForm.smsVerifyCode" maxlength="10" placeholder="请输入短信验证码"></el-input>
        <div  :class="['send-code', { disable: isDisable }]" @click.stop="sendCodeSms">
          {{timerCodeMsg}}
        </div>
      </el-form-item>
      <el-form-item label="所在部门" prop="belong">
        <el-input v-model="ruleForm.belong" placeholder="请输入所在部门"></el-input>
      </el-form-item>
      <el-form-item label="职务" prop="duty">
        <el-input v-model="ruleForm.duty" placeholder="请输入职务"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "vOpenMatchFrom",
  data() {
    const validatePhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('手机号不能为空'))
      } else {
        if(
          /^1[345789]\d{9}$/.test(value) ||
          /^(\+886\s)?[0]{1}[9]{1}\d{8}$/.test(value) ||
          /^(\+852\s)?[5689]{1}\d{7}$/.test(value)
        ){
          callback()
        }else
          callback(new Error('手机号格式不正确'))
      }
    }
    return {
      timerCodeMsg: '获取验证码',
      //是否正在发送验证码
      isDisable: false,
      ruleForm: {
        //赛道名称
        trackName: '',
        //赛道网址
        // website: '',
        //单位名称
        hostUnit: '',
        //联系人
        contacts: '',
        //手机号
        phone: '',
        //验证码
        smsVerifyCode: '',
        //所在部门
        belong: '',
        //职务
        duty: '',
        //附件
        // attachment: ''
      },
      rules: {
        trackName: [
          { required: true, message: '请输入赛事名称', trigger: 'blur' },
        ],
        hostUnit: [
          { required: true, message: '请输入单位名称', trigger: 'blur' },
        ],
        contacts: [
          { required: true, message: '请输入联系人', trigger: 'blur' },
        ],
        phone: [{ required: true, trigger: 'blur', validator: validatePhone }],
        smsVerifyCode: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
        ],
        belong: [
          { required: true, message: '请输入所在部门', trigger: 'blur' },
        ],
        duty: [
          { required: true, message: '请输入职务', trigger: 'blur' },
        ],
      }
    };
  },
  methods: {
    getCode(){
      this.isDisable = true;
      let count = 59;
      for(let i = 0; i <= count; i++){
       setTimeout(() =>{
         if (count != 0) {
           this.timerCodeMsg =   count + "秒" ;
           count--;
         } else {
           this.isDisable = false;
           this.timerCodeMsg =  "获取验证码" ;
         }
       }, i * 1000)
      }
    },
    async sendCodeSms(){
      if(this.timerCodeMsg != '获取验证码'){
        return;
      }
      if (
        this.ruleForm.phone === '' ||
        (
          !(/^1[345789]\d{9}$/.test(this.ruleForm.phone)) &&
          !(/^(\+886\s)?[0]{1}[9]{1}\d{8}$/.test(this.ruleForm.phone)) &&
          !(/^(\+852\s)?[5689]{1}\d{7}$/.test(this.ruleForm.phone))
        )
      ){
        this.$refs.ruleForm.validateField('phone');
        return;
      }
      const d = await this.post(this.$api.common.sendVerifyCode, {
        telephone: this.ruleForm.phone,
        templateCode: 'SMS_VERIFY_CODE',
        verifyCodeType: 6
      })
      if(d.code === 0){
        this.getCode();
        this.$message({
          message: '短信发送成功',
          type: 'success'
        });
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const d = await this.post(this.$api.common.applyTrack, this.ruleForm)
          if(d.code === 0){
            this.$emit('ok');
            this.$message({
              message: '提交成功',
              type: 'success'
            });
            this.$refs['ruleForm'].resetFields();
          }
        }
      });
    },
    resetForm(){
      this.$refs['ruleForm'].resetFields();
    }
  }
};
</script>

<style scoped lang="scss">
.demo-ruleForm{
  width: 600px;
  margin: 0 auto;
  padding: 15px;
}
.send-code{
  position: absolute;
  right: 0;
  top: 0;
  height: 40px;
  line-height: 40px;
  width: 100px;
  color: #409EFF;
  font-size: 14px;
  z-index: 10;
  text-align: center;
  cursor: pointer;

  &.disable{
    color: #DCDFE6;
  }
  &:after{
    content: '';
    background: #DCDFE6;
    position: absolute;
    left: 0;
    height: 14px;
    width: 1px;
    top: 13px;
  }
}
</style>
