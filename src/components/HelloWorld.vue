<template>
  <div>
    <button @click="info">info</button>
    <button @click="success">success</button>
    <button @click="error">error</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    info() {
      this.$toast.info('Hello World', 2000)
    },
    success() {
      this.$toast.success('Hello World', 3000)
    },
    error() {
      this.$toast('Hello World', {
        type: 'error'
      })
    }
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
