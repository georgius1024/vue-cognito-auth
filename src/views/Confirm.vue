<template>
  <v-card class="mx-auto" min-width="40vw">
    <v-card-title>
      Confirm email
    </v-card-title>
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
      <v-text-field
        prepend-icon="mdi-lock-reset"
        type="text"
        name="code"
        v-model="code"
        outlined
        label="Your code"
        hint="Enter confirmation code from message"
      />
      <a
        href="#"
        @click.prevent="resend"
        class="my-4"
        :class="{ disabled: !email }"
      >
        Resend registration code
      </a>
    </v-card-text>
    <v-card-actions>
      <v-btn :loading="loading" @click="confirm" class="primary" block>
        Confirm
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'Confirm',
  data() {
    return {
      email: '',
      code: '',
      error: '',
      loading: false
    }
  },
  mounted() {
    this.email = this.$route.query.email || ''
  },
  methods: {
    confirm() {
      this.error = ''
      this.loading = true
      this.$store
        .dispatch('confirmRegistration', {
          email: this.email,
          verificationCode: this.code
        })
        .then(() =>
          this.$router.push({
            name: 'Signin',
            query: { email: this.email }
          })
        )
        .catch(e => (this.error = e.message))
        .finally(() => (this.loading = false))
    },
    resend() {
      if (this.email) {
        this.error = ''
        this.loading = true
        this.$store
          .dispatch('resendConfirmationCode', {
            email: this.email
          })
          .catch(e => (this.error = e.message))
          .finally(() => (this.loading = false))
      } else {
        this.error = 'Enter email'
      }
    }
  }
}
</script>

<style lang="scss">
a.disabled {
  color: #333;
  cursor: not-allowed;
}
</style>
