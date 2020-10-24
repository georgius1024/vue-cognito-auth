<template>
  <v-container fill-height align-center justify-center>
    <v-card width="500">
      <v-card-title>
        Error
      </v-card-title>
      <v-card-text>
        <p class="ma-4">
          {{ error }}
        </p>
      </v-card-text>
      <v-card-actions>
        <v-btn to="/" color="primary" block>
          Return to main page
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Error',
  props: {
    error: {
      type: String,
      default: 'Page not found'
    }
  }
}
</script>

<style></style>
