<template>
  <v-card class="mx-auto" min-width="40vw">
    <v-card-title>
      Forgot password
    </v-card-title>
    <v-card-subtitle>
      Enter email to send password reset code
    </v-card-subtitle>
    <v-card-text>
      <v-text-field
        prepend-icon="mdi-at"
        :error-messages="error"
        type="email"
        name="email"
        v-model="email"
        label="Your email"
        outlined
      />
    </v-card-text>
    <v-card-actions>
      <v-btn :loading="loading" @click="forgot" class="primary" block
        >Reset password</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'forgot',
  data() {
    return {
      email: '',
      error: '',
      loading: false
    }
  },
  methods: {
    forgot() {
      this.error = ''
      this.$store
        .dispatch('forgotPassword', { email: this.email })
        .then(
          this.$router.push({ name: 'Reset', query: { email: this.email } })
        )
        .catch(e => (this.error = e.message))
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
