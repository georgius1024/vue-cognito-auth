<template>
  <form class="signin">
    <h1>Signin</h1>
    <input type="email" v-model="email" placeholder="Enter email" />
    <input type="password" v-model="password" placeholder="Enter password" />
    <div v-if="error">{{ error }}</div>
    <button @click="signin">Signin</button>
  </form>
</template>

<script>
export default {
  name: 'Signin',
  data() {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  mounted() {
    this.email = this.$route.query.email || ''
  },
  methods: {
    signin() {
      this.error = ''
      this.$store
        .dispatch('authenticateUser', { email: this.email, password: this.password })
        .then(this.success)
        .catch(e => (this.error = e.message))
    },
    success(response) {
      const {
        idToken: { jwtToken }
      } = response
      this.$router.push({ name: 'Home', query: { logged: jwtToken } })
      localStorage.setItem('TOKEN', jwtToken)
    }
  }
}
</script>

<style lang="scss">
.signin {
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
