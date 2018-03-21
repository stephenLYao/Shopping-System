<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs6 v-for="(list, index) in lists" :key="index">
        <v-card :to="{ name: 'detail', params: { id: list.id }}"  style="padding: 10px;">
          <v-card-media
            height="100px"
            :src="imgURL + list.pic_list[0]"
            contain
            hover
          ></v-card-media>
          <v-card-title>
            <v-content class="name">{{ list.name }}</v-content>
          </v-card-title>
          <div class="price text-xs-left">¥ {{ list.specs[0].price }}</div>
          <div class="price text-xs-right" style="margin-top: -24px;">售 {{ list.month_sales }}</div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import qs from 'qs';
import { getProductsList } from '@/service/api';
import { imgURL } from '@/service/url';
export default {
  props: ['category'],
  data () {
    return {
      imgURL,
      lists: []
    };
  },
  created () {
    try {
      if (this.category === '推荐') {
        this.getRecommends();
      } else {
        this.getProducts(this.category);
      }
    } catch (error) {
      throw Error(err);
    }  
  },
  methods: {
    async getProducts (name) {
      try {
        const res = await getProductsList(qs.stringify({ category: name, offset: this.offset, limit: this.limit }));
        this.lists = res.data.products;
      } catch (error) {
        throw Error('获取列表错误');
      }
    },
    async getRecommends () {

    }
  }
};
</script>

<style scoped>
.price {
  font-size: 16px;
  color: #9e9e9e;
}
</style>