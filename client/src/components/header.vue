<template>
  <v-app>
    <v-navigation-drawer fixed app temporary v-model="drawer">
      <v-list v-if="!$store.state.user.isAuthenticated">
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="../assets/avatar.jpg" >
          </v-list-tile-avatar>
          <v-list-tile-content>
              <v-list-tile-title>
                您好，请登录
              </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items1" :key="item.title" ripple router :to="item.to">
          <v-list-tile-content>
            <v-list-tile-content>{{ item.title }}</v-list-tile-content>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list v-if="$store.state.user.isAuthenticated">
        <v-list-tile avatar tag="div">
          <v-list-tile-avatar>
            <img src="../assets/avatar.jpg" >
          </v-list-tile-avatar>
          <v-list-tile-content>
              <v-list-tile-title>
                {{ $store.state.user.username }}
              </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items2" :key="item.title" ripple router :to="item.to">
          <v-list-tile-content>
            <v-list-tile-content>{{ item.title }}</v-list-tile-content>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="logOut">
          <v-list-tile-content>
            登出
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark color="primary" fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text"></v-toolbar-title>
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
  data () {
    return {
      drawer: false,
      items1: [
        {
          title: '登录',
          to: '/login'
        },
        {
          title: '注册',
          to: '/signup'
        }
      ],
      items2: [
        {
          title: '个人中心',
          to: ''
        },
        {
          title: '购物车',
          to: ''
        }
      ]
    };
  },
  methods: {
    logOut () {
      this.$store.dispatch('logOut').then(() => {
        this.$router.replace({ name: 'home' });
      }).catch((error) => {
        console.log(error);
      });
    }
  }
};
</script>

<style>

</style>