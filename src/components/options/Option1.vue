<template>
  <div class="option_box">
      
        <!-- <option-left v-bind:msg="msg"
        v-on:left="getleft"
        ></option-left>
        <option-mid
        v-on:mid="getmid"
        ></option-mid>
        <option-rig 
        v-on:right="getright"
        
        ></option-rig>
        <div class="btn">
          <el-button type="primary" @click="pullAll">保存方案</el-button>
        </div> -->


        
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="方案一" name="first">

            <option-Page1 v-bind:msg="msg"></option-Page1>

          </el-tab-pane>
          <el-tab-pane label="方案二" name="second"><option-Page1 v-bind:msg="msg2"></option-Page1></el-tab-pane>
          <el-tab-pane label="方案三" name="third"><option-Page1 v-bind:msg="msg3"></option-Page1></el-tab-pane>
          <el-tab-pane label="方案四" name="fourth"><option-Page1 v-bind:msg="msg4"></option-Page1></el-tab-pane>
        </el-tabs>
        <div  style="width:100px;position:absolute;right:280px">报警范围设置</div>
  </div>
</template>

<script>
import optionPage1 from '@/components/options/option_page1'

export default {
  name: 'HelloWorld',

  data () {
    return {
      msg: '测试方案1',
      msg2:'测试方案2',
      msg3:'测试方案3',
      msg4:'测试方案4',
      activeName: 'first'

      
    }
  },
  components:{
    optionPage1
  },
  methods:{
    handleClick(tab, event) {
        console.log(tab, event);
      }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
@import '../../assets/option.css'

</style>
