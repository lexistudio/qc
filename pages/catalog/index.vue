<template>
  <div class="container">
    <form class="search" @submit.prevent="searchCatalogs(search), isPreloaderBtn = false">
      <input
        type="text"
        placeholder="Поиск по парт номерам"
        class="form-fields"
        v-model.trim="search"
        required
      />
      <button class="search-btn">
        <i class="fas fa-search"></i>
      </button>
    </form>

    <Filters :categories="categories" @resetSearch="resetSearch" />

    <CatalogBox
      classes="catalog--work"
      :catalogs="catalogs"
      v-if="catalogs.length"
    />
    <div v-else>
      <div class="content">
        <p>Нет записей...</p>
      </div>
    </div>

    <div v-if="preloader" class="preloader"></div>
    <div @click="pageCatalog" v-if="count < counts && isPreloaderBtn" class="preloader-btn">Показать еще</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  layout: "work",
  head: {
    title: "Каталог",
  },
  data: () => ({
    search: '',
    isPreloaderBtn: true
  }),
  computed: mapGetters({
    catalogs: "catalogs/getCatalogs",
    categories: "catalogs/getCategories",
    preloader: 'catalogs/getPreloader',
    count: 'catalogs/getCount',
    counts: 'catalogs/getCounts'
  }),
  methods: {
    ...mapActions({
      searchCatalogs: 'catalogs/searchCatalogs',
      pageCatalog: 'catalogs/pageCatalog'
    }),
    resetSearch() {
      this.search = '',
      this.isPreloaderBtn = false
    }
  },
  async fetch({ store }) {
    await new Promise((resolve) => setTimeout(() => resolve(), 500));
    await store.dispatch("catalogs/fetch", { count: 8 });
    await store.dispatch("catalogs/categories");
    await store.dispatch("catalogs/counts");
    await store.dispatch("catalogs/resetCount");
  },
};
</script>
