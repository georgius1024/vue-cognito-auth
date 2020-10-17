<template>
  <v-card class="mx-auto" min-width="40vw">
    <v-card-title>
      Set new password
    </v-card-title>
    <v-card-text>
      <v-text-field
        prepend-icon="mdi-lock-reset"
        :error-messages="error"
        type="text"
        name="code"
        v-model="code"
        placeholder="000000"
        solo
        label="Enter verification code"
      />
      <v-text-field
        prepend-icon="mdi-at"
        type="email"
        name="email"
        v-model="email"
        placeholder="email"
        solo
      />
      <v-text-field
        prepend-icon="mdi-key"
        type="password"
        name="password"
        v-model="password"
        placeholder="new password"
        solo
      />
    </v-card-text>
    <v-card-actions>
      <v-btn :loading="loading" @click="reset" class="primary" block
        >Set new password</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Reset',
  data() {
    return {
      email: '',
      password: '',
      code: '',
      error: '',
      loading: false
    }
  },
  mounted() {
    this.email = this.$route.query.email || ''
    console.log(this.code)
  },
  methods: {
    reset() {
      this.error = ''
      this.$store
        .dispatch('confirmPassword', {
          email: this.email,
          newPassword: this.password,
          verificationCode: this.code
        })
        .then(
          this.$router.push({ name: 'Signin', query: { email: this.email } })
        )
        .catch(e => (this.error = e.message))
    }
  }
}
</script>
