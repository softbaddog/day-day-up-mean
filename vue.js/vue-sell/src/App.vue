<template>
  <div id="app">
    <p>child tells me: {{ childWords }}</p>
    <Header msgfromfather="you dead "/>
    <OneButton/>
    <Footer v-on:child-tell-me-something="listenToMyBoy"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
import OneButton from './components/OneButton'

export default {
  name: 'app',
  data () {
    return {
      childWords: ''
    }
  },
  components: {
    Header, Footer, OneButton
  },
  methods: {
    listenToMyBoy: function (msg) {
      this.childWords = msg
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
