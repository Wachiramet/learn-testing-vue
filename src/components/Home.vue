<template>
  <div>
    <div>Home</div>
    {{ data }}
    <button @click="increment">Add</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['data'])
  },
  methods: {
    ...mapActions(['increment'])
  }
}
</script>
