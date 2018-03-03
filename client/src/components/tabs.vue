<template>
  <v-app>
    <v-tabs v-model="tab" dark color="primary">
      <v-tabs-slider></v-tabs-slider>
      <v-tab v-for="item in items" :key="item">
          {{ item }}
      </v-tab>
    </v-tabs>
  </v-app>
</template>

<script>
export default {
  name: 'tabs',
  data () {
    return {
      tab: '',
      items: [
        '首页',
        ''
      ]
    };
  }
};
</script>

<style>

</style>