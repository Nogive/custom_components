<template>
  <div class="area">
    <h1>value:{{endVal}}</h1>
    <div class="input-wrapper" @click="openArea">
      <input v-model="inputText" type="text" class="title" :placeholder="placeholder || '选择省市区'">
      <i class="icon clear" v-show="inputText!=''&&mergeConfig.clearable" @click.stop="clearArea"></i>
    </div>
    <div class="area-wrapper" v-show="areaOn">
      <van-area 
        v-model="endVal" 
        :area-list="mergeConfig.areaList" 
        :columns-num="mergeConfig.columns"
        ref="area"
        @confirm="confirmArea"
        @change="changeArea"
        @cancel="cancelArea" />
    </div>
  </div>
</template>
<script>
import areaList from "./data/area"
export default {
  data () {
    return {
      value:"120000",
      endVal:'',//最终结果
      placeholder:'',
      areaOn:false,
      inputText:'',//显示数据
      mergeConfig:{
        areaList:areaList,
        columns:3,
        clearable:true
      }
    }
  },
  mounted(){
    if(this.value){
      this.endVal=this.value;
      let areas=this.$refs['area'].getValues();
      this.setInputText(areas);
    }
  },
  methods: {
    openArea(){//展开
      this.areaOn=!this.areaOn;
    },
    clearArea(){//clear按钮
      this.$refs['area'].reset();
      this.endVal="";
      this.inputText="";
    },
    confirmArea(areas){//点击确认
      this.endVal=areas[areas.length-1].code;
      this.setInputText(areas);
      this.areaOn=false;
    },
    changeArea(area){
      // let areas=area.getValues();
      // this.endVal=areas[areas.length-1].code;
      // this.setInputText(areas);
    },
    cancelArea(){
      this.$refs['area'].reset();
      this.endVal="";
    },
    setInputText(areas){
      console.log(areas);
      let text="";
      areas.forEach(e=>{
        text+=e.name+' ';
      })
      this.inputText=text;
    }
  }
}
</script>
<style scoped lang="stylus">
.area
  padding 10px
  .input-wrapper
    width 100%
    height 36px
    border 1px solid rgba(0,0,0,.4)
    border-radius 4px
    position relative
    .title
      width 100%
      height 100%
      border none
      padding  0 8px
      border-radius 4px
      background transparent
    .icon
      width 16px
      height 16px
      display inline-block
      position absolute
      top 10px
      right 8px
      &.clear 
        background url('../assets/clear.png') center center no-repeat
  .area-wrapper
    position fixed
    width 100%
    left 0
    bottom 0
</style>

