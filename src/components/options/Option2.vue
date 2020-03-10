<template>
  <div class="option_box">
      
        <option-left v-bind:msg="msg"></option-left>
        <option-mid></option-mid>
        <option-rig></option-rig>
      <!-- <div class="option_son option_box_mid"></div> -->
      <!-- <div class="option_son option_box_rig"></div> -->
  </div>
</template>

<script>
import optionLeft from '@/components/options/option_box_left'
import optionMid from '@/components/options/option_box_mid'
import optionRig from '@/components/options/option_box_right'
export default {
  name: 'option2',
  data () {
    return {
      msg: '测试方案2'
    }
  },
  components:{
    optionLeft,optionMid,optionRig
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
@import '../../assets/option.css'

</style>
