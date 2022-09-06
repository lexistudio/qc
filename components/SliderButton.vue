<template>
  <div>
    <i class="fas fa-chevron-right" v-if="next"></i>
    <i class="fas fa-chevron-left" v-else></i>
  </div>
</template>

<script>
  export default {
    props: {
      next: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
