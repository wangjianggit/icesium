<!--
 * @Author: your name
 * @Date: 2020-07-10 11:22:30
 * @LastEditTime: 2020-07-10 23:13:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /icesium/src/page/login.vue
--> 
<template>
  <div class="login-wrapper">
    <div class="section shad3ow">
      <div class="left">
        <img src="~img/login/logo.png" alt="">
        <p>高效</p>
        <span>zhuanzhu</span>
      </div>
      <div class="right">
        <button>8999</button>
        <div class="photo-container">
          <div class="rotate-box">
            <div class="text">
              <h2>这是一个标题</h2>
              <p>这是一段图片相关的简介内容。。</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.login-wrapper {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  background: url("~img/login/login-bg.png") 0 0 / 100% 100% no-repeat;
  .section {
    height: initial;
    margin-right: 10%;
    background-color: rgba(44, 82, 185, 0.616);
    box-shadow: 0 2px 12px rgba(168, 164, 204, 0.801);
    box-sizing: border-box;
    transition: box-shadow 0.5s;
    display: flex;
    justify-content: space-between;
    padding: 20px 60px;
    .left {
      height: 300px;
    }
    .right {
      width: 400px;
      background-color: rgba(240, 230, 140, 0.514);
      transform-style: preserve-3d; /* 3D 转换 */
      transition: 1s ease; /* 转换效果持续 1秒 */
    }
  }

  .photo-container {
    perspective: 1200px; /* 透视视图 */
    width: 45%;
    float: left;
  }
  .rotate-box {
    position: relative;
    transform-style: preserve-3d; /* 3D 转换 */
    transition: 1s ease; /* 转换效果持续 1秒 */
    margin: 10%;
  }
  .text {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    transform: rotateY(180deg) translateZ(1px); /* 反转180度 并设置z轴让其置于图片背面 */
    color: #666;
    text-align: center;
    opacity: 0.06;
    background: rgba(255, 255, 255, 0.9);
    transition: 1s opacity;
  }
  .photo-container:hover .rotate-box {
    transform: rotateX(80deg);
  }
  .photo-container:hover .text {
    opacity: 1;
  }
  .rotate-box:after {
    content: " ";
    display: block;
    width: 100%;
    height: 7vw; /* vw是移动设计备窗体单位*/
    transform: rotateX(90deg);
    background-image: radial-gradient(
      ellipse closest-side,
      rgba(0, 0, 0, 0.05) 0%,
      rgba(0, 0, 0, 0) 100%
    ); /* radial-gradient 是径向渐变 */
  }
}
</style>