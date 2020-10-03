<template>
  <form class="forgot">
    <h1>Forgot</h1>
    <input type="email" v-model="email" placeholder="Enter email" />
    <div v-if="error">{{ error }}</div>
    <button @click="forgot">Restore</button>
  </form>
</template>

<script>
export default {
  name: 'forgot',
  data() {
    return {
      email: '',
      error: ''
    }
  },
  methods: {
    forgot() {
      this.error = ''
      this.$store
        .dispatch('forgotPassword', { email: this.email })
        .then(this.$router.push({ name: 'Reset', query: { email: this.email } }))
        .catch(e => (this.error = e.message))
    }
  }
}
</script>

<style lang="scss">
.forgot {
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
