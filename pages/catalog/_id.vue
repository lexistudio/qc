<template>
  <div class="container">
    <div class="title-work-head">
      <h1 class="title-work">
        {{ catalogsItem.name }}
      </h1>
    </div>

    <div class="card-info">
      <p>
        <strong>Внимание!</strong> Пожалуйста, сверяйте информацию о данном
        товаре с информацией на официальном сайте производителя и уточняйте
        спецификацию, наличие на складе и цену товара у менеджеров нашей
        компании. Внешний вид изделия, его комплектация и характеристики могут
        изменяться производителем без предварительного уведомления. Не является
        публичной офертой. Определяемой положениями статьи 437(2) ГК РФ.
      </p>
    </div>

    <div class="card">
      <div class="card__left">
        <div class="card__img">
          <div class="card__noimg" v-if="!catalogsItem.img">
            <i class="fas fa-camera"></i>
          </div>
          <div class="card__details" v-else>
            <img
              :src="`https://api.qlc-it.ru${catalogsItem.img.url}`"
              :alt="catalogsItem.name"
            />
          </div>
        </div>
      </div>
      <div class="card__right">
        <div class="content">
          <p v-if="catalogsItem.description" style="padding: 0;">{{ catalogsItem.description }}</p>
          <p>
            <span class="card__span" v-if="catalogsItem.brend">
              <strong>Бренд:</strong>
              <span>{{ catalogsItem.brend.name }}</span>
            </span>
            <span class="card__span" v-if="catalogsItem.vendorCode">
              <strong>Артикул:</strong> {{ catalogsItem.vendorCode }}
            </span>
            <span class="card__span">
              <strong>Цена:</strong>
              <span
                v-if="!catalogsItem.price || parseInt(catalogsItem.price) === 0"
              >
                по запросу
              </span>
              <span v-else>{{ catalogsItem.price }} руб.</span>
            </span>
            <span class="card__span">
              <strong>Кол-во:</strong>
              <span
                v-if="!catalogsItem.count || parseInt(catalogsItem.count) === 0"
              >
                Запрашивайте
              </span>
              <span v-else>{{ catalogsItem.count }} шт.</span>
            </span>
            <span class="card__span" v-if="catalogsItem.delivery">
              <strong>
                {{ catalogsItem.delivery }}
              </strong>
            </span>
            <span class="card__span">
              <strong>Гарантия:</strong>
              <span> 12 месяцев </span>
            </span>
          </p>

          <p>
            Доставка по Москве и в пределах МКАД осуществляется бесплатно при
            сумме заказа от 20 000 руб. Доставка за МКАД осуществляется
            отдельно.
          </p>

          <div v-if="catalogsItem.characteristics.length">
            <h2 class="card__subtitle">Характеристики</h2>
            <div class="card__table">
              <div
                class="card__row"
                v-for="item in catalogsItem.characteristics"
                :key="item.id"
              >
                <div class="card__td">{{ item.name }}</div>
                <div class="card__td">{{ item.value }}</div>
              </div>
            </div>
          </div>

          <div class="card__btn-group">
            <div class="card__btn">
              <a
                href="#"
                @click.prevent="isActive = true"
                class="btn btn--primary"
              >
                Узнать стоимость и наличие
              </a>
            </div>
          </div>

          <transition name="modals">
            <Modal v-on:close="isActive = false" v-if="isActive">
              <ContactsFromOrder
                :name="catalogsItem.name"
                :vendorCode="catalogsItem.vendorCode"
              />
            </Modal>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters({
    catalogsItem: "catalogs/getCatalogsItem",
  }),
  data: () => ({
    isActive: false,
  }),
  async fetch({ store, route }) {
    await new Promise((resolve) => setTimeout(() => resolve(), 1000));
    await store.dispatch("catalogs/catalogsItems", route.params.id);
  },
};
</script>
