<template>
  <v-app>
    <v-toolbar color="primary" dark>
      <v-btn icon :to="{ name: 'home'}">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>注册</v-toolbar-title>
    </v-toolbar>
    <v-content style="background-color: #f6f6f6;">
      <v-container fluid fill-height class="px-0 py-0">
        <v-layout justify-center>
          <v-flex xs12 sm8 md4>
            <v-card flat>
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
                    required
                  ></v-text-field>
                  <v-btn @click.native="submit" block color="primary">提交</v-btn>
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
      name: '',
      back: '/',
      username: '',
      password1: '',
      password2: '',
      pw1: true,
      pw2: true
    };
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
        this.$router.push('/login');
      }).catch((error) => {
        console.log(error);
      });
    }
  }
};
</script>

<style>

</style>

