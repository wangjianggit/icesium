<!--
 * @Author: WangJiang
 * @Date: 2020-06-30 22:38:35
 * @LastEditTime: 2020-07-01 10:31:34
 * @LastEditors: Please set LastEditors
 * @Description: 公共foot
 * @FilePath: /icesium/src/components/app-foot/foot.vue
--> 

<template>
  <div class="foot">
    <span>大数据页脚</span>
  </div>
</template>

<script>
export default {
 
};
</script>

<style lang="scss" scoped>
.foot {
  width: 100%;
  height: 40px;
  background: url('~img/common/footer.png') 0 0 / 100% 100% no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: aqua;
    font-size: 13px;
    transform: translateY(6px); 
  }
}
</style>