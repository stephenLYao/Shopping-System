<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Login form</v-toolbar-title>
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
                  <v-btn @click.native="submit">Log In</v-btn>
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
    }
  },
}
</script>

<style>

</style>

