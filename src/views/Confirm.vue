<template>
  <v-card class="mx-auto">
    <v-card-title>
      Confirm registration code
    </v-card-title>
    <v-card-text>
      <v-text-field prepend-icon="mdi-at" type="text" name="email" v-model="email" placeholder="email" solo />
      <v-text-field
        prepend-icon="mdi-key"
        :error-messages="error"
        type="text"
        name="code"
        v-model="code"
        placeholder="000000"
        solo
        label="Enter confirmation code"
      />
      <v-btn :loading="loading" @click="resend" text class="my-4">Resend registration code</v-btn>

      <v-btn :loading="loading" @click="confirm" class="primary" block>Confirm</v-btn>

    </v-card-text>
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
        .then(
          this.$router.push({
            name: 'Signin',
            query: { email: this.email }
          })
        )
        .catch(e => (this.error = e.message))
        .finally(() => (this.loading = false))
    },
    resend() {
      this.error = ''
      this.loading = true
      this.$store
        .dispatch('resendConfirmationCode', {
          email: this.email
        })
        .catch(e => (this.error = e.message))
        .finally(() => (this.loading = false))
    }
  }
}
</script>

<style lang="scss">
.confirm {
  max-width: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  input {
    display: block;
    padding: 12px;
  }
  button {
    margin-top: 12px;
    display: block;
    padding: 6px;
  }
  .error {
    background-color: yellow;
    color: red;
    padding: 6px;
    border: 1px solid red;
    text-align: center;
  }
}
</style>
