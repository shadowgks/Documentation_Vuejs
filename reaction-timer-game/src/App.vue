<template>
  <h1>Reaction Timer</h1>
  <button class="btn-start" :disabled='isplayin' v-on:click="start">Start</button>
  <Block v-if="isplayin" v-bind:delay="delay"/>
</template>

<script>
import Block from './components/Block.vue';
export default {
  components: { Block },
  data() {
    return {
      delay: null,
      isplayin: false,
    };
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isplayin = true;
      console.log(this.delay);
    },
  },
};
</script>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
.btn-start{
  width: 100%;
  padding: 10px;
  background-color: brown;
  color: #fff;
  border: none;
  cursor: pointer;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
button:disabled{
    cursor: not-allowed;
}
</style>
