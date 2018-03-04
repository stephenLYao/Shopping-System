<template>
  <v-toolbar dark color="primary">
    <v-btn icon :to="back">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-toolbar-title>{{ name }}</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
export default {
  props: ['back', 'name'],
  data () {
    return {};
  }
};
</script>

<style scoped>
</style>