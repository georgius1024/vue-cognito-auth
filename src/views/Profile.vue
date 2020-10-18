<template>
  <v-card class="mx-auto" min-width="40vw">
    <v-card-title>
      Profile
    </v-card-title>
    <v-card-text>
      <ProfileForm v-model="profile" />
    </v-card-text>
    <v-card-actions>
      <v-btn large :loading="loading" @click="update" class="primary" block>
        Update
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapMutations } from 'vuex'
import ProfileForm from '../components/ProfileForm'
export default {
  name: 'Profile',
  components: { ProfileForm },
  data() {
    return {
      profile: {
        name: '',
        phone: '',
        nick: ''
      },
      loading: false
    }
  },
  mounted() {
    this.$store.dispatch('getUserAttributes').then(console.log)
  },
  methods: {
    update() {
      this.loading = true
      setTimeout((this.loading = false), 1000)
    },
    ...mapMutations(['showMessage', 'showError'])
  }
}
</script>
