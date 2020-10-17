<template>
  <v-snackbar :value="value" multi-line :color="color" top right timeout="3000">
    {{ value }}

    <template v-slot:action="">
      <v-btn dark icon text @click="$emit('input', false)">
        <v-icon>
          mdi-close
        </v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  name: 'Message',
  props: {
    value: {
      type: [String, Boolean],
      default: false
    },
    color: {
      type: String,
      default: 'info'
    }
  }
}
</script>
