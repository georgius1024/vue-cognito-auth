<template>
  <v-app>
    <AppBar :isAuthenticated="isAuthenticated" />
    <v-main>
      <v-container class="fill-height align-sm-start align-lg-center">
        <router-view />
      </v-container>
    </v-main>
    <Message v-model="message" :color="color" />
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import AppBar from './components/AppBar'
import Message from './components/Message'
export default {
  name: 'App',
  components: { AppBar, Message },
  data() {
    return {
      message: '',
      color: ''
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  mounted() {
    this.$store.subscribe(mutation => {
      if (mutation.type === 'error') {
        console.log(mutation)
        this.message = mutation.payload
        this.color = 'error'
      }
      if (mutation.type === 'message') {
        this.message = mutation.payload
        this.color = 'info'
      }
    })
  }
}
</script>
