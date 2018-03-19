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
      <v-tabs color="primary" show-arrows slot="extension" grow v-model="tabs">
        <v-tab v-for="(category, index) in categories" :key="index" @click="getProducts(category.name)" :href="'#tab-' + index">
          {{ category.name }}
        </v-tab>
        <v-tabs-slider color="white"></v-tabs-slider>
      </v-tabs>
    </v-toolbar>
    <v-tabs-items v-model="tabs" style="margin-top: 110px;">
      <v-tab-item v-for="(category, index) in categories" :key="index" :id="'tab-' + index">
        <List :lists="lists" :category="category.name"></List>
      </v-tab-item>
    </v-tabs-items>   
  </div>
</template>

<script>
import qs from 'qs';
import { mapState } from 'vuex';
import List from '@/components/list';
import { getCategory, getProductsList } from '@/service/api';

export default {
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
      tabs: null,
      drawer: false,
      offset: 0,
      limit: 10,
      category: '',
      categories: [],
      lists: [],
    };
  },
  async created () {
    try {
      await this.getCategories();
      await this.getProducts(this.categories[0].name);
    } catch (error) {
      throw Error(err);
    }
    
  },
  components: {
    List
  },

  methods: {
    async getCategories () {
      try {
        const res = await getCategory();
        if (res.status === 200) {
          res.data.categories.forEach((item) => {
            this.categories.push({
              name: item.name,
              tag: item.tag
            });
          });
        }
      } catch (error) {
        throw Error(error);
      }
    },
    async getProducts (name) {
      try {
        const res = await getProductsList(qs.stringify({ category: name, offset: this.offset, limit: this.limit }));
        this.lists = res.data.products;
      } catch (error) {
        throw Error('获取列表错误');
      }
    },
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