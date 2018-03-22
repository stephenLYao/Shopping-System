<template>
  <div>
    <Toolbar :showCart="false" :showSearch="true"></Toolbar> 
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Toolbar from '@/components/toolbar';

export default {
  data () {
    return {
    };
  },
  components: {
    Toolbar
  }
};
</script>

<style scoped>
</style>