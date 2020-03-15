<template>
  <div class="">
      <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="100px" class="demo-dynamic">
        <el-form-item>
          <el-button type="primary" @click="submitForm('dynamicValidateForm')">保存到本机</el-button>
          <el-button @click="addDomain">新增赋值点</el-button>
         
        </el-form-item>
        <el-form-item label="设备间距">
          <el-input v-model="dynamicValidateForm.JJ" ></el-input>
        </el-form-item>
        <el-form-item label="发射功率">
          <el-input v-model="dynamicValidateForm.GL" ></el-input>
        </el-form-item>
        
        <el-form-item
          v-for="(domain, index) in dynamicValidateForm.domains"
          :label="'赋值点' + Number(index+1)"
          :key="domain.key"
          :prop="'domains.' + index + '.value'+'.kt_15'"
        >
          <el-input v-model="domain.value" placeholder="黑体"></el-input>
          <el-input v-model="domain.kt_15" placeholder="显示温度" @blur="paixu"></el-input>
          <el-button @click.prevent="removeDomain(domain)">删除</el-button>
        </el-form-item>
        
        
      </el-form>
      

       
  </div>
</template>

<script>
import axios from 'axios'
 export default {
    data() {
      return {
        dynamicValidateForm: {
          domains: [
            {
            value: '',
            kt_15:''
            },
            
          ],
          name:'kt17'
          
        },
        
      };
    }
    ,
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.dynamicValidateForm.domains.length)
            if(this.dynamicValidateForm.domains.length<2){
              console.log('请加两组数据')
              this.$notify.error({
                title: '设置错误',
                message: '请添加两组数据',
                
              });
               return false;
            }else{
              console.log(this.dynamicValidateForm)
              axios.post('http://192.168.4.64:8080/Kt/insertDevice',this.dynamicValidateForm).then((data)=>{
            console.log(data)
            
        })
                this.$notify({
                    title: '保存成功',
                    message: '',
                    type: 'success'
                  });

            }
            
            
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      
      removeDomain(item) {
        var index = this.dynamicValidateForm.domains.indexOf(item)
        if (index !== -1) {
          this.dynamicValidateForm.domains.splice(index, 1)
        }
      },
      addDomain() {
        this.dynamicValidateForm.domains.push({
          value: '',
          key: Date.now()
        });
      },
      paixu(){
        this.dynamicValidateForm.domains.sort(this.arraySort('value'))
        
      },
      
      arraySort(field) {
          return (a, b) => {
              var a = a[field]
              var b = b[field]
              return a - b
          }
      }

      
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
@import '../../assets/option.css'

</style>
