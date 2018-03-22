<template>
  <div>
    <Toolbar :showHome="true"></Toolbar>
    <v-list two-line style="margin: 50px 0;">
      <template v-for="(item, index) in carts_list">
        <v-list-tile :key="index" class="py-4">
          <v-list-tile-action style="min-width: 30px;">
            <v-checkbox v-model="selected" :value="index + 'c' + item.specs[0].price"></v-checkbox>
          </v-list-tile-action>
          <div class="pic">
            <img :src="imgURL + item.pic_list[0]">
          </div>
          <v-list-tile-content style="height: 80px;">
            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
            <v-list-tile-sub-title class="title" style="margin-top: 10px;"> ¥{{ item.specs[0].price}}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn icon ripple @click="handleDelete(index)">
              <v-icon color="red lighten-1">close</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
        <v-divider :key="'d'+ index"></v-divider>
      </template>
    </v-list>
    <v-footer fixed height="50px">
      <v-checkbox class="selectAll" label="全选" v-model="selectAll" hide-details></v-checkbox>
      <p style="width: 70%;" class="text-xs-right mb-0">
        <span>合计：</span>
        <span class="title red--text">¥ {{ totals }}</span>
        <v-btn color="primary" dark class="mr-0" style="height: 50px;width: 130px;" :to="{ name: 'order', params: { totals: totals } }">
          结算
        </v-btn>
      </p>
    </v-footer>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Toolbar from '@/components/toolbar';
import { imgURL } from '@/service/url';

export default {
  name: 'carts',
  data () {
    return {
      imgURL,
      selected: []
    };
  },
  components: {
    Toolbar
  },
  computed: {
    ...mapState({
      carts_list: state => state.carts.carts_list
    }),
    totals: function () {
      return this.selected.reduce((counts, item) => {
        const price = String(item).split('c')[1];
        return counts += Number(price);
      }, 0);
    },
    selectAll: {
      set: function (value) {
        const selected = [];
        if (value) {
          this.carts_list.forEach((item, index) => {
            selected.push(index + 'c' + item.specs[0].price);
          });
        }
        this.selected = selected;
      },
      get: function () {
        return this.carts_list ? this.carts_list.length === this.selected.length : false; 
      }
    }
  },
  methods: {
    handleDelete (index) {
      this.$store.commit('REMOVE_CARTS', { index: index });
    }
  }
};
</script>

<style scoped>
.pic {
  width: 120px;
  height: 100px;
  margin-right: 20px;
}
.pic img {
  width: 100%;
  height: 100%;
}
.selectAll {
  margin-left: 20px;
}
</style>
