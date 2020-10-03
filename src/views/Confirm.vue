<template>
  <form class="confirm">
    <h1>Enter confirm code</h1>
    <input type="text" v-model="code" placeholder="Enter code" />
    <div v-if="error">{{ error }}</div>
    <button @click="confirm">Confirm</button>
  </form>
</template>

<script>
export default {
  name: 'Confirm',
  data() {
    return {
      code: '085178',
      error: ''
    }
  },
  methods: {
    confirm() {
      this.error = ''
      this.$store
        .dispatch('confirmRegistration', { email: this.$route.query.email, verificationCode: this.code })
        .then(this.$router.push({ name: 'Signin', query: { email: this.$route.query.email } }))
        .catch(e => (this.error = e.message))
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
