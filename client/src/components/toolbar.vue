<template>
  <div>
    <v-navigation-drawer fixed app temporary v-model="drawer">
      <v-card color="primary" dark>
        <v-card-media
          class="white--text"
          height="200px"
          src='http://p4zxobaq9.bkt.clouddn.com/bg.jpg'
        >
          <v-container fluid fill-height>
            <v-layout align-center justify-center>
              <v-flex xs12 sm8 md4>
                <v-avatar size="60px">
                  <img src="../assets/avatar.jpg" >
                </v-avatar>
                <v-content class="mt-4 subheading">
                    {{ $store.state.user.isAuthenticated ? `Hello! ${$store.state.user.username}` : "您好，请先登录" }}
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
          <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
          <v-list-tile-content>
            {{ item.title }}
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="logOut">
          <v-list-tile-content>
            登出
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark color="primary" tabs fixed>
      <v-btn v-if="back" icon :to="back">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-side-icon v-else @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-btn icon v-show="showSearch">
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon to="/" v-show="showHome">
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn icon to="/carts" v-show="showCart">
        <v-badge right overlap color="red">
          <span slot="badge">{{ carts_count }}</span>
          <v-icon>shopping_cart</v-icon>
        </v-badge>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  props: ['back', 'showCart', 'showHome', 'showSeach'],
  data () {
    return {
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
          icon: 'person',
          to: '/profile'
        },
        {
          title: '购物车',
          icon: 'shopping_cart',
          to: '/carts'
        },
        {
          title: '订单',
          icon: 'payment',
          to: ''
        }
      ],
      drawer: false,
    };
  },
  computed: {
    ...mapState({
      carts_count: state => state.carts.carts_count
    })
  },
  methods: {
    logOut () {
      this.$store.dispatch('logOut').then(() => {
        this.$router.push('/');
      }).catch((error) => {
        console.log(error);
      });
    }
  }
};
</script>

<style scoped>
</style>