<template>
  <v-form v-model="valid" ref="form">
    <v-text-field
      v-model="profile.phone"
      type="phone"
      name="phone"
      label="Phone number"
      outlined
      :rules="[validation.required, validation.phone]"
      @input="input"
    />
    <v-text-field
      v-model="profile.name"
      type="text"
      name="name"
      label="Full name"
      outlined
      :rules="[validation.required, validation.min(6)]"
      @input="input"
    />
    <v-text-field
      v-model="profile.nick"
      type="text"
      name="nick"
      label="Nickname"
      outlined
      :rules="[validation.required]"
      @input="input"
    />
  </v-form>
</template>

<script>
import validation from '../utils/Validation'

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
      errors: [],
      valid: false,
      validation
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
      this.profile = { ...this.value } || {}
      this.valid = true
    },
    input() {
      this.$emit('input', this.profile)
      this.$refs.form.validate()
      this.$emit('valid', this.valid)
    }
  }
}
</script>

<style></style>
