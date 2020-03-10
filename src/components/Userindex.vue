<template>
    <div class="box">   
        <h1>已连接到机型:{{msg}}</h1>
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
            msg:'KT15.82 DET A SN 10756',
            options: [{
          value: '方案一',
          label: '方案一'
        }, {
          value: '方案二',
          label: '方案二'
        }, {
          value: '方案三',
          label: '方案三'
        }, {
          value: '方案四',
          label: '方案四'
        }, ],
        value: ''
        }
    },
    mounted(){
        
    },
    updated(){
        console.log(this.value)
        if(this.value==='方案一'){
            this.$router.push('/Userindex/Option1')
        }else if(this.value==='方案二'){
            this.$router.push('/Userindex/Option2')
        }else if(this.value==='方案三'){
            this.$router.push('/Userindex/Option3')
        }else{
            this.$router.push('/Userindex/Option4')
        }
    }
    ,
    methods:{

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