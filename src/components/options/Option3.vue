<template>
  <div class="option_box">
      
       <option-left v-bind:msg="msg"
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
        </div>
  </div>
</template>

<script>
import optionLeft from '@/components/options/option_box_left'
import optionMid from '@/components/options/option_box_mid'
import optionRig from '@/components/options/option_box_right'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '测试方案3',
      optionmsg:{},
      rightMsg:{},
      leftMsg:{},
      midMsg:{},
    }
  },
  components:{
    optionLeft,optionMid,optionRig
  },
  methods:{
    getright(msg){
          console.log(msg)
          this.rightMsg={
            right:msg
          }
          

      },
    getleft(msg){
          console.log(msg)
          this.leftMsg={
            left:msg
          }
          
    },
    getmid(msg){
          console.log(msg)
          this.midMsg={
            mid:msg
          }
          
    },
    pullAll(){
      this.optionmsg={
        right:this.rightMsg,
        mid:this.midMsg,
        left:this.leftMsg
      }
      console.log(this.optionmsg)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
@import '../../assets/option.css'

</style>
