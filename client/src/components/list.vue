<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs6 v-for="list in lists" :key="list.id">
        <v-card>
          <v-card-media
            height="100px"
            :src="list.picUrl"
            contain
            hover
          ></v-card-media>
          <v-card-title>
            <div class="desc">{{ list.desc }}</div>
            <div class="price">¥ {{ list.price }}</div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  props: ['lists'],
  data () {
    return {

    };
  }
};
</script>

<style scoped>
.price {
  font-size: 16px;
  color: #9e9e9e;
}
</style>