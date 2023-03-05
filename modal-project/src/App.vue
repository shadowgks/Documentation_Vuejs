<script setup>
import Modal from "./components/Modal.vue";
</script>

<template>
  <h1>test</h1>
  <button v-on:click="toggleModal">Show Modal</button>
  <div v-if="showModal">
    <Modal v-bind:header="header" :text="text" theme="sale" @close='toggleModal'/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: "added props success",
      text: "Modal Content",
      showModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
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
}
</style>
