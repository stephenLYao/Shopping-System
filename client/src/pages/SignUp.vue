<template>
  <v-app>
    <Toolbar :name="name" :back="back"></Toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>注册</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <form @keyup.enter="submit">
                  <v-text-field
                    v-model="username"
                    label="Username"
                    name="username"
                    required
                    hint="At least 5 characters."                   
                    min="5"
                    :counter="this.username.length > 0 ? true : false"
                  ></v-text-field>
                  <v-text-field
                    v-model="password1"
                    name="password1"
                    label="Password"
                    hint="At least 6 characters. Mix it up!"
                    :counter="this.password1.length > 0 ? true : false"
                    min="6"
                    :append-icon="pw1 ? 'visibility_off' : 'visibility'"
                    :append-icon-cb="() => (pw1 = !pw1)"
                    :type="pw1 ? 'password' : 'text'"
                    required
                  ></v-text-field>
                  <v-text-field
                    v-model="password2"
                    name="password2"
                    label="Retype Password"
                    hint="Type the exact same thing as last time."
                    :append-icon="pw2 ? 'visibility_off' : 'visibility'"
                    :append-icon-cb="() => (pw2 = !pw2)"
                    :type="pw2 ? 'password' : 'text'"
                    :rules="[passwordsMatch]"
                    required
                  ></v-text-field>
                  <v-btn @click.native="submit">注册</v-btn>
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
import Toolbar from '@/components/toolbar';

export default {
  name: 'login',
  data () {
    return {
      name: '注册',
      back: '/',
      username: '',
      password1: '',
      password2: '',
      pw1: true,
      pw2: true
    };
  },
  components: {
    Toolbar
  },
  computed: {
    passwordsMatch () {
      return this.password1 === this.password2 ? '' : 'Passwords don\'t match';
    }
  },
  methods: {
    submit () {
      this.$store.dispatch('signUp', {
        username: this.username,
        password1: this.password1,
        password2: this.password2
      }).then(() => {
        this.$router.replace({ name: 'login' });
      }).catch((error) => {
        console.log(error);
      });
    }
  }
};
</script>

<style>

</style>

