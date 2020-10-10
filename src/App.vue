<template>
  <v-app>
    <AppBar :isAuthenticated="isAuthenticated"/>
    <v-main>
      <v-container class="fill-height">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import {mapGetters} from 'vuex'
import AppBar from './components/AppBar'
export default {
  name: 'App',
  components: { AppBar },
  data: () => ({
    //
  }),
  computed: {
    ...mapGetters(['isAuthenticated'])
  }
}
</script>
