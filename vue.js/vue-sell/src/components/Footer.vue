<template>
  <div class="footer">
    <h1>{{ msg }}</h1>
    <button v-on:click="onClickMe">open mouse!</button>
  </div>
</template>

<script>
  export default {
    name: 'footer',
    data () {
      return {
        msg: 'This is a footer.'
      }
    },
    methods: {
      onClickMe: function () {
        this.$emit('child-tell-me-something', this.msg)
      }
    }
  }
</script>

<style scoped>

</style>
