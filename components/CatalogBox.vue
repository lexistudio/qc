<template>
  <div>
    <div class="catalog" :class="classes">
      <n-link
        :to="`catalog/${catalog.id}`"
        class="catalog__item"
        v-for="catalog in catalogs"
        :key="catalog.id"
      >
        <div class="catalog__img">
          <div class="catalog__noimg" v-if="!catalog.img">
            <i class="fas fa-camera"></i>
          </div>
          <div v-else class="catalog__img-details">
            <img
              :src="`https://api.qlc-it.ru${catalog.img.url}`"
              :alt="catalog.name"
            />
          </div>
        </div>
        <div class="catalog__body">
          <h3 class="catalog__title">
            {{ catalog.name }}
          </h3>
        </div>
      </n-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classes: {
      type: String,
      default: "",
    },
    catalogs: {
      type: Array,
      default: [],
    }
  },
};
</script>
