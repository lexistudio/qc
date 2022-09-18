<template>
  <div>
    <div class="container">
      <div class="title-work-head">
        <h1 class="title-work">
          Подберём IT оборудование по вашим потребностям!<br>
          В разработке
        </h1>
      </div>

      <div class="request">
        <div class="request__steps">
          <div v-if="step.curr === 1">
            <h2 class="request-title">Выберете ваш вариант</h2>
            <div class="request-label-box">
              <label
                v-for="typeClient in typeClients"
                :key="`typeClients-${typeClient.id}`"
                class="request-label"
              >
                <input
                  type="radio"
                  :name="typeClient.type"
                  :value="typeClient.name"
                  v-model="list.client"
                />
                <span>{{ typeClient.name }}</span>
              </label>
            </div>
          </div>
          <div v-else-if="step.curr === 2">
            <h2 class="request-title">Выберите категорию</h2>
            <div class="request-label-box">
              <label
                v-for="(category, index) in categorys"
                :key="`categorys-${category.id}`"
                class="request-label"
                @click="(categorysIndex = index), (list.category.list = [])"
              >
                <input
                  type="radio"
                  :name="category.type"
                  :value="category.name"
                  v-model="list.category.name"
                />
                <span>{{ category.name }}</span>
              </label>
            </div>
          </div>
          <div v-else-if="step.curr === 3">
            <h2 class="request-title">Выберите ваш вариант</h2>
            <div class="request-label-box">
              <label
                style="display: block"
                class="request-label"
                v-for="categoryItem in categorys[categorysIndex].list"
                :key="categoryItem.id"
              >
                <input
                  :type="categoryItem.type"
                  :value="categoryItem.name"
                  v-model="list.category.list"
                />
                <span>{{ categoryItem.name }}</span>
              </label>
            </div>
          </div>
          <div v-else-if="step.curr === 4">
            <h2 class="request-title">Ваш вариант</h2>
            <div class="request-label-box">
              <label
                style="display: block"
                v-for="plan in plans"
                class="request-label"
                :key="`plan-${plan.id}`"
              >
                <input
                  type="radio"
                  :name="plan.type"
                  :value="plan.name"
                  v-model="list.plan"
                />
                <span>{{ plan.name }}</span>
              </label>
            </div>
          </div>
          <div v-else-if="step.curr === 5">
            <h2 class="request-title">
              Оставьте свои контакты для связи с вами!<br />
              В разработке
            </h2>
          </div>
          <a
            href="#"
            class="btn-more"
            @click.prevent="addStep('minus')"
            v-if="step.curr !== 1 && step.curr !== 0 && step.curr !== step.step"
          >
            <i class="fas fa-regular fa-arrow-left"></i>
          </a>
          <a
            href="#"
            class="btn-more"
            @click.prevent="addStep('plus')"
            v-if="step.curr !== step.step"
          >
            <span v-if="step.curr === 0">Начать</span>
            <span v-else>Далее</span>
          </a>
        </div>

        <div class="request__result">
          <div class="request-title">Ваша сборка</div>
          <p v-if="list.client">
            <strong>{{ list.client }}</strong>
          </p>
          <p v-if="list.category.name">
            <strong>{{ list.category.name }}</strong>
          </p>
          <ul v-if="Array.isArray(list.category.list)">
            <LiItem v-for="(lis, index) in list.category.list" :key="`list-category-${index}`">
              {{ lis }}
            </LiItem>
          </ul>
          <ul v-else>
            <LiItem>{{ list.category.list }}</LiItem>
          </ul>
          <p v-if="list.plan">
            <strong>{{ list.plan }}</strong>
          </p>
        </div>
      </div>
    </div>

    <div class="request-progress" v-if="step.step !== 1 && step.curr !== step.step">
      <div
        class="request-progress__bar"
        :style="{ width: `${step.percentage}%` }"
      >
        <span>{{ step.percentage }}%</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    categorysIndex: 0,
    step: {
      curr: 0,
      percentage: 0,
      step: 5,
    },
    list: {
      client: null,
      category: {
        name: null,
        list: [],
      },
      plan: null,
    },
    typeClients: [
      { id: 1, name: "Физ лицо", icon: "fis", type: "client" },
      { id: 2, name: "Юр лицо", icon: "your", type: "client" },
    ],
    categorys: [
      {
        id: 1,
        name: "Серверное оборудование",
        type: "category",
        list: [
          { id: 1, name: "Жесткие диски", type: "checkbox" },
          { id: 2, name: "Процессоры", type: "checkbox" },
          { id: 3, name: "Контролеры", type: "checkbox" },
          { id: 4, name: "Радиаторы и вентиляторы", type: "checkbox" },
          { id: 5, name: "Комплектующие", type: "checkbox" },
          { id: 6, name: "Оперативная память", type: "checkbox" },
          { id: 7, name: "Блоки питания", type: "checkbox" },
          { id: 8, name: "Сетевые адаптеры", type: "checkbox" },
          { id: 9, name: "Сервера", type: "checkbox" },
          { id: 10, name: "СДХ (Система Хранения Данных)", type: "checkbox" },
        ],
      },
      {
        id: 2,
        name: "Сетевое оборудование",
        type: "category",
        list: [
          { id: 1, name: "Аксессуары Cisco", type: "checkbox" },
          { id: 2, name: "Блоки питания", type: "checkbox" },
          { id: 3, name: "Контроллеры", type: "checkbox" },
          { id: 4, name: "Межсетевые экраны", type: "checkbox" },
          { id: 5, name: "Сетевые адаптеры Ethernet", type: "checkbox" },
          { id: 6, name: "Точки доступа", type: "checkbox" },
          { id: 7, name: "Беспроводное оборудование", type: "checkbox" },
          { id: 8, name: "Коммутаторы", type: "checkbox" },
          { id: 9, name: "Маршрутизаторы", type: "checkbox" },
          { id: 10, name: "Модули", type: "checkbox" },
          { id: 11, name: "Сетевые карты", type: "checkbox" },
        ],
      },
      {
        id: 3,
        name: "Источники бесперебойного питания",
        type: "category",
        list: [
          { id: 1, name: "APC", type: "radio" },
          { id: 2, name: "Cyber Power", type: "radio" },
        ],
      },
      {
        id: 4,
        name: "Периферийное оборудование и запчасти",
        type: "category",
        list: [
          { id: 1, name: "МФУ", type: "checkbox" },
          { id: 2, name: "Принтеры", type: "checkbox" },
          { id: 3, name: "Ноутбуки", type: "checkbox" },
          { id: 4, name: "Комплектующие", type: "checkbox" },
          { id: 5, name: "Клавиатуры и мыши", type: "checkbox" },
          { id: 6, name: "Мониторы", type: "checkbox" },
          { id: 7, name: "Рабочие станции", type: "checkbox" },
          { id: 8, name: "Моноблоки", type: "checkbox" },
          { id: 9, name: "Телевизоры", type: "checkbox" },
        ],
      },
    ],
    plans: [
      { id: 1, name: "Личное использование", type: "prices" },
      { id: 2, name: "Перепродажа", type: "prices" },
    ],
  }),
  methods: {
    addStep(e) {
      if (e === "plus") {
        if (this.step.curr < this.step.step) this.step.curr++;
      } else {
        if (this.step.curr > 1) this.step.curr--;
      }

      this.step.percentage = Math.ceil((this.step.curr / this.step.step) * 100);
    },
  },
};
</script>
