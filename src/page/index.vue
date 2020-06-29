<!--
 * @Author: your name
 * @Date: 2020-06-26 21:55:32
 * @LastEditTime: 2020-06-28 20:59:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icesium/src/page/index.vue
--> 
<template>
  <div class="index">
    <button @click="show2=!show2">点我展示效果</button>

    <!-- <transition enter-active-class="rotateIn" leave-active-class="rotateOut">
      <p v-show="show2" class="animated fadeInRight bounce">
        llppp
      </p>
    </transition> -->
    <transition-group enter-active-class="fade" leave-active-class="fade">
              <p v-show="show2" class="animated fadeInLeft" :key="1">222</p>
              <p v-show="show2" class="animated bounceOut" :key="2">4444</p>
            </transition-group>

            <div class="song">
        <p id="f" ref="f" @click='fade' :class="[add ? 'fade' : 'bounceOut']">hello</p>
    </div>

  <div class="rotateIn" style="animation-duration:2s;animation-delay:1s;animation-iteration-count:1;animation-fill-mode:both;"></div>
<div class="fadeInLeft" style="opacity:0;animation-duration:3s;animation-delay:2s;animation-iteration-count:1;animation-fill-mode:both;"></div>
<div class="fadeInUp" style="opacity:0;animation-duration:3s;animation-delay:3s;animation-iteration-count:1;animation-fill-mode:both;"></div>


  </div>
</template>
<script>
import Axios from 'axios'
import animate from 'animate.css'
export default {
  data() {
    return {
      option: {},
      show2: false,
      add: true
    };
  },
  mounted() {
    
  },
  methods: {
    
    fade() {
      this.add = !this.add
      // this.$refs.f.addClass('animated bounceOutLeft')
    }
  }
};
</script>
<style lang="scss" >
// import @'../../node_modules/animate.css/animate.css'
.index {
  color: #000;
}
</style>