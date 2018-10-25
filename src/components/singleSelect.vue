<template>
  <div class="select">
    <div class="select-wrapper">
      <div class="select-header">
        <input v-model="singleVal" type="text" class="title" placeholder="请选择" @click="toSelectSingle" readonly>
        <i class="icon pullup" v-if="showSingle"></i>
        <i class="icon pulldown" v-else></i>
        <i class="icon clear" v-show="singleVal" @click="onCancleSingle"></i>
      </div>
      <transition name="slide">
        <ul class="select-items" v-show="showSingle">
          <li 
            class="select-item" :class="{active:item.label==selectSingle.label}"
            v-for="(item,index) in enumSource" :key="index"
            @click.stop="onSelectSingle(item)">
            {{item.label}}
          </li>
        </ul>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      showSingle:false,
      selectSingle:{},
      enumSource:[
        {
          value:1,
          label:'单选1'
        },
        {
          value:2,
          label:'单选2'
        },
        {
          value:3,
          label:'单选3'
        },
      ]
    }
  },
  computed:{
    singleVal:function(){
      if(this.selectSingle){
        return this.selectSingle.label;
      }else{
        return "";
      }
    }
  },
  methods: {
    toSelectSingle(){
      this.showSingle=!this.showSingle;
    },
    onSelectSingle(item){
      this.selectSingle=item;
      this.showSingle=false;
    },
    onCancleSingle(){
      this.selectSingle={};
    }
  }
}
</script>
<style scoped lang="stylus">
.select
  padding 10px
  .select-wrapper
    width 100%
    .select-header
      width 100%
      border 1px solid rgba(0,0,0,.4);
      border-radius 4px
      height 36px
      position relative
      .title
        width calc(100% - 48px)
        height 100%
        border none
        padding  0 8px
        border-radius 4px
      .icon
        width 16px
        height 16px
        display inline-block
        position absolute
        top 10px
        right 8px
        &.pulldown
          background url('./controls/imgs/pulldown.png') center center no-repeat
        &.pullup
          background url('./controls/imgs/pullup.png') center center no-repeat
        &.clear
          right 32px 
          background url('./controls/imgs/clear.png') center center no-repeat
    .select-items
      width 100%
      border 1px solid rgba(0,0,0,.4);
      padding 8px 0
      border-radius 4px
      margin-top 10px
      max-height 200px
      overflow-y auto
      .select-item
        padding 5px 8px
        &.active
          background-color #f5f7fa
          color #409eff
          font-weight 600
      &.slide-enter-active,&.slide-leave-active
        transition all .5s
        transform-origin top center
      &.slide-enter,&.slide-leave-to
        transform:scaleY(0)
      &.slide-enter-to,&.slide-leave
        transform:scaleY(1)
</style>

