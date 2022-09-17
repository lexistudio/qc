<template>
  <div>
    <div class="request-progress">
      <div
        class="request-progress__bar"
        :class="`request-progress__bar--${cl}`"
      >
        {{ cl }}%
      </div>
    </div>

    <div class="request">
      <h1 class="request-title">
        Подберём IT оборудование по вашим потребностям!<br>
      </h1>
      <p class="request-sub-title">
        Данный подбор позволит получить скидку на всё оборудование.
      </p>

      <h2 class="request-title">Выберете ваш вариант</h2>
      <label v-for="typeClient in typeClients" :key="`typeClients-${typeClient.id}`">
        <input type="radio" :name="typeClient.type" :value="typeClient.name" v-model="list.client" />
        <span>{{ typeClient.name }}</span>
      </label>

      {{ categorysIndex }}

      <h2 class="request-title">Выберите категорию</h2>
      <label style="display: block" v-for="(category, index) in categorys" :key="`categorys-${category.id}`" @click="categorysIndex = index, list.category.list = []">
        <input type="radio" :name="category.type" :value="category.name" v-model="list.category.name" />
        <span>{{ category.name }}</span>
      </label>
      <h2 class="request-title">Выберите ваш вариант</h2>
      <label style="display: block" v-for="categoryItem in categorys[categorysIndex].list" :key="categoryItem.id">
        <input :type="categoryItem.type" :value="categoryItem.name" v-model="list.category.list">
        <span>{{ categoryItem.name }}</span>
      </label>
      <label>
        <input type="checkbox">
        <span>Другое</span>
      </label>

      <h2 class="request-title">Ваш вариант</h2>
      <label style="display: block" v-for="typePrice in typePrices" :key="`typePrice-${typePrice.id}`">
        <input type="radio" :name="typePrice.type" :value="typePrice.name" v-model="list.typePrices" />
        <span>{{ typePrice.name }}</span>
      </label>

      <pre>
        {{ list }}
      </pre>

      <div v-if="false">
        <h2 class="request-title" v-if="false">
          Оставьте свои контакты для связи с вами!
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    categorysIndex: 0,
    curr: 0,
    cl: 0,
    list: {
      client: null,
      category: {
        name: null,
        list: [],
      },
      typePrices: null
    },
    typeClients: [
      { id: 1, name: 'Физ лицо', icon: 'fis', type: 'client' },
      { id: 2, name: 'Юр лицо', icon: 'your', type: 'client' }
    ],
    categorys: [
      {
        id: 1,
        name: 'Серверное оборудование',
        type: 'category',
        list: [
          { id: 1, name: 'Жесткие диски', type: 'checkbox' },
          { id: 2, name: 'Процессоры', type: 'checkbox' },
          { id: 3, name: 'Контролеры', type: 'checkbox' },
          { id: 4, name: 'Радиаторы и вентиляторы', type: 'checkbox' },
          { id: 5, name: 'Комплектующие', type: 'checkbox' },
          { id: 6, name: 'Оперативная память', type: 'checkbox' },
          { id: 7, name: 'Блоки питания', type: 'checkbox' },
          { id: 8, name: 'Сетевые адаптеры', type: 'checkbox' },
          { id: 9, name: 'Сервера', type: 'checkbox' },
          { id: 10, name: 'СДХ (Система Хранения Данных)', type: 'checkbox' },
        ]
      },
      {
        id: 2,
        name: 'Сетевое оборудование',
        type: 'category',
        list: [
          { id: 1, name: 'Аксессуары Cisco', type: 'checkbox' },
          { id: 2, name: 'Блоки питания', type: 'checkbox' },
          { id: 3, name: 'Контроллеры', type: 'checkbox' },
          { id: 4, name: 'Межсетевые экраны', type: 'checkbox' },
          { id: 5, name: 'Сетевые адаптеры Ethernet', type: 'checkbox' },
          { id: 6, name: 'Точки доступа', type: 'checkbox' },
          { id: 7, name: 'Беспроводное оборудование', type: 'checkbox' },
          { id: 8, name: 'Коммутаторы', type: 'checkbox' },
          { id: 9, name: 'Маршрутизаторы', type: 'checkbox' },
          { id: 10, name: 'Модули', type: 'checkbox' },
          { id: 11, name: 'Сетевые карты', type: 'checkbox' },
        ]
      },
      {
        id: 3,
        name: 'Источники бесперебойного питания',
        type: 'category',
        list: [
          { id: 1, name: 'APC', type: 'radio' },
          { id: 2, name: 'Cyber Power', type: 'radio' },
        ]
      },
      {
        id: 4,
        name: 'Периферийное оборудование и запчасти',
        type: 'category',
        list: [
          { id: 1, name: 'МФУ', type: 'checkbox' },
          { id: 2, name: 'Принтеры', type: 'checkbox' },
          { id: 3, name: 'Ноутбуки', type: 'checkbox' },
          { id: 4, name: 'Комплектующие', type: 'checkbox' },
          { id: 5, name: 'Клавиатуры и мыши', type: 'checkbox' },
          { id: 6, name: 'Мониторы', type: 'checkbox' },
          { id: 7, name: 'Рабочие станции', type: 'checkbox' },
          { id: 8, name: 'Моноблоки', type: 'checkbox' },
          { id: 9, name: 'Телевизоры', type: 'checkbox' },
        ]
      }
    ],
    typePrices: [
      { id: 1, name: 'Личное использование', type: 'prices' },
      { id: 2, name: 'Перепродажа', type: 'prices' },
      { id: 3, name: 'Другое', type: 'prices' }
    ],
  }),
  methods: {
    test() {
      this.curr = this.curr + 1;

      if (this.curr == 2) {
        this.cl = 33;
      } else if (this.curr == 3) {
        this.cl = 56;
      } else if (this.curr == 4) {
        this.cl = 78;
      } else if (this.curr == 5) {
        this.cl = 95;
      } else if (this.curr == 6) {
        this.cl = 100;
      }
    },
  },
};
</script>
