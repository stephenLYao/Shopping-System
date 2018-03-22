<template>
  <v-toolbar dark color="primary">
    <v-btn icon :to="back">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-toolbar-title>{{ name }}</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon to="/carts">
      <v-badge right overlap color="red">
        <span slot="badge">{{ carts_count }}</span>
        <v-icon>shopping_cart</v-icon>
      </v-badge>
    </v-btn>
  </v-toolbar>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props: ['back', 'name'],
  data () {
    return {};
  },
  computed: {
    ...mapState({
      carts_count: state => state.carts.carts_count
    })
  },
};
</script>

<style scoped>
</style>