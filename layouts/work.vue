<template>
  <div>
    <div class="wrapper">
      <div class="wrapper__box">
        <Header>
          <div class="container">
            <div class="title-work-head">
              <h1 class="title-work">
                <span v-if="key === 'about'"> О нас </span>
                <span v-else-if="key === 'catalog'"> Каталог </span>
                <span v-else-if="key === 'warranty'"> Гарантии </span>
                <span v-else-if="key === 'recommended'"> Нас рекомендуют </span>
                <span v-else-if="key === 'articles'"> Статьи и новости </span>
                <span v-else-if="key === 'contacts'"> Контакты </span>
                <span v-else-if="key === 'info'"> Согласие на обработку персональных данных пользователей </span>
              </h1>
            </div>
          </div>
        </Header>
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
