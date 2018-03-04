<template>
  <div>
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
    <v-toolbar dark color="primary" tabs fixed>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon to="/carts">
        <v-icon>shopping_cart</v-icon>
      </v-btn>
      <v-tabs dark color="primary" show-arrows slot="extension" grow v-model="tabs">
        <v-tab v-for="(category, index) in categories" :key="index" @click="getProducts(category.tag)" :tag="category.tag">
          {{ category.name }}
        </v-tab>
        <v-tabs-slider color="white"></v-tabs-slider>
      </v-tabs>
    </v-toolbar>
    <v-tabs-items v-model="tabs" style="margin-top: 110px;">
      <v-tab-item v-for="(category, index) in categories" :key="index">
        <List :lists="lists" :tag="tag"></List>
      </v-tab-item>
    </v-tabs-items>   
  </div>
</template>

<script>
import { mapState } from 'vuex';
import List from '@/components/list';

export default {
  data () {
    return {
      tabs: null,
      tag: '',
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
          title: '账单',
          to: ''
        }
      ],
      categories: [
        {
          name: '推荐',
          tag: 'recommends'
        },
        {
          name: '服装',
          tag: 'clothes'
        },
        {
          name: '鞋靴',
          tag: 'shoes'
        },
        {
          name: '家电',
          tag: 'appliances'
        },
        {
          name: '运动',
          tag: 'sports'
        },
        {
          name: '美食',
          tag: 'foods'
        },
        {
          name: '家具',
          tag: 'furnitures'
        },
        {
          name: '汽车',
          tag: 'cars'
        }
      ]
    };
  },
  components: {
    List
  },
  computed: {
    ...mapState({
      lists: state => state.products.lists
    })
  },
  methods: {
    logOut () {
      this.$store.dispatch('logOut').then(() => {
        this.$router.push('/');
      }).catch((error) => {
        console.log(error);
      });
    },
    getProducts (tag) {
      this.$store.state.products.lists = [];
      this.$store.dispatch('getProducts', { tag }).then(() => {
        console.log('Get Lists');
      }).catch((error) => {
        console.log(error);
      });
    }
  },
  created () {
    this.getProducts('recommends');
  }
};
</script>

<style scoped>
</style>