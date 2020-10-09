<template>
  <v-app-bar app color="primary" dark>
    <div class="d-flex align-center">
      <router-link :to="{ name: 'Home' }">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </router-link>
    </div>

    <v-spacer></v-spacer>

    <v-btn :to="{ name: 'Signup' }" text>SignUp</v-btn>
    <v-btn :to="{ name: 'Signin' }" text>SignIn</v-btn>
    <v-btn :to="{ name: 'Confirm' }" text>Confirm</v-btn>
    <v-btn :to="{ name: 'Forgot' }" text>Forgot</v-btn>
  </v-app-bar>
</template>

<script>
export default {}
</script>

<style></style>
