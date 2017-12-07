<template>
  <div class="header">
    <h1>{{ msg }}</h1>
    <h2>{{ msgfromfather }}</h2>
    <button v-on:click="onClickMe">Click!</button>
  </div>

</template>

<script>
  export default {
    name: 'header',
    data () {
      return {
        msg: 'This is a header.'
      }
    },
    props: ['msgfromfather'],
    methods: {
      onClickMe: function () {
        console.log(this.msgfromfather)
      }
    }
  }
</script>

<style scoped>

</style>
