<template>
  <div>
    <div class="header-box-relative">
      <div class="head-img container">
        <img src="@/assets/img/banner2.png" alt="" />
      </div>

      <div class="head-banner">
        <div class="container">
          <div class="banner-main-subtitle">
            Простые решения для сложных задач
          </div>
          <h1 class="banner-main-title">
            Комплексный поставщик IT оборудования
          </h1>
          <div class="banner-main-text">
            Мы поможем оптимизировать Вашу инфраструктуру, снизить расходы на IT
            обслуживание и гарантировать бесперебойную работу.
          </div>
          <div class="btn-group">
            <div class="btn-group__item">
              <n-link to="/about" class="btn btn--primary">Подробнее</n-link>
            </div>
            <div class="btn-group__item">
              <n-link to="/catalog" class="btn btn--border">
                Каталог
              </n-link>
            </div>
          </div>
        </div>
      </div>
    </div>

    <LogoSlider :brends="brends" />

    <Benefits />
    <DeliveryMain />
    <Warranty />
    <BenefitsTwo />
    <Responder />
    <LogosClient :logos="logos" />
    <MainCatalog :catalogs="catalogs" />
    <!-- <Bookmark /> -->
    <!-- <ContactsMain /> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters({
    catalogs: "catalogs/getCatalogs",
    brends: "brends/getBrends",
    logos: "clients/getLogos",
  }),
  async fetch({ store }) {
    await store.dispatch("brends/fetch");
    await store.dispatch("catalogs/fetch", { count: 4 });
    await store.dispatch("clients/fetch");
  },
  mounted() {
    this.socket = this.$nuxtSocket({
      name: 'main',
    })
  },
};
</script>
