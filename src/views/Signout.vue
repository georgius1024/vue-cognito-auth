<template>
  <p>Signing out...</p>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'SignOut',
  beforeMount() {
    this.$store.dispatch('signOut').then(() => {
      this.logout()
      this.$router.push({ name: 'Home' })
    })
  },
  methods: {
    ...mapMutations(['logout'])
  }
}
</script>
