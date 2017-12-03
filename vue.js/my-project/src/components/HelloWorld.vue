<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="newItem" v-on:keyup.enter="addNewItem"></input>
    <ul>
      <li v-for="item in items" v-bind:class="{finished: item.isFinished}" v-on:click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
  </div>
</template>

<script>
import Store from '../store.js'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello World!',
      items: Store.fetch(),
      newItem: ''
    }

  },
  watch: {
    items: {
      handler: function (items) {
        Store.save(items);
      },
      deep: true
    }
  },
  methods: {
    toggleFinish: function (item) {
      console.log(item);
      item.isFinished = !item.isFinished;
    },
    addNewItem: function() {
      this.items.push({
        label: this.newItem,
        isFinished: false
      })
      this.newItem = '';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to thcnpm is component only -->
<style scoped>
.finished { text-decoration: underline; }
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
