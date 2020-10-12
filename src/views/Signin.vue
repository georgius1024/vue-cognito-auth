<template>
  <v-card class="mx-auto" min-width="40vw">
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
      <v-text-field prepend-icon="mdi-key" type="password" v-model="password" placeholder="password" solo />
      <router-link :to="{ name: 'Forgot' }">Forgot password?</router-link>
    </v-card-text>
    <v-card-actions>
      <v-btn :loading="loading" @click="signin" class="primary" block>Sign in</v-btn>
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
      this.setAuthorization(jwtToken)
      this.request({
        method: 'get',
        url: 'subscriber'
      })
        .catch(console.error)
        .finally(this.$router.push({ name: 'Home' }))
    },
    ...mapMutations(['setAuthorization']),
    ...mapActions(['request'])
  }
}
</script>
