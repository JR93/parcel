<template>
  <div class="app">
    <h1>JR666</h1>
    <div class="bd">
      <input type="text" v-model="name" placeholder="input something">
      <p class="desc" @click="output">Front-End {{name}}</p>
    </div>
  </div>
</template>

<script>
import util from '../js/common/util'

export default {
  name: 'app',
  data () {
    return {
      name: ''
    }
  },
  methods: {
    output () {
      console.log(util.sum(3, 4))
    }
  }
}
</script>

<style lang="scss">
.app {
  h1 {
    color: green;
    font-family: 'dincond';
    font-size: 40px;
  }
  .desc {
    color: #f60;
    font-size: 30px;
  }
}
</style>

