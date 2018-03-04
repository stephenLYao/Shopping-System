<template>
  <Toolbar :name="name" :back="back"></Toolbar>
</template>

<script>
import Toolbar from '@/components/toolbar';

export default {
  data () {
    return {
      name: '商品详情',
      back: '/'
    };
  },
  components: {
    Toolbar
  }
};
</script>

<style scoped>

</style>

