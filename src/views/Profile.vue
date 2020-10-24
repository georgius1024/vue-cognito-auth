<template>
  <v-card class="mx-auto" min-width="40vw">
    <v-card-title>
      {{ create ? 'Create profile' : 'Profile' }}
    </v-card-title>
    <v-card-text>
      <ProfileForm v-model="profile" />
    </v-card-text>
    <v-card-actions>
      <v-btn large :loading="loading" @click="update" class="primary" block>
        Save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
import ProfileForm from '../components/ProfileForm'
export default {
  name: 'Profile',
  components: { ProfileForm },
  data() {
    return {
      profile: {
        id: '',
        email: '',
        name: '',
        phone: '',
        nick: ''
      },
      loading: false
    }
  },
  computed: {
    ...mapGetters(['userId', 'userEmail', 'user']),
    create() {
      return !this.user
    }
  },
  beforeMount() {
    for (let key in this.profile) {
      this.profile[key] = ''
    }
    if (!this.create) {
      this.request({
        method: 'get',
        url: 'subscriber'
      })
        .then(user => {
          this.profile = { ...user }
        })
        .catch(this.showError)
    } else {
      this.$store.dispatch('getUserAttributes').then(() => {
        this.profile.id = this.userId
        this.profile.email = this.userEmail
      })
    }
  },
  methods: {
    update() {
      this.loading = true
      this.request({
        method: this.create ? 'post' : 'put',
        data: this.profile,
        url: 'subscriber'
      })
        .then(user => {
          this.setUser(user)
          this.showMessage('Profile saved')
          this.$router.push({ name: 'Home' })
        })
        .catch(this.showError)
        .finally(() => (this.loading = false))
    },
    ...mapMutations(['showMessage', 'showError', 'setUser']),
    ...mapActions(['request'])
  }
}
</script>
