<!--
 * @Author: your name
 * @Date: 2020-06-26 21:55:32
 * @LastEditTime: 2020-07-18 15:32:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icesium/src/page/index.vue
--> 
<template>
  <div class="login-wrapper ">
    <div class="wrap">
      <ul>
          <li v-for="i in 10" :key="i"></li>
      </ul>
    </div>
    <a-form-model ref="formInline" :model="formInline" :rules="ruleInline" v-bind="layout">
      <a-form-model-item has-feedback label="" prop="username">
        <a-input v-model="formInline.username" type="text" autocomplete="off" />
      </a-form-model-item>
      <a-form-model-item has-feedback label="" prop="password">
        <a-input v-model="formInline.password" type="password" autocomplete="off" />
      </a-form-model-item>
      <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="handleSubmit3('ruleForm')">
          Submit
        </a-button>
      </a-form-model-item>
    </a-form-model>

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
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  mounted() {
  },
  methods: {
    handleSubmit3() {
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
    },

  }
};
</script>
<style lang="scss" scoped>
.login-wrapper {
  width: 100%;
  height: 100%;
  background: url("~img/common/login_bg.png") no-repeat;
  background-size: 100% 100%;

  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font: 16px/20px microsft yahei;
  }
  .wrap {
    width: 100%;
    height: 100%;
    padding: 10% 0;
    position: fixed;
    opacity: 0.8;
    background: linear-gradient(to bottom right, #000000b4, #656565be);
    background: -webkit-linear-gradient(to bottom right, #50a3a2, #53e3a6);
  }
  .container {
    width: 60%;
    margin: 0 auto;
  }
          .container h1 {
    text-align: center;
    color: #ffffff;
    font-weight: 500;
  }
  .container input {
    width: 320px;
    display: block;
    height: 36px;
    border: 0;
    outline: 0;
    padding: 6px 10px;
    line-height: 24px;
    margin: 32px auto;
    -webkit-transition: all 0s ease-in 0.1ms;
    -moz-transition: all 0s ease-in 0.1ms;
    transition: all 0s ease-in 0.1ms;
  }
  .container input[type="text"],
  .container input[type="password"]   {
    background-color: #ffffff;
    font-size: 16px;
    color: #50a3a2;
  }
  .container input[type="submit"] {
    font-size: 16px;
    letter-spacing: 2px;
    color: #666666;
    background-color: #ffffff;
  }
  .container input:focus {
    width: 340px;
    transition: width 0.4s;
  }
  .container input[type="submit"]:hover {
    cursor: pointer;
    width: 400px;
    transition: width 0.4s;
  }
  .to_login {
    color: #a7c4c9;
  }
  .text {
    color: #e2dfe4;
  }
  .wrap ul {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -20;
  }
  .wrap ul li {
    list-style-type: none;
    display: block;
    position: absolute;
    bottom: -120px;
    width: 15px;
    height: 15px;
    z-index: -8;
    border-radius: 50%;
    box-shadow: inset -30px -30px 75px rgba(0, 0, 0, 0.2),
      inset 0px 0px 5px rgba(0, 0, 0, 0.5),
      inset -3px -3px 5px rgba(0, 0, 0, 0.5), 0 0 20px rgba(255, 255, 255, 0.75);
    background-color: rgba(255, 255, 255, 0.15);
    animotion: square 25s infinite;
    -webkit-animation: square 25s infinite;
  }
  .wrap ul li:nth-child(1) {
    left: 0;
    animation-duration: 10s;
    -moz-animation-duration: 10s;
    -o-animation-duration: 10s;
    -webkit-animation-duration: 10s;
  }
  .wrap ul li:nth-child(2) {
    width: 40px;
    height: 40px;
    left: 10%;
    animation-duration: 15s;
    -moz-animation-duration: 15s;
    -o-animation-duration: 15s;
    -webkit-animation-duration: 11s;
  }
  .wrap ul li:nth-child(3) {
    left: 20%;
    width: 25px;
    height: 25px;
    animation-duration: 12s;
    -moz-animation-duration: 12s;
    -o-animation-duration: 12s;
    -webkit-animation-duration: 12s;
  }
  .wrap ul li:nth-child(4) {
    width: 50px;
    height: 50px;
    left: 30%;
    -webkit-animation-delay: 3s;
    -moz-animation-delay: 3s;
    -o-animation-delay: 3s;
    animation-delay: 3s;
    animation-duration: 12s;
    -moz-animation-duration: 12s;
    -o-animation-duration: 12s;
    -webkit-animation-duration: 12s;
  }
  .wrap ul li:nth-child(5) {
    width: 60px;
    height: 60px;
    left: 40%;
    animation-duration: 10s;
    -moz-animation-duration: 10s;
    -o-animation-duration: 10s;
    -webkit-animation-duration: 10s;
  }
  .wrap ul li:nth-child(6) {
    width: 75px;
    height: 75px;
    left: 50%;
    -webkit-animation-delay: 7s;
    -moz-animation-delay: 7s;
    -o-animation-delay: 7s;
    animation-delay: 7s;
  }
  .wrap ul li:nth-child(7) {
    left: 60%;
    width: 30px;
    height: 30px;
    animation-duration: 8s;
    -moz-animation-duration: 8s;
    -o-animation-duration: 8s;
    -webkit-animation-duration: 8s;
  }
  .wrap ul li:nth-child(8) {
    width: 90px;
    height: 90px;
    left: 70%;
    -webkit-animation-delay: 4s;
    -moz-animation-delay: 4s;
    -o-animation-delay: 4s;
    animation-delay: 4s;
  }
  .wrap ul li:nth-child(9) {
    width: 50px;
    height: 50px;
    left: 80%;
    animation-duration: 20s;
    -moz-animation-duration: 20s;
    -o-animation-duration: 20s;
    -webkit-animation-duration: 20s;
  }
  .wrap ul li:nth-child(10) {
    width: 75px;
    height: 75px;
    left: 90%;
    -webkit-animation-delay: 6s;
    -moz-animation-delay: 6s;
    -o-animation-delay: 6s;
    animation-delay: 6s;
    animation-duration: 30s;
    -moz-animation-duration: 30s;
    -o-animation-duration: 30s;
    -webkit-animation-duration: 30s;
  }
  @keyframes square {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      bottom: 400px;
      -webkit-transform: translateY(-500);
      transform: translateY(-500);
    }
  }
  @-webkit-keyframes square {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
    100% {
      bottom: 400px;
      -webkit-transform: translateY(-500);
      transform: translateY(-500);
    }
  }
}
</style>