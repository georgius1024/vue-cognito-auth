<template>
  <h1>Home</h1>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Home',
  mounted() {
    this.request({
      method: 'get',
      url: 'subscriber'
    })
      .then(console.log)
      .catch(console.error)
  },
  methods: {
    ...mapActions(['request'])
  }
}
</script>
<style lang="scss">
.home {
  padding: 12px;
  a {
    margin: 4px;
  }
}
</style>
