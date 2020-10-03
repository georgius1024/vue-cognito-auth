<template>
  <form class="reset">
    <h1>Reset password</h1>
    <input type="text" v-model="code" placeholder="Enter code" />
    <input type="email" v-model="email" placeholder="Enter email" />
    <input type="password" v-model="password" placeholder="Enter password" />
    <div v-if="error">{{ error }}</div>
    <button @click="reset">Reset</button>
  </form>
</template>

<script>
export default {
  name: 'Reset',
  data() {
    return {
      email: '',
      password: '',
      code: '',
      error: ''
    }
  },
  mounted() {
    this.email = this.$route.query.email || ''
  },
  methods: {
    reset() {
      this.error = ''
      this.$store
        .dispatch('confirmPassword', { email: this.email, newPassword: this.password, verificationCode: this.code })
        .then(this.$router.push({ name: 'Signin', query: { email: this.email } }))
        .catch(e => (this.error = e.message))
    }
  }
}
</script>

<style lang="scss">
.reset {
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
