<template>
  <v-form value="valid" @input="emit">
    <v-text-field
      :error-messages="error"
      type="email"
      name="email"
      v-model="profile.email"
      label="Your email"
      outlined
    />
    <v-text-field
      prepend-icon="mdi-key"
      type="password"
      v-model="password"
      label="Password"
      outlined
      hint="At least 6 symbols, must contain uppercase, lowercase leters and digits"
    />
  </v-form>
</template>

<script>
export default {
  name: 'ProfileEditor',
  props: {
    value: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      profile: {},
      errors: []
    }
  },
  beforeMount() {
    this.fetchDataFromProps()
  },
  beforeUpdate() {
    this.fetchDataFromProps()
  },
  methods: {
    fetchDataFromProps() {
      this.profile = this.value || {}
    },
    emit() {
      this.$emit(this.profile)
    },
    error
  }
}
</script>

<style></style>
