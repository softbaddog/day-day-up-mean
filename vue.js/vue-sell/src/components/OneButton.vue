<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div id="app-5">
      <p>{{ message }}</p>
      <button v-on:click="reverseMessage">逆转消息</button>
    </div>
    <div id="app-6">
      <input v-model="msg">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'body',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        message: '页面加载于 ' + new Date().toLocaleString(),
        seen: true,
        todos: [
          { text: '学习 JavaScript' },
          { text: '学习 Vue' },
          { text: '整个牛项目' }
        ]
      }
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  a {
    color: #42b983;
  }
</style>
