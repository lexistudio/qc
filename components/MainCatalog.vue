<template>
  <section class="catalog-wrapper">
    <div class="container">
      <Title sub="Каталог" title="Каталог продукции" />
      <CatalogBox :catalogs="catalogs" />
      <div class="center">
        <n-link to="/catalog" class="btn btn--primary"> Посмотреть все </n-link>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: {
      catalogs: {
        type: Array,
        default: []
      }
    }
  }
</script>
