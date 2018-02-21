<template>
  <v-app>
    <v-navigation-drawer fixed app temporary v-model="drawer">
      <v-list>
        <v-list-tile>
          <v-list-tile-content>
              <v-list-tile-title>
                <span>Menu</span>
              </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile ripple router to="/login">
            <v-list-tile-title>Log In</v-list-tile-title>
          </v-list-tile>
          <v-list-tile ripple router to="/signup">
            <v-list-tile-title>Sign Up</v-list-tile-title>
          </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark color="primary" fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Welcome</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>shopping_cart</v-icon>
      </v-btn>
    </v-toolbar>
  </v-app>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      drawer: false
    };
  }
};
</script>

<style>

</style>