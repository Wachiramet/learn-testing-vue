<template>
  <div>
    <div>Page</div>
    {{ data }}
    <button @click="sub">Sub</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['data'])
  },
  methods: {
    ...mapActions(['sub'])
  }
}
</script>
