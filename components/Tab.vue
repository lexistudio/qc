<template>
  <div class="tab">
    <div class="tab__box">
      <div
        class="tab__item"
        :class="{ active: tabIndex == index }"
        v-for="(item, index) in items"
        :key="`tab-${index}`"
        v-on:click.prevent="tabClick(index)"
      >
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      tabIndex: 0,
    };
  },
  props: {
    items: {
      type: Array,
    },
  },
  methods: {
    tabClick( i ) {
      this.tabIndex = i
      this.$emit('tabIndex', i)
    }
  }
};
</script>
