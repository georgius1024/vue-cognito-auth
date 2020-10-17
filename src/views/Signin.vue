<template>
  <v-card class="mx-auto" min-width="40vw">
    <v-card-title>
      Signin
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
      />
      <a
        href="#"
        @click.prevent="forgot"
        class="my-4"
        :class="{ disabled: !email }"
      >
        Forgot password?
      </a>
    </v-card-text>
    <v-card-actions>
      <v-btn large :loading="loading" @click="signin" class="primary" block
        >Sign in</v-btn
      >
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
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
      if (this.email && this.password) {
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
      } else {
        this.error = 'Enter email and password'
      }
    },
    success(response) {
      const {
        idToken: { jwtToken }
      } = response
      this.setAuthorization(jwtToken)
      this.request({
        method: 'get',
        url: 'subscriber'
      })
        .catch(console.error)
        .finally(this.$router.push({ name: 'Home' }))
    },
    forgot() {
      if (this.email) {
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
      } else {
        this.error = 'Enter email and password'
      }
    },
    ...mapMutations(['setAuthorization']),
    ...mapActions(['request'])
  }
}
</script>
<style lang="scss">
a.disabled {
  color: #333;
  cursor: not-allowed;
}
</style>
