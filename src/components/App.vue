<template>
  <div class="app">
    <h1>JR666</h1>
    <div class="bd">
      <p class="desc">Front-End {{name}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      name: 'YY'
    };
  },
  created() {},
}
</script>

<style lang="scss">
  .app {
    h1 {
      color: green;
    }
    .desc {
      color: #f60;
      font-size: 30px;
    }
  }
</style>

