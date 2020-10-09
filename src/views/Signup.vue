<template>
  <v-card class="mx-auto">
    <v-card-title>
      Signup
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
      <v-btn :loading="loading" @click="signup" class="primary" block>Sign up</v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {
      email: '',
      password: '',
      error: '',
      loading: false
    }
  },
  methods: {
    signup() {
      this.error = ''
      this.loading = true
      this.$store
        .dispatch('signUp', {
          email: this.email,
          password: this.password
        })
        .then(this.$router.push({ name: 'Confirm', query: { email: this.email } }))
        .catch(e => (this.error = e.message))
        .finally(() => (this.loading = false))
    }
  }
}
</script>
