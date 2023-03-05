<script setup>
import Modal from "./components/Modal.vue";
import Modal2 from "./components/Modal.vue";
</script>

<template>
  <h1>test</h1>
  <button v-on:click.shift="toggleModal">Show Modal(shift)</button>
  <button v-on:click="toggleModal2">Show Modal2</button>
  <teleport to='.modals' v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="">Google</a>
        <a href="">Facebook</a>
      </template>
      <!-- <h1>VueJS</h1> -->
    </Modal>
  </teleport>

  <!-- Challenge -->
  <teleport to='.modals' v-if="showModal2">
    <Modal2 @close="toggleModal2">
      <template v-slot:links2>
        <a href="">Modal2</a>
      </template>
    </Modal2>
  </teleport>
</template>

<script>
export default {
  data() {
    return {
      header: "added props success",
      text: "Modal Content",
      showModal: false,
      showModal2: false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2;
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
