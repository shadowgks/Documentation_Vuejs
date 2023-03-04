<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>

<template>
  <header>
    <input type="text" ref="test" />
    <button v-on:click="buttonAddClass">Submit</button>
    <img
      alt="Vue logo"
      class="logo"
      src="./assets/logo.svg"
      width="125"
      height="125"
    />
    <div class="wrapper">
      <HelloWorld msg="You did it Yeep!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<script>
export default {
  methods: {
    buttonAddClass() {
      this.$refs.test.classList.add('active')
      console.log(this.$refs.test);
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

  h1 {
    color: red;
  }
}
</style>
