<template>
  <div>
    <div class="wrapper">
      <div class="wrapper__box">
        <Header />
        <transition name="fade">
          <Nuxt />
        </transition>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    key() {
      return this.$route.name;
    },
  },
  async mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start();
      setTimeout(() => this.$nuxt.$loading.finish(), 3000);
    });
  },
};
</script>
