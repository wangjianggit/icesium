<!--
 * @Author: your name
 * @Date: 2020-06-26 21:55:32
 * @LastEditTime: 2020-06-30 16:33:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icesium/src/page/index.vue
--> 
<template>
  <div>
    <button @click="show">进入</button>
    <button @click="hide">离开</button>

    <transition enter-active-class="animate__animated animate__bounceInDown" leave-active-class="animate__animated animate__bounceOutRight">
      <div class='content' v-show="isShow">
        <p>我是动画显示的内容</p>
        <!-- <div class="animate__animated animate__bounce animate__delay-2s">Example</div> -->
      </div>
    </transition>
    <!-- <a-button type="primary">
      Primary
    </a-button> -->
  </div>
</template>
<script>
import animate from 'animate.css'
export default {
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    show() {
      this.isShow = true
    },
    hide() {
      this.isShow = false
    }
  }
}
</script>
<style lang="scss" >
// import @'../../node_modules/animate.css/animate.css'
.index {
  color: #000;
}
</style>