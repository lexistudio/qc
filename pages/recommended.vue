<template>
  <div class="container">
    <div class="doc">
      <div
        class="doc__item"
        v-for="recommended in getRecommendeds"
        :key="recommended.id"
      >
        <img :src="`https://api.qlc-it.ru${recommended.img.formats.small.url}`" :alt="recommended.name" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Modal from "~/components/Modal.vue";
export default {
  components: { Modal },
  layout: "work",
  head: {
    title: "Нас рекомендуют",
  },
  computed: mapGetters({
    getRecommendeds: 'recommended/getRecommendeds'
  }),
  async fetch({ store }) {
    await new Promise(resolve => setTimeout(() => resolve(), 500))
    await store.dispatch('recommended/fetch')
  }
};
</script>
