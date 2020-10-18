<template>
  <v-snackbar
    :value="Boolean(value)"
    multi-line
    :color="color"
    top
    right
    timeout="3000"
    @input="$emit('input', $event)"
  >
    <span v-if="value" v-html="value" />

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
  },
  methods: {
    input(e) {
      console.log(e)
    }
  }
}
</script>
