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
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon to="/carts">
        <v-badge right overlap color="red">
          <span slot="badge">{{ carts_count }}</span>
          <v-icon>shopping_cart</v-icon>
        </v-badge>
      </v-btn>
      <v-tabs color="primary" show-arrows slot="extension" grow v-model="tabs">
        <v-tab v-for="(category, index) in categories" :key="index" :to="'#' + category.tag">
          {{ category.name }}
        </v-tab>
        <v-tabs-slider color="white"></v-tabs-slider>
      </v-tabs>
    </v-toolbar>
    <v-tabs-items v-model="tabs" style="margin-top: 110px;">
      <v-tab-item v-for="(category, index) in categories" :key="index" :id="category.tag" router>
        <List :category="category"></List>
      </v-tab-item>
    </v-tabs-items>   
  </div>
</template>

<script>
import { mapState } from 'vuex';
import List from '@/components/list';
import { getCategory } from '@/service/api';

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
      tabs: null,
      drawer: false,
      offset: 0,
      limit: 10,
      category: '',
      categories: [
        {
          name: '推荐',
          tag: 'recommends'
        }
      ],
      lists: [],
    };
  },
  created () {
    try {
      this.getCategories();
    } catch (error) {
      throw Error(err);
    }  
  },
  components: {
    List
  },
  computed: {
    ...mapState({
      carts_count: state => state.carts.carts_count
    })
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