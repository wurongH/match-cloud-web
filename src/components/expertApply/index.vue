<template>
  <!-- 专家申请 -->
  <div class="v-expert-apply">
    <el-dialog
      title="评审专家需求申请单"
      :visible.sync="showValue"
      append-to-body
      width="900px"
      @close="_ =>{ this.$refs['ruleForm'].resetFields(); }"
      class="dialog-expert-apply"
    >
      <el-form
        :model="ruleForm"
        :rules="rules"
        size="small"
        ref="ruleForm"
        label-position="left"
        label-width="auto"
        class="demo-ruleForm"
      >
        <el-form-item label="数量" prop="amount">
          <el-input style="width:100px;" v-model="ruleForm.amount"></el-input>个
        </el-form-item>

        <el-form-item label="领域" prop="realmsNameArray">
          <el-checkbox-group v-model="ruleForm.realmsNameArray">
            <el-checkbox
              v-for="(item,index) in serviceAreaList"
              :label="item.label"
              :key="index"
            >{{item.value}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="类型" prop="tutorsTypeNameArray">
          <el-checkbox-group v-model="ruleForm.tutorsTypeNameArray">
            <el-checkbox
              :key="index"
              :label="item.label"
              v-for="(item,index) in tutorsTypeList"
            >{{item.value}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="级别" prop="levelNameArray">
          <el-checkbox-group v-model="ruleForm.levelNameArray">
            <el-checkbox
              :key="index"
              :label="item.label"
              v-for="(item,index) in expertLevelList"
            >{{item.value}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="用途" prop="purposeNameArray">
          <el-checkbox-group v-model="ruleForm.purposeNameArray">
            <el-checkbox
              :key="index"
              :label="item.label"
              v-for="(item,index) in contacexpertPurposetsList"
            >{{item.value}}</el-checkbox>
          </el-checkbox-group>
        </el-form-item>

        <el-form-item label="经费" prop="expenditure">
          <el-input class="items" v-model="ruleForm.expenditure"></el-input>
        </el-form-item>
        <el-form-item label="联系人" prop="contacts">
          <el-input class="items" v-model="ruleForm.contacts"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" prop="phone">
          <el-input class="items" v-model="ruleForm.phone"></el-input>
        </el-form-item>

        <el-form-item label="网络评审时间" prop="onlineReviewTime">
          <el-date-picker
            v-model="ruleForm.onlineReviewTime"
            type="datetime"
            placeholder="选择网络评审时间"
          ></el-date-picker>
        </el-form-item>

        <el-form-item label="现场评审时间" prop="localeReviewTime">
          <el-date-picker
            v-model="ruleForm.localeReviewTime"
            type="datetime"
            placeholder="请选择现场评审时间"
          ></el-date-picker>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button size="small" @click="$emit('update:value', false)">取消</el-button>
        <el-button size="small" type="primary" @click="submitForm('ruleForm')">确定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import modalMixin from "@/mixins/modal";
export default {
  name: "vReviewNotice",
  props: {},
  mixins: [modalMixin],
  data() {
    const validateExpenditure = (rule, value, callback) => {
      var reg = new RegExp(/^$|^(\d|[1-9]\d)*$/);
      if (value === "") {
        callback(new Error("经费不能为空"));
      } else if (!reg.test(value)) {
        callback(new Error("请输入数字"));
      } else {
        callback();
      }
    };
    const validateAmount = (rule, value, callback) => {
      var reg = new RegExp(/^$|^(\d|[1-9]\d)*$/);
      if (value === "") {
        callback(new Error("数量不能为空"));
      } else if (!reg.test(value)) {
        callback(new Error("数量必须是整数"));
      } else {
        callback();
      }
    };
    return {
      serviceAreaList: [
        //领域类型
        { label: "现代农业类", value: "现代农业类" },
        { label: "新兴领域制造类", value: "新兴领域制造类" },
        { label: "信息技术服务类", value: "信息技术服务类" },
        { label: "数字文化创意类", value: "数字文化创意类" },
        { label: "现代社会服务类", value: "现代社会服务类" }
      ],
      tutorsTypeList: [
        // 类型
        { label: "理论专家", value: "理论专家" },
        { label: "院校教师", value: "院校教师" },
        { label: "行企精英", value: "行企精英" },
        { label: "我的文档", value: "我的文档" }
      ],
      expertLevelList: [
        // 级别
        { label: "国赛评委", value: "国赛评委" },
        { label: "省赛评委", value: "省赛评委" },
        { label: "行企精英", value: "行企精英" }
      ],
      contacexpertPurposetsList: [
        // 用途
        { label: "网络评审", value: "网络评审" },
        { label: "现场评审", value: "现场评审" }
      ],
      ruleForm: {
        amount: "", //数量
        realmsNameArray: [], // 领域
        tutorsTypeNameArray: [], //类型
        levelNameArray: [], //级别
        purposeNameArray: [], //用途
        expenditure: "", //经费
        contacts: "", //联系人
        phone: "", //联系方式
        onlineReviewTime: "", //网络评审时间
        localeReviewTime: "" //现场评审时间
      },
      rules: {
        amount: [
          { required: true, validator: validateAmount, trigger: "blur" }
        ],
        contacts: [
          { required: true, message: "请输入联系人", trigger: "blur" }
        ],
        phone: [{ required: true, message: "请输入联系方式", trigger: "blur" }],
        expenditure: [
          { required: true, validator: validateExpenditure, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    formetArr(name) {
      let str = "";
      this.ruleForm[name].forEach((item, index) => {
        str += item + ",";
        if (index === this.ruleForm[name].length - 1) {
          str = str.substring(0, str.length - 1);
        }
      });
      return str;
    },
    formerDate(name) {
      return new Date(+new Date(name) + 8 * 3600 * 1000)
        .toISOString()
        .replace(/T/g, " ")
        .replace(/\.[\d]{3}Z/, "");
    },
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          let params = JSON.parse(JSON.stringify(this.ruleForm));
          if (this.ruleForm.onlineReviewTime) {
            params.onlineReviewTime = this.formerDate(
              this.ruleForm.onlineReviewTime
            );
          }
          if (this.ruleForm.localeReviewTime) {
            params.localeReviewTime = this.formerDate(
              this.ruleForm.localeReviewTime
            );
          }
          params.realmsNameArray = this.formetArr("realmsNameArray");
          params.tutorsTypeNameArray = this.formetArr("tutorsTypeNameArray");
          params.levelNameArray = this.formetArr("levelNameArray");
          params.purposeNameArray = this.formetArr("purposeNameArray");

          const d = await this.post(this.$api.applyPlatformTutors, params);
          if (d.code === 0) {
            this.$message.success('申请成功')
            this.$emit("update:value", false);
          }
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.weight {
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 10px;
}
.items {
  width: 220px;
}
.demo-ruleForm {
  padding: 10px;
}
</style>
