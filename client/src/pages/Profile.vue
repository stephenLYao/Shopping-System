<template>
  <div>
    <Toolbar :showCart="true" :showSearch="true"></Toolbar> 
    <v-card color="primary" dark>
      <v-card-media
        class="white--text"
        height="300px"
        src='http://p4zxobaq9.bkt.clouddn.com/bg.jpg'
      >
        <v-container fluid fill-height>
          <v-layout justify-center>
            <v-flex xs12 sm8 md4>
              <v-avatar size="120px" style="margin-top:70px;">
                <img src="../assets/avatar.jpg" >
              </v-avatar>
              <v-content class="mt-4 headline">
                {{ $store.state.user.username }}
              </v-content>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-media>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Toolbar from '@/components/toolbar';

export default {
  data () {
    return {
    };
  },
  components: {
    Toolbar
  }
};
</script>

<style scoped>
</style>