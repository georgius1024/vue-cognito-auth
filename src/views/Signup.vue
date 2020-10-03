<template>
  <form class="signup">
    <h1>Signup</h1>
    <input type="email" v-model="email" placeholder="Enter email" />
    <input type="password" v-model="password" placeholder="Enter password" />
    <div v-if="error">{{ error }}</div>
    <button @click="signup">Signup</button>
  </form>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    signup() {
      this.error = ''
      this.$store
        .dispatch('signUp', { email: this.email, password: this.password })
        .then(this.$router.push({ name: 'Confirm', query: { email: this.email } }))
        .catch(e => (this.error = e.message))
    }
  }
}
</script>

<style lang="scss">
.signup {
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
