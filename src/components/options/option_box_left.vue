<template>
    <div class="option_son option_box_lef">
        <div class="option">
          <div class="option_name">
            &#12288;方案名称&#12288; ： 
          </div>
          
          <el-input
          placeholder="请输入内容"
          v-model="input_name" 
          class="input"
          @blur="pushmsg"
          clearable>
          </el-input>
        </div>
        <div class="option">
          <div class="option_name">
            测试时间间隔 ：
          </div>
          <el-input
          placeholder="请输入内容"
          v-model="input_setTime" 
          class="input"
          @blur="pushmsg"

          clearable>
          </el-input>
       
        </div>
        <div class="option">
          <div class="option_name">
            &#12288;测试数量&#12288; ：
          </div>
          <el-input
          placeholder="请输入内容"
          v-model="input_num" 
          class="input"
          @blur="pushmsg"

          clearable>
          </el-input>
        </div>
        <div class="option">
          <div class="option_name">
            &#12288;测试总时间 ：
          </div>
          <el-input
         
          placeholder="请输入内容"
          v-model="input_time" 
          class="input"
          @blur="pushmsg"

          clearable>
          </el-input>
        </div>
        <div class="option">
          <div class="option_name">
            &#12288;测试点数&#12288; ：
          </div>
          <el-input
          placeholder="请输入内容"
          v-model="input_pointNum" 
          @blur="pushmsg"
          class="input"
          clearable>
          </el-input>
        </div>
        <div class="option">
          <div class="option_name">
            &#12288;测试数值1&#8194; ：
          </div>
          <el-input
          placeholder="请输入内容"
          v-model="input_test1" 
          @blur="pushmsg"
          class="input"
          clearable>
          </el-input>
        </div>
        <div class="option">
          <div class="option_name">
            &#12288;测试数值2 &#8194;：
          </div>
          <el-input
          placeholder="请输入内容"
          v-model="input_test2" 
          @blur="pushmsg"
          class="input"
          clearable>
          </el-input>
        </div>
        <div class="option">
          <div class="option_name">
            &#12288;测试数值3&#8194; ：
          </div>
          <el-input
          placeholder="请输入内容"
          v-model="input_test3" 
          @blur="pushmsg"
          class="input"
          
          clearable>
          </el-input>
        </div>
      </div>
</template>

<script>
export default {
  props:[
    'msg'
  ]
  ,
    data () {
    return {
      input_name: this.msg,
      input_num:'1',
      input_setTime:'3s',
      input_time:'20s',
      input_pointNum:'3',
      input_test1:'35℃',
      input_test3:'32℃',
      input_test2:'32℃',
      leftmsg:{}
    }
  },
  mounted(){
    
  },
  methods:{
      pushmsg(){
        this.leftmsg={
          input_name:this.input_name,
          input_num:this.input_num,
          input_setTime:this.input_setTime,
          input_time:this.input_time,
          input_pointNum:this.input_pointNum,
          input_test1:this.input_test1,
          input_test2:this.input_test2,
          input_test3:this.input_test3,
        }
        this.$emit("left",this.leftmsg)
      }
  }
}
</script>
<style scoped >
@import '../../assets/option.css'


</style>
