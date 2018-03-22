<template>
  <v-app>
    <v-toolbar light >
      <v-btn icon :to="{ name: 'home'}">
        <v-icon color="primary">arrow_back</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content style="background-color: #f6f6f6;">
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>登录</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <form @keyup.enter="submit">
                  <v-text-field
                    v-model="username"
                    name="username"
                    label="username"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    name="password"
                    label="password"
                    type="password"
                  ></v-text-field>
                  <v-btn @click.native="submit" block color="primary">登录</v-btn>
                </form>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    submit () {
      this.$store.dispatch('logIn', {
        username: this.username,
        password: this.password
      }).then(() => {
        this.$router.push('/');
      }).catch((error) => {
        console.log(error);
      });
    }
  }
};
</script>

<style>

</style>

