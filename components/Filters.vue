<template>
  <div>
    <div class="filter-btn" @click="isFilter = isFilter != true ? true : false">
      <span v-if="!isFilter">Все</span>
      <span v-else>Скрыть</span>
      категории
    </div>

    <ul class="filter" :class="{ active: isFilter }">
      <li
        v-for="(categorie, index) in categories"
        :key="categorie.id"
        class="filter__li"
      >
        <div
          class="filter__name"
          :class="{ active: !categorie.categories.length }"
        >
          {{ categorie.name }}
        </div>
        <ul v-if="categorie.categories.length" class="filter-two">
          <li v-for="(categori, ind) in categorie.categories" :key="categori.id" class="filter-two__li">
            <a href="#" class="filter-two__name" @click.prevent="sortCategories({ ind, index }), $emit('resetSearch', ''), isFilter = false" v-if="categori.catalog.catalogs.length">
              {{ categori.name }}
            </a>
            <span v-else>
              {{ categori.name }}
            </span>
          </li>
        </ul>
        <ul
          v-if="categorie.brend.length && categorie.brend[0].brends.length"
          class="filter-two"
        >
          <li v-for="brend in categorie.brend[0].brends" :key="brend.id" class="filter-two__li">
            <a href="#" class="filter-two__name" @click.prevent="sortBrend(brend.id), $emit('resetSearch', ''), isFilter = false">
              {{ brend.name }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: {
    categories: {
      type: Array,
      default: [],
    },
  },
  data: () => ({
    isFilter: false
  }),
  methods: mapActions({
    sortCategories: 'catalogs/sortCategories',
    sortBrend: 'catalogs/sortBrend'
  })
};
</script>