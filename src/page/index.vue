<!--
 * @Author: your name
 * @Date: 2020-06-26 21:55:32
 * @LastEditTime: 2020-06-27 00:15:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icesium/src/page/index.vue
--> 
<template>
  <div class="login-wrapper">
  </div>
</template>
<script>
import Axios from 'axios'
export default {
  data() {
    return {
      option: {},
    };
  },
  mounted() {
    console.log(this.$axios)
    this.fn()
  },
  methods: {
    fn() {
      Axios.post('/api/getToken').then(res =>  {
        console.log(res)
      })
    }
  }
};
</script>
<style lang="scss" >
.login-wrapper {
  width: 100%;
  height: 100%;
  background: url('~img/common/login_bg.png') no-repeat;
  background-size: 100% 100%;
}
</style>