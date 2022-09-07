<template>
  <div>
    <div class="request-progress">
      <div class="request-progress__bar" :class="`request-progress__bar--${cl}`">
        {{ cl }}%
      </div>
    </div>

    <div class="request">
      <h1 class="request-title">В разработке...</h1>
      <h1 class="request-title">Подберём IT оборудование по вашим потребностям!</h1>
      <p class="request-sub-title">Данный подбор позволит получить скидку на всё оборудование.</p>
      
      <h2 class="request-title">Выберете ваш вариант</h2>
      <input type="radio"> Физ лицо
      <input type="radio"> Юр лицо

      <h2 class="request-title">Выберите категорию</h2>
      <input type="radio"> Серверное оборудование
      <input type="radio"> Сетевое оборудование
      <input type="radio"> Источники бесперебойного питания
      <input type="radio"> Переферийное оборудование и запчасти
      <input type="text" placeholder="Другое">

      <h2 class="request-title">Выберите ваш вариант</h2>

      <h2 class="request-title">Ваш вариант</h2>
      <h2 class="request-title">Оставьте свои контакты для связи с вами!</h2>

      <pre>
        {{ list }}
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    curr: 0,
    cl: 0,
    list: [
      {
        title: 'Подберём IT оборудование по вашим потребностям!',
        txt: 'Данный подбор позволит получить скидку на всё оборудование.'
      },
      {
        title: 'Выберете ваш вариант',
        vars: [
          { title: "Физ лицо", type: 'radio' },
          { title: "Юр лицо", type: 'radio' }
        ]
      },
      {
        title: 'Выберите категорию',
        vars: [
          { title: "Серверное оборудование", type: 'radio' },
          { title: "Сетевое оборудование", type: 'radio' },
          { title: "Источники бесперебойного питания", type: 'radio' },
          { title: "Переферийное оборудование и запчасти", type: 'radio' },
          { title: "Другое", type: 'text' },
        ]
      },
      {
        title: 'Выберите ваш вариант',
      },
      {
        title: 'Ваш вариант',
      }
    ]
  }),
  methods: {
    test() {
      this.curr = this.curr + 1

      if ( this.curr == 2 ) {
        this.cl = 33
      } else if ( this.curr == 3 ) {
        this.cl = 56
      } else if ( this.curr == 4 ) {
        this.cl = 78
      } else if ( this.curr == 5 ) {
        this.cl = 95
      } else if ( this.curr == 6 ) {
        this.cl = 100
      }
    }
  }
}
</script>
