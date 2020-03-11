<template>
  <div class="option_son option_box_mid">
      <div class="option_box">
          <div class="option_name_mid">赋值点数量 ： </div>
          <el-input
          placeholder="请输入内容"
          v-model="number" 
          class="input_point"
          size="small"
          @blur="pull"
          clearable>
          </el-input>
      </div>
      
      <div class="option_setting">
          <div class="setting_box" v-if='num1'>
              <div class="black">
                  <div class="tit">黑　&#12288;体 : </div>
                  
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num1_black">
              </div>
              <div class="now">
                  <div class="tit">实际温度 : </div>
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num1_now">
                  
              </div>
          </div>
          <div class="setting_box"  v-if='num2'>
              <div class="black">
                  <div class="tit">黑　&#12288;体 : </div>
                  
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num2_black">
              </div>
              <div class="now">
                  <div class="tit">实际温度 : </div>
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num2_now">
                  
              </div>
          </div>
          <div class="setting_box"  v-if='num3'>
              <div class="black">
                  <div class="tit">黑　&#12288;体 : </div>
                  
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num3_black">
              </div>
              <div class="now">
                  <div class="tit">实际温度 : </div>
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num3_now">
                  
              </div>
          </div>
          <div class="setting_box"  v-if='num4'>
              <div class="black">
                  <div class="tit">黑　&#12288;体 : </div>
                  
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num4_black">
              </div>
              <div class="now">
                  <div class="tit">实际温度 : </div>
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num4_now">
                  
              </div>
          </div>
          <div class="setting_box"  v-if='num5'>
              <div class="black">
                  <div class="tit">黑　&#12288;体 : </div>
                  
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num5_black">
              </div>
              <div class="now">
                  <div class="tit">实际温度 : </div>
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num5_now">
                  
              </div>
          </div>
          <div class="setting_box"  v-if='num6'>
              <div class="black">
                  <div class="tit">黑　&#12288;体 : </div>
                  
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num6_black">
              </div>
              <div class="now">
                  <div class="tit">实际温度 : </div>
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num6_now">
                  
              </div>
          </div>
          <div class="setting_box"  v-if='num7'>
              <div class="black">
                  <div class="tit">黑　&#12288;体 : </div>
                  
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num7_black">
              </div>
              <div class="now">
                  <div class="tit">实际温度 : </div>
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num7_now">
                  
              </div>
          </div>
          <div class="setting_box"  v-if='num8'>
              <div class="black">
                  <div class="tit">黑　&#12288;体 : </div>
                  
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num8_black">
              </div>
              <div class="now">
                  <div class="tit">实际温度 : </div>
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num8_now">
                  
              </div>
          </div>
          <div class="setting_box"  v-if='num9'>
              <div class="black">
                  <div class="tit">黑　&#12288;体 : </div>
                  
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num9_black">
              </div>
              <div class="now">
                  <div class="tit">实际温度 : </div>
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num9_now">
                  
              </div>
          </div>
          <div class="setting_box"  v-if='num10'>
              <div class="black">
                  <div class="tit">黑　&#12288;体 : </div>
                  
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num10_black">
              </div>
              <div class="now">
                  <div class="tit">实际温度 : </div>
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num10_now">
                  
              </div>
          </div>
          <div class="setting_box"  v-if='num11'>
              <div class="black">
                  <div class="tit">黑　&#12288;体 : </div>
                  
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num11_black">
              </div>
              <div class="now">
                  <div class="tit">实际温度 : </div>
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num11_now">
                  
              </div>
          </div>
          <div class="setting_box"  v-if='num12'>
              <div class="black">
                  <div class="tit">黑　&#12288;体 : </div>
                  
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num12_black">
              </div>
              <div class="now">
                  <div class="tit">实际温度 : </div>
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num12_now">
                  
              </div>
          </div>
          <div class="setting_box"  v-if='num13'>
              <div class="black">
                  <div class="tit">黑　&#12288;体 : </div>
                  
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num13_black">
              </div>
              <div class="now">
                  <div class="tit">实际温度 : </div>
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num13_now">
                  
              </div>
          </div>
          <div class="setting_box"  v-if='num14'>
              <div class="black">
                  <div class="tit">黑　&#12288;体 : </div>
                  
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num14_black">
              </div>
              <div class="now">
                  <div class="tit">实际温度 : </div>
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num14_now">
                  
              </div>
          </div>
          <div class="setting_box"  v-if='num15'>
              <div class="black">
                  <div class="tit">黑　&#12288;体 : </div>
                  
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num15_black">
              </div>
              <div class="now">
                  <div class="tit">实际温度 : </div>
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num15_now">
                  
              </div>
          </div>
          <div class="setting_box"  v-if='num16'>
              <div class="black">
                  <div class="tit">黑　&#12288;体 : </div>
                  
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num16_black">
              </div>
              <div class="now">
                  <div class="tit">实际温度 : </div>
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num16_now">
                  
              </div>
          </div>
          <div class="setting_box"  v-if='num17'>
              <div class="black">
                  <div class="tit">黑　&#12288;体 : </div>
                  
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num17_black">
              </div>
              <div class="now">
                  <div class="tit">实际温度 : </div>
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num17_now">
                  
              </div>
          </div>
          <div class="setting_box"  v-if='num18'>
              <div class="black">
                  <div class="tit">黑　&#12288;体 : </div>
                  
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num18_black">
              </div>
              <div class="now">
                  <div class="tit">实际温度 : </div>
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num18_now">
                  
              </div>
          </div>
          <div class="setting_box"  v-if='num19'>
              <div class="black">
                  <div class="tit">黑　&#12288;体 : </div>
                  
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num19_black">
              </div>
              <div class="now">
                  <div class="tit">实际温度 : </div>
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num19_now">
                  
              </div>
          </div>
          <div class="setting_box"  v-if='num20'>
              <div class="black">
                  <div class="tit">黑　&#12288;体 : </div>
                  
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num20_black">
              </div>
              <div class="now">
                  <div class="tit">实际温度 : </div>
                  <input type="number" class="black_num" @blur="pull" min="30" max="45" v-model="num20_now">
                  
              </div>
          </div>
    </div>  
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      number:4,
      num1:true,num2:true,num3:true,num4:true,num5:false,
      num6:false,num7:false,num8:false,num9:false,num10:false,
      num11:false,num12:false,num13:false,num14:false,num15:false,
      num16:false,num17:false,num18:false,num19:false,num20:false,
      num1_black:'',num1_now:'',
      num2_black:'',num2_now:'',
      num3_black:'',num3_now:'',
      num4_black:'',num4_now:'',
      num5_black:'',num5_now:'',
      num6_black:'',num6_now:'',
      num7_black:'',num7_now:'',
      num8_black:'',num8_now:'',
      num9_black:'',num9_now:'',
      num10_black:'',num10_now:'',
      num11_black:'',num11_now:'',
      num12_black:'',num12_now:'',
      num13_black:'',num13_now:'',
      num14_black:'',num14_now:'',
      num15_black:'',num15_now:'',
      num16_black:'',num16_now:'',
      num17_black:'',num17_now:'',
      num18_black:'',num18_now:'',
      num19_black:'',num19_now:'',
      num20_black:'',num20_now:'',
    midmsg:{}
    }
  },
  methods:{
      pull(){
          console.log(this)
          this.midmsg={
              number:this.number,
              num1_black:this.num1_black,
              num1_now:this.num1_now,
              num2_black:this.num2_black,
              num2_now:this.num2_now,
              num3_black:this.num3_black,
              num3_now:this.num3_now,
              num4_black:this.num4_black,
              num4_now:this.num4_now,
              num5_black:this.num5_black,
              num5_now:this.num5_now,
              num6_black:this.num6_black,
              num6_now:this.num6_now,
              num7_black:this.num7_black,
              num7_now:this.num7_now,
              num8_black:this.num8_black,
              num8_now:this.num8_now,
              num9_black:this.num9_black,
              num9_now:this.num9_now,
              num10_black:this.num10_black,
              num10_now:this.num10_now,
              num11_black:this.num11_black,
              num11_now:this.num11_now,
              num12_black:this.num12_black,
              num12_now:this.num12_now,
              num13_black:this.num13_black,
              num13_now:this.num13_now,
              num14_black:this.num14_black,
              num14_now:this.num14_now,
              num15_black:this.num15_black,
              num15_now:this.num15_now,
              num16_black:this.num16_black,
              num16_now:this.num16_now,
              num17_black:this.num17_black,
              num17_now:this.num17_now,
              num18_black:this.num18_black,
              num18_now:this.num18_now,
              num19_black:this.num19_black,
              num19_now:this.num19_now,
              num20_black:this.num20_black,
              num20_now:this.num20_now,

          }
          this.$emit("mid",this.midmsg)
      },
      
      show(){
                  
          if(this.number==1){
          this.num1=true
      }else if(this.numbe==2){
          this.num1=true
          this.num2=true
        //   console.log(111)
      }else if(this.number==3){
          this.num1=true
          this.num2=true
          this.num3=true
        //   console.log(111)

      }else if(this.number==4){
          this.num1=true
          this.num2=true
          this.num3=true
          this.num4=true
      }else if(this.number==5){
          this.num1=true
          this.num2=true
          this.num3=true
          this.num4=true
          this.num5=true
      }else if(this.number==6){
          this.num1=true
          this.num2=true
          this.num3=true
          this.num4=true
          this.num5=true
          this.num6=true
      }else if(this.number==7){
          this.num1=true
          this.num2=true
          this.num3=true
          this.num4=true
          this.num5=true
          this.num6=true
          this.num7=true
      }else if(this.number==8){
          this.num1=true
          this.num2=true
          this.num3=true
          this.num4=true
          this.num5=true
          this.num6=true
          this.num7=true
          this.num8=true
      }else if(this.number==9){
          this.num1=true
          this.num2=true
          this.num3=true
          this.num4=true
          this.num5=true
          this.num6=true
          this.num7=true
          this.num8=true
          this.num9=true
      }else if(this.number==10){
          this.num1=true
          this.num2=true
          this.num3=true
          this.num4=true
          this.num5=true
          this.num6=true
          this.num7=true
          this.num8=true
          this.num9=true
          this.num10=true
          
      }else if(this.number==11){
          this.num1=true
          this.num2=true
          this.num3=true
          this.num4=true
          this.num5=true
          this.num6=true
          this.num7=true
          this.num8=true
          this.num9=true
          this.num10=true
          this.num11=true
      }else if(this.number==12){
          this.num1=true
          this.num2=true
          this.num3=true
          this.num4=true
          this.num5=true
          this.num6=true
          this.num7=true
          this.num8=true
          this.num9=true
          this.num10=true
          this.num11=true
          this.num12=true
      }else if(this.number==13){
          this.num1=true
          this.num2=true
          this.num3=true
          this.num4=true
          this.num5=true
          this.num6=true
          this.num7=true
          this.num8=true
          this.num9=true
          this.num10=true
          this.num11=true
          this.num12=true
          this.num13=true
      }else if(this.number==14){
          this.num1=true
          this.num2=true
          this.num3=true
          this.num4=true
          this.num5=true
          this.num6=true
          this.num7=true
          this.num8=true
          this.num9=true
          this.num10=true
          this.num11=true
          this.num12=true
          this.num13=true
          this.num14=true
      }else if(this.number==15){
          this.num1=true
          this.num2=true
          this.num3=true
          this.num4=true
          this.num5=true
          this.num6=true
          this.num7=true
          this.num8=true
          this.num9=true
          this.num10=true
          this.num11=true
          this.num12=true
          this.num13=true
          this.num14=true
          this.num15=true
      }else if(this.number==16){
          this.num1=true
          this.num2=true
          this.num3=true
          this.num4=true
          this.num5=true
          this.num6=true
          this.num7=true
          this.num8=true
          this.num9=true
          this.num10=true
          this.num11=true
          this.num12=true
          this.num13=true
          this.num14=true
          this.num15=true
          this.num16=true
      }else if(this.number==17){
          this.num1=true
          this.num2=true
          this.num3=true
          this.num4=true
          this.num5=true
          this.num6=true
          this.num7=true
          this.num8=true
          this.num9=true
          this.num10=true
          this.num11=true
          this.num12=true
          this.num13=true
          this.num14=true
          this.num15=true
          this.num16=true
          this.num17=true
      }else if(this.number==18){
          this.num1=true
          this.num2=true
          this.num3=true
          this.num4=true
          this.num5=true
          this.num6=true
          this.num7=true
          this.num8=true
          this.num9=true
          this.num10=true
          this.num11=true
          this.num12=true
          this.num13=true
          this.num14=true
          this.num15=true
          this.num16=true
          this.num17=true
          this.num18=true
      }else if(this.number==19){
          this.num1=true
          this.num2=true
          this.num3=true
          this.num4=true
          this.num5=true
          this.num6=true
          this.num7=true
          this.num8=true
          this.num9=true
          this.num10=true
          this.num11=true
          this.num12=true
          this.num13=true
          this.num14=true
          this.num15=true
          this.num16=true
          this.num17=true
          this.num18=true
          this.num19=true
      }else if(this.number==20){
          this.num1=true
          this.num2=true
          this.num3=true
          this.num4=true
          this.num5=true
          this.num6=true
          this.num7=true
          this.num8=true
          this.num9=true
          this.num10=true
          this.num11=true
          this.num12=true
          this.num13=true
          this.num14=true
          this.num15=true
          this.num16=true
          this.num17=true
          this.num18=true
          this.num19=true
          this.num20=true
      }else{
          this.num1=false
          this.num2=false
          this.num3=false
          this.num4=false
          this.num5=false
          this.num6=false
          this.num7=false
          this.num8=false
          this.num9=false
          this.num10=false
          this.num11=false
          this.num12=false
          this.num13=false
          this.num14=false
          this.num15=false
          this.num16=false
          this.num17=false
          this.num18=false
          this.num19=false
          this.num20=false
      }
      }
},
updated(){
    //   console.log(this.number)
      this.show()
     
    if(this.numbe==2){
        // this.number=2
        console.log(this.number)
          this.num1=true
          this.num2=true
        //   console.log(111)
      }
      
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
@import '../../assets/option.css'

</style>
