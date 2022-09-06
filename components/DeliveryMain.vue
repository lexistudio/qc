<template>
  <section class="delivery-main">
    <div class="container">
      <Title
        sub="Бесплатная доставка до терминала ТК"
        title="Работаем по всей России"
      />

      <div class="delivery-tab">
        <Tab :items="tab" v-on:tabIndex="tabIndexEmit" />
      </div>

      <div class="delivery">
        <div class="delivery__item">
          <h3 class="delivery__title">Со склада</h3>
          <p>
            Доставка товаров со склада осуществляется в течении 3х рабочих дней
          </p>

          <h3 class="delivery__title">Под заказ</h3>
          <p>Доставка товара под заказ 2-4 недели</p>
        </div>
        <div
          class="delivery__item"
          v-for="(item, index) in tab"
          v-show="tabIndex == index"
          :key="`delivery-${index}`"
        >
          <h3 class="delivery__title">
            {{ item.name }}
          </h3>
          <p>
            {{ item.txt }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => {
    return {
      tab: [
        {
          name: "По России",
          txt: "Доставка по России осуществляется любой транспортной компанией, которую укажет заказчик, доставка до ТК бесплатная, услуги ТК заказчик оплачивает самостоятельно, если это не было обговорено за ранее.",
        },
        {
          name: "В пределах МКАД",
          txt:
            "Доставка по Москве и в пределах МКАД осуществляется бесплатно при сумме заказа от 20 000 руб. Доставка за МКАД осуществляется отдельно.",
        },
      ],
      tabIndex: 0,
    };
  },
  methods: {
    tabIndexEmit(i) {
      this.tabIndex = i;
    },
  },
};
</script>
