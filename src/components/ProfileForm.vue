<template>
  <form>
    <v-text-field
      prepend-icon="mdi-at"
      :error-messages="error"
      type="email"
      name="email"
      v-model="email"
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
  </form>
</template>

<script>
export default {
  name: 'ProfileEditor',
  props: {
    value: {
      type: Object,
      required: true
    }
  }
}
</script>

<style></style>
