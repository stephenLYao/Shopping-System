<template>
  <div>
    <Toolbar :showCart="true" :showSearch="true"></Toolbar>
    <v-tabs
      color="primary"
      dark
      show-arrows
      slot="extension"
      grow
      v-model="tabs"
      style="margin-top: 55px;position: fixed;z-index: 2;"
    >
      <v-tab v-for="(category, index) in categories" :key="index" :to="'#' + category.tag">
        {{ category.name }}
      </v-tab>
      <v-tabs-slider color="white"></v-tabs-slider>
    </v-tabs>
    <v-tabs-items v-model="tabs" style="margin-top: 103px;">
      <v-tab-item v-for="(category, index) in categories" :key="index" :id="category.tag" router>
        <List :category="category"></List>
      </v-tab-item>
    </v-tabs-items>   
  </div>
</template>

<script>
import { mapState } from 'vuex';
import List from '@/components/list';
import Toolbar from '@/components/toolbar';
import { getCategory } from '@/service/api';

export default {
  data () {
    return {
      tabs: null,
      category: '',
      categories: [
        {
          name: '推荐',
          tag: 'recommends'
        }
      ]
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
    List,
    Toolbar
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
    }
  }
};
</script>

<style scoped>
</style>