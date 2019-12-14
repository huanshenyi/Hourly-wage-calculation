<template>
  <div>
<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
    <el-form-item label="給料形式" prop="region">
      <el-col :span="5">
        <el-select v-model="ruleForm.format" placeholder="給料形式を選びください">
            <el-option label="年収" value="year"></el-option>
            <el-option label="月収" value="month"></el-option>
            <el-option label="日給" value="day"></el-option>
            <el-option label="時給" value="hour"></el-option>
        </el-select>
      </el-col>
    </el-form-item>

    <el-form-item label="単位" prop="region" labelPosition="top">
      <el-col :span="5">
        <el-select v-model="ruleForm.unit" placeholder="単位をを選びください">
          <el-option label="円" value="yen"></el-option>
          <el-option label="万円" value="thousandyen"></el-option>
        </el-select>
      </el-col>
    </el-form-item>

    <el-form-item label="給料">
      <el-input v-model="ruleForm.salary"></el-input>
    </el-form-item>
    <el-form-item label="片道通勤時間">
      <el-input v-model="ruleForm.time"></el-input>
    </el-form-item>

    <el-form-item label="休日">
        <el-radio-group v-model="ruleForm.resource" size="medium">
          <el-radio border label="年間休日"></el-radio>
          <el-radio border label="週休"></el-radio>
        </el-radio-group>
        <el-input v-model="ruleForm.holiday"></el-input>
    </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="submitForm">計算する</el-button>
    <el-button @click="resetForm('ruleForm')">リセット</el-button>
  </el-form-item>
</el-form>
  </div>
</template>

<script lang="ts">
import { Component, Provide, Vue } from 'vue-property-decorator';
@Component({
  components:{}
})
export default class HelloWorld extends Vue {
  @Provide() ruleForm:{
    format: string;
    time:string;
    salary: string,
    unit: string,
    resource: string,
    holiday: string,
  }={
      format: "",
      time :"",
      salary: "",
      unit:"",
      resource: "",
      holiday: ""
  };
  @Provide() rules:Object={};
   created(){
   }
  submitForm():void {
    let formData = new FormData();
    formData.append("format", this.ruleForm.format);
    formData.append("time", this.ruleForm.time);
    formData.append("salary", this.ruleForm.salary);
    formData.append("unit", this.ruleForm.unit);
    formData.append("resource", this.ruleForm.resource);
    formData.append("holiday", this.ruleForm.holiday);
    console.log(this.ruleForm);
    (this as any).$axios.post("http://127.0.0.1:8000/api/test",formData).then((res:any)=>{
      console.log(res.data);
    })
  }
  resetForm(ruleForm:any) {
    (this as any).$refs[ruleForm].resetFields();
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
