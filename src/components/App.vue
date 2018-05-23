<template>
  <div class="app">
    <h1>JR666</h1>
    <div class="bd">
      <input type="text" v-model="name" placeholder="input something">
      <p class="desc" @click="output">Front-End {{name}}</p>
      <img src="../img/silver_ka.png" alt="">
    </div>
  </div>
</template>

<script>
import util from '../js/common/util';

export default {
  name: 'app',
  data() {
    return {
      name: '',
    };
  },
  created() {},
  methods: {
    output() {
      console.log(util.sum(3, 4));
    },
  },
};
</script>

<style lang="scss">
.app {
  h1 {
    color: green;
    font-family: 'dincond';
    font-size: 40px;
  }
  .desc {
    width: 200px;
    height: 400px;
    color: #f60;
    font-size: 30px;
    background-image: url(../img/red_rain_pc.png);
    background-repeat: no-repeat;
  }
}
</style>

