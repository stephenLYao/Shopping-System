<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs6 v-for="(list, index) in lists" :key="index" >
        <v-card :to="{ name: 'detail', params: { id: list.id }}">
          <v-card-media
            height="100px"
            :src="list.picUrl"
            contain
            hover
          ></v-card-media>
          <v-card-title>
            <v-content class="desc">{{ list.desc }}</v-content>
            <v-content class="price">¥ {{ list.price }}</v-content>
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