<template>
  <div class="title-box">
    <h2 class="title center">
      {{ title }}
      <span v-if="titleColor">
        {{ titleColor }}
      </span>
    </h2>
  </div>
</template>

<script>
  export default {
    props: {
      sub: {
        type: String
      },
      title: {
        type: String
      },
      titleColor: {
        type: String
      }
    }
  }
</script>
