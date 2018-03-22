<template>
  <div>
    <Toolbar :name="name" :back="back"></Toolbar>
    <v-carousel style="max-height: 330px;">
      <v-carousel-item
        v-for="(item,i) in list.pic_list"
        :key="i"
        :src="imgURL + item"
        transition="fade"
        reverse-transition="fade"
      ></v-carousel-item>
    </v-carousel>
    <v-list>
      <v-list-tile>
        <v-list-tile-title>
          <span class="title">{{ list.name }}</span> 
          <span class="headline" style="float: right;"> ¥ {{list.specs[0].price}} </span>
           
        </v-list-tile-title>
      </v-list-tile>
      <v-divider></v-divider>
      <v-list-tile>
        <v-list-tile-title class="grey--text text--darken-2">
          <span class="caption">月销售：{{ list.month_sales }}</span>
          <span class="caption" style="float: right;">快递：¥{{ list.specs[0].pack_fee }}</span>
        </v-list-tile-title>
      </v-list-tile>
    </v-list>
    <div class="py-3 px-3 text-xs-left"> 
      <p class="title"> 描述 </p>
      <p class="grey--text text--darken-1"> {{ list.desc}} </p>
    </div>
    <v-footer fixed height="45px">
      <v-btn large style="width: 50%;margin: 0;">加入收藏</v-btn>
      <v-btn large color="primary" style="width: 50%;margin: 0;" @click="addToCarts">添加购物车</v-btn>
    </v-footer>
  </div>
</template>

<script>
import Toolbar from '@/components/toolbar';
import { imgURL } from '@/service/url';
export default {
  data () {
    return {
      imgURL,
      name: '商品详情',
      back: '/#' + this.$route.params.tag,
      list: this.$route.params.list,
      price: 0
    };
  },
  components: {
    Toolbar
  },
  methods: {
    addToCarts () {
      this.$store.commit('ADD_CARTS', { list: this.list});
    }
  }
};
</script>

<style scoped>
</style>

