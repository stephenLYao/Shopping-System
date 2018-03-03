<template>
  <v-app>
    <Header />
    <Tabs />
  </v-app>
</template>

<script>
import Header from '@/components/header';
import Tabs from '@/components/tabs';

export default {
  name: 'home',
  data () {
    return {};
  },
  components: {
    Header,
    Tabs
  }
};
</script>

<style>

</style>