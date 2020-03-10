<template>
    <div class="box">
       
        <div class="login_father">
            <h3>管理员后台登录</h3>
            <div class="login_son">
               
                <input type="password" @keyup.enter="jump()" v-model="psd"  placeholder="请输入管理员密码">
            </div>
            <!-- <button class="btn  btn-primary"  ></button> -->
             <el-button class='btn' type="primary" @click="jump()">确定</el-button>
        </div>
    </div>
    
</template>

<script>

export default {
    name: 'HelloWorld',
  data () {
    return {
      msg: '后台登录页面',
      password:'user123',
      psd:''
    }
  },
  mounted(){
      console.log(this)
  },
  methods:{
      jump(){
          
          if(this.psd===this.password){
              console.log('success')
              this.$router.push('/Userindex/Option1')
              
          }else{
              console.log('err')
              alert('密码错误请重新输入')
                this.psd = ''
          }
      }
      
  }
}
</script>

<style scoped>
@import '../assets/login.css'
</style>

