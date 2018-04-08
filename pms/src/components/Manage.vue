<template>
  <div id="manage">
    <!-- 开始 页首 -->
    <VHeader></VHeader>

    <div class="clearfix"></div>

    <!-- 开始 主内容 -->
    <VMain></VMain>

    <!-- 开始 页脚 -->
    <VFooter></VFooter>
  </div>
</template>

<script type="text/javascript">
  import VHeader from './public/VHeader.vue';
  import VMain from './public/VMain.vue';
  import VFooter from './public/VFooter.vue';

  export default {
    components: {
      VHeader,
      VMain,
      VFooter,
    },
    name: 'manage',

  };
</script>

<style lang="scss" scoped>
</style>
