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
      <!-- <div class="option_son option_box_mid"></div> -->
      <!-- <div class="option_son option_box_rig"></div> -->
  </div>
</template>

<script>
import optionLeft from '@/components/options/option_box_left'
import optionMid from '@/components/options/option_box_newmid'
import optionRig from '@/components/options/option_box_right'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '测试方案1',
      
    }
  },
  components:{
    optionLeft,optionMid,optionRig
  },
  methods:{
    getright(msg){
          console.log(msg)
      },
    getleft(msg){
          console.log(msg)
    },
    getmid(msg){
          console.log(msg)
    }
    
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
@import '../../assets/option.css'


</style>
