<template>
    <div class="box">   
        <h1>已连接到机型:{{msg}}</h1>

        <el-button type='primary' @click="Connect">连接机器</el-button>
        <div class="show">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          
          
        </div>
 
  <div class="optionshow">

 <router-view></router-view>    
  </div>
 
    </div>
</template>

<script>
export default {
    data(){
        return{
            msg:'未连接',
            options: [{
          value: '方案配置',
          label: '方案配置'
        }, {
          value: '本机赋值',
          label: '本机赋值'
        }, {
          value: '用户管理',
          label: '用户管理'
        }, ],
        value: ''
        }
    },
    mounted(){
        
    },
    updated(){
        console.log(this.value)
        if(this.value==='方案配置'){
            this.$router.push('/Userindex/Option1')
        }else if(this.value==='本机赋值'){
            this.$router.push('/Userindex/Option2')
        }else if(this.value==='用户管理'){
            this.$router.push('/Userindex/Option3')
        }
    }
    ,
    methods:{ 
        Connect(){
          this.msg='KT15.82 DET A SN 10756'
        }
    }
}
</script>


<style scoped>
 .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .optionshow{
      margin-top:30px
  }
  .box{
    background: #f2f2f2;
  }
</style>