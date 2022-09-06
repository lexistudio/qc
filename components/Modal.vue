<template>
  <div class="modal">
    <div class="modal__bg" v-on:click.prevent="close"></div>
    <div class="modal__content">
      <div class="modal__close fas fa-times" v-on:click.prevent="close"></div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    close() {
      this.$emit("close", false);
    },
  },
};
</script>
