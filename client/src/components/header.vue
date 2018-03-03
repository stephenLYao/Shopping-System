<template>
  <v-app>
    <v-navigation-drawer fixed app temporary v-model="drawer">
      <v-card color="primary" dark>
        <!-- src="http://p4zxobaq9.bkt.clouddn.com/bg.jpg" -->
        <v-card-media
          class="white--text"
          height="200px"
          src=''
        >
          <v-container fluid fill-height>
            <v-layout align-center justify-center>
              <v-flex xs12 sm8 md4>
                <v-avatar size="60px">
                  <img src="../assets/avatar.jpg" >
                </v-avatar>
                <v-content class="mt-4 subheading">
                    {{ $store.state.user.isAuthenticated ? `Hello! ${$store.state.user.username}` : "您好，请登录" }}
                </v-content>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
      </v-card>
      <v-list v-if="!$store.state.user.isAuthenticated">
        <v-list-tile v-for="item in items1" :key="item.title" ripple router :to="item.to">
          <v-list-tile-content>
            <v-list-tile-content>{{ item.title }}</v-list-tile-content>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
      <v-list v-if="$store.state.user.isAuthenticated">
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
      <v-btn icon to="/carts">
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
          to: '/profile'
        },
        {
          title: '购物车',
          to: '/carts'
        },
        {
          title: '购物记录',
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