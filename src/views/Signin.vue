<template>
  <v-card class="mx-auto">
    <v-card-title>
      Signin
    </v-card-title>
    <v-card-text>
      <v-text-field
        prepend-icon="mdi-at"
        :error-messages="error"
        type="text"
        name="email"
        v-model="email"
        placeholder="email"
        solo
      />
      <v-text-field prepend-icon="mdi-lock-reset" type="password" v-model="password" placeholder="password" solo />
      <v-btn :loading="loading" @click="signin" class="primary" block>Sign in</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Signin',
  data() {
    return {
      email: '',
      password: '',
      error: '',
      loading: false
    }
  },
  mounted() {
    this.email = this.$route.query.email || ''
  },
  methods: {
    signin() {
      this.error = ''
      this.loading = true
      this.$store
        .dispatch('authenticateUser', {
          email: this.email,
          password: this.password
        })
        .then(this.success)
        .catch(e => (this.error = e.message))
        .finally(() => (this.loading = false))
    },
    success(response) {
      const {
        idToken: { jwtToken }
      } = response
      this.$router.push({ name: 'Home', query: { logged: jwtToken } })
      localStorage.setItem('TOKEN', jwtToken)
    }
  }
}
</script>
