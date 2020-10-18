<template>
  <v-card class="mx-auto" min-width="40vw">
    <v-card-title>
      Signup
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
        prepend-icon="mdi-key"
        type="password"
        v-model="password"
        label="Password"
        outlined
        hint="At least 6 symbols, must contain upper- lower- case leters and digits"
      />
    </v-card-text>
    <v-card-actions>
      <v-btn large :loading="loading" @click="signup" class="primary" block>
        Sign up
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapMutations } from 'vuex'
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
      if (this.email && this.password) {
        this.error = ''
        this.loading = true
        this.$store
          .dispatch('signUp', {
            email: this.email,
            password: this.password
          })
          .then(() => {
            this.$router.push({ name: 'Confirm', query: { email: this.email } })
            this.showMessage(
              'We send confirmation code to your email. Please check your mailbox (and spam folder)'
            )
          })
          .catch(e => {
            this.error = e.message
            this.showError(e.message)

          })
          .finally(() => (this.loading = false))
      } else {
        this.error = 'Enter email and password'
      }
    },
    ...mapMutations(['showMessage', 'showError'])
  }
}
</script>
