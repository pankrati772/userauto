<template>
  <div class="hello">

    <div class="input_box" >
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" class="table table_left">
            <el-form-item label="方案名称">
                <el-input v-model="formLabelAlign.value" ></el-input>
            </el-form-item>
            <el-form-item label="测试数量">
                <el-input v-model="formLabelAlign.testcount"></el-input>
            </el-form-item>
            <el-form-item label="测试时间间隔(s)">
                <el-input v-model="formLabelAlign.testinterval" ></el-input>
            </el-form-item>
        
        </el-form>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" class="table">
           
            <el-form-item
             v-for="(domain, index) in formLabelAlign.domains"
             :key="domain.key"
             :label="'温度' + Number(index+1)"
             :prop="'domains.' + index + '.tp'"
            >
                <el-input v-model="domain.tp" ></el-input>
                <el-button @click="removeDomain(domain)">删除</el-button>
            </el-form-item>
            
        
        </el-form>
        
        <span style="margin:40px">
            <el-button @click="addDomain">添加</el-button>
            <!-- <el-button @click="removeDomain">删除</el-button> -->
            
        </span>
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" class="table">
            <el-form-item label="波动范围">
                <el-input v-model="formLabelAlign.flow"></el-input>
            </el-form-item>
            <el-form-item label="样本标准差">
                <el-input v-model="formLabelAlign.differentValue"></el-input>
            </el-form-item>
            <el-form-item label="偏差绝对值">
                <el-input v-model="formLabelAlign.arrangeValue" ></el-input>
            </el-form-item>
        
        </el-form>
    </div>
    
    

    <el-button type="primary" class='page_btn' @click="pull">保存配置</el-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  props:[
      'msg'
  ],
  data () {
    return {
      labelPosition: 'top',
        formLabelAlign: {
          value: this.msg,
          domains: [
            {
                tp:''
            },
            
          ],
        }
    }
  },
   
  
  methods:{
      pull(){
          console.log(this.formLabelAlign)
        axios.post('http://192.168.4.64:8080/plan/insterPlan',this.formLabelAlign).then((data)=>{
            console.log(data)
            
        })
          this.$notify({
          title: '保存成功',
          message: '',
          type: 'success'
        });
      },
      addDomain() {
        this.formLabelAlign.domains.push({
          
          
        });
      },removeDomain(item) {
        var index = this.formLabelAlign.domains.indexOf(item)
        if (index !== -1) {
          this.formLabelAlign.domains.splice(index, 1)
        }
      },
  },
  mounted(){
      
  },watch:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
@import '../../assets/page.css'

</style>
