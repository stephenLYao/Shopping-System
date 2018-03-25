<template>
  <div>
    <Toolbar back="/carts"></Toolbar>
    <v-container fluid class="px-1 py-0" style="margin-top: 55px;">
      <v-layout row wrap>
        <v-flex xs6>
          <v-subheader class="mt-2">支付方式</v-subheader>
        </v-flex>
        <v-flex xs6>
          <v-select
            :items="tiles"
            v-model="payment"
            label="Select"
            single-line
            bottom
            hide-details
          ></v-select>
        </v-flex>
      </v-layout>
    </v-container>
    <v-divider></v-divider>
    <v-list two-line class="py-0">
      <template v-for="(item, index) in selected">
        <v-list-tile :key="index" class="py-2">
          <v-list-tile-content>
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
            <p class="title" style="margin-top: 10px;width: 100%;">
              <span class="red--text">¥{{ item.specs[0].price}}</span>
              <span style="float: right">x1</span>
            </p>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider :key="'d'+ index"></v-divider>
      </template>
    </v-list>
    <v-footer fixed height="50px" color="primary" dark>
      <div style="width: 100%;" class="text-xs-right mb-0">
        <div class="text-xs-left totals">
          <span>合计：</span>
          <span class="title mr-2">¥ {{ totals }}</span>
        </div>
        <v-btn 
          color="red"
          dark
          class="mr-0" 
          style="height: 50px;width: 130px;"
        >
          确认支付
        </v-btn>
      </div>
    </v-footer>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Toolbar from '@/components/toolbar';

export default {
  data () {
    return {
      sheet: false,
      selected: this.$route.params.selected,
      totals: this.$route.params.totals,
      tiles: ['密码支付', '指纹支付'],
      payment: null
    };
  },
  components: {
    Toolbar
  }
};
</script>

<style scoped>
.totals {
  width: 60%;
  display: inline-block;
}
</style>