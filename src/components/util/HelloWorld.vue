<template>
  <div>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-row>
         <el-col :span="4">
            <el-form-item  prop="region" style="width: 200px">
                <el-select v-model="ruleForm.format" placeholder="収入">
                    <el-option label="年収" value="year"></el-option>
                    <el-option label="月収" value="month"></el-option>
                    <el-option label="日給" value="day"></el-option>
                    <el-option label="時給" value="hour"></el-option>
                </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
               <el-form-item>
                   <el-input v-model="ruleForm.salary" type="number" style="width: 300px"></el-input>
               </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item prop="region" labelPosition="top">
                <el-select v-model="ruleForm.unit" placeholder="単位">
                  <el-option label="円" value="yen"></el-option>
                  <el-option label="万円" value="thousandyen"></el-option>
                </el-select>
            </el-form-item>
           </el-col>
       </el-row>
        <el-form-item label="片道通勤時間" prop="time">
          <el-input v-model="ruleForm.time" type="number"></el-input>
        </el-form-item>
        <el-form-item label="休日">
            <el-radio-group v-model="ruleForm.resource" size="medium">
              <el-radio border label="年間休日"></el-radio>
              <el-radio border label="週休"></el-radio>
            </el-radio-group>
            <el-input v-model="ruleForm.holiday" type="number"></el-input>
        </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">計算する</el-button>
        <el-button @click="resetForm('ruleForm')">リセット</el-button>
      </el-form-item>
    </el-form>
      <div class="banner-context" id="myChart"></div>
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
    time:number;
    salary: number,
    unit: string,
    resource: string,
    holiday: number,
  }={
      format: "",
      time :0,
      salary: 0,
      unit:"",
      resource: "",
      holiday: 0
  };
  @Provide() rules:Object={
      time:[{ required: true, message: '時間を入力してください'},{type: 'number', message: '数字を分単位で入力してください'}]
  };
   mounted(){
       this.drawLine()
   }
  submitForm():void {
    // let formData = new FormData();
    // formData.append("format", this.ruleForm.format);
    // formData.append("time", this.ruleForm.time);
    // formData.append("salary", this.ruleForm.salary);
    // formData.append("unit", this.ruleForm.unit);
    // formData.append("resource", this.ruleForm.resource);
    // formData.append("holiday", this.ruleForm.holiday);
    // console.log(this.ruleForm);
     this.ruleForm.time = Number(this.ruleForm.time);
     this.ruleForm.salary = Number(this.ruleForm.salary);
     this.ruleForm.holiday = Number(this.ruleForm.holiday);
     console.log(JSON.stringify(this.ruleForm));
    (this as any).$axios.post("http://127.0.0.1:8000/api/test",JSON.stringify(this.ruleForm)).then((res:any)=>{
      console.log(res.data);
    })
  }
  resetForm(ruleForm:any) {
    (this as any).$refs[ruleForm].resetFields();
  }
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = (this as any).$echarts.init(document.getElementById('myChart'));
        // 绘制图表
        myChart.setOption({
            title: { text: '在Vue中使用echarts' },
            tooltip: {},
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
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
.banner-context{
    width: 625px;
    height: 270px;
}
</style>
