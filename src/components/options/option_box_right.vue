<template>
  <div class="option_son option_box_rig">
       <div class="option option_right">
        <div class="option_name">
          &#12288;波动范围：
        </div>
        <el-input
        placeholder="请输入内容"
        v-model="input_bodong" 
        class="input"
        @blur="sendMsgToParent"
        clearable>
        </el-input>
      </div>
      <div class="option option_right">
        <div class="option_name">
          样本标准差：
        </div>
        <el-input
        placeholder="请输入内容"
        v-model="input_biaozhun" 
        class="input"
        @blur="sendMsgToParent"
        clearable>
        </el-input>
      </div>
      <div class="option option_right">
        <div class="option_name">
          偏差绝对值：
        </div>
        <el-input
        placeholder="请输入内容"
        v-model="input_jueduizhi" 
        class="input"
        @blur="sendMsgToParent"
        clearable>
        </el-input>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      input_bodong:'',
      input_biaozhun:'',
      input_jueduizhi:'',
      rightmsg:{}
    }
  },methods:{
     sendMsgToParent(){
          this.rightmsg={
            input_bodong:this.input_bodong,
            input_biaozhun:this.input_biaozhun,
            input_jueduizhi:this.input_jueduizhi
          }
          this.$emit("right",this.rightmsg)
          
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
@import '../../assets/option.css'

</style>
