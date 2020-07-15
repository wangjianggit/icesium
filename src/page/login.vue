<!--
 * @Author: your name
 * @Date: 2020-06-26 21:55:32
 * @LastEditTime: 2020-07-15 19:35:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icesium/src/page/index.vue
--> 
<template>
  <div class="login-wrapper">
    <div>
      <i-form ref='formInline' :model="formInline" :rules="ruleInline" inline>
        <Form-item prop="username">
          <i-input type="text" v-model="formInline.username" placeholder="Username">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </i-input>
        </Form-item>
        <Form-item prop="password">
          <i-input type="password" v-model="formInline.password" placeholder="Password">
            <Icon type="ios-locked-outline" slot="prepend"></Icon>
          </i-input>
        </Form-item>
        <Form-item>
          <i-button type="primary" @click="handleSubmit">登录</i-button>
        </Form-item>
      </i-form>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      formInline: {
        username: "ee",
        password: "eerrrrrr"
      },
      ruleInline: {
        username: [{ required: true, message: "请填写用户名", trigger: "blur" }],
        password: [
          { required: true, message: "请填写密码", trigger: "blur" },
          {
            type: "string",
            min: 6,
            message: "密码长度不能小于6位",
            trigger: "blur"
          }
        ]
      }
    };
  },
  mounted() {
  },
  methods: {
    handleSubmit() {
      return
      this.$refs.formInline.validate(valid => {
        if (valid) {
          this.$store.dispatch('Login', this.formInline).then(res => {
            // this.loading = false
            console.log(res)
            this.$router.push({ path: this.redirect || '/' })
          }).catch(err => {
            console.log(err)
          })
        } else {
          this.$Message.info('非法登陆');
          return false
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.login-wrapper {
  width: 100%;
  height: 100%;
  background: url("~img/common/login_bg.png") no-repeat;
  background-size: 100% 100%;
}
</style>