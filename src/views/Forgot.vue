<template>
  <v-card class="mx-auto" min-width="40vw">
    <v-card-title>
      Enter email to send reset password code
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
    </v-card-text>
    <v-card-actions>
      <v-btn :loading="loading" @click="forgot" class="primary" block>Reset password</v-btn>
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
        .then(this.$router.push({ name: 'Reset', query: { email: this.email } }))
        .catch(e => (this.error = e.message))
        .finally(() => {
          this.loading = false
        })
    }
  }
}
</script>
