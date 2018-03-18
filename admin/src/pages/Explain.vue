<template>
  <div class="fillcontain">
    <Header></Header>
    <p class="explain_text">Shopping后台管理系统</p>
    <p class="explain_text">使用管理员可以添加，修改，删除信息</p>
  </div>
</template>

<script>
import Header from '@/components/header';
export default {
  components: {
    Header
  }
};
</script>

<style lang="less">
@import '../styles/_mixin.less';
.explain_text{
	margin-top: 20px;
	text-align: center;
	font-size: 20px;
	color: #333;
}
</style>