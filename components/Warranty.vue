<template>
  <section class="warranty">
    <div class="container">
      <div class="half-box">
        <div class="half-box__item">
          <h2 class="title-small">Широкий ассортимент продукции</h2>
          <div class="warranty__box">
            <div class="warranty__item">
              <div class="warranty__icon">
                <i class="fas fa-server"></i>
              </div>
              <h3 class="warranty__title">Серверное оборудование</h3>
              <p class="warranty__txt">
                Сервера, Жёсткие диски, Оперативная
                память, Блоки питания , Процессоры , Материнские платы ,
                Контролеры , Сетевые карты , Кабели и т д.
              </p>
            </div>
            <div class="warranty__item">
              <div class="warranty__icon">
                <i class="fas fa-network-wired"></i>
              </div>
              <h3 class="warranty__title">Сетевое оборудование</h3>
              <p class="warranty__txt">
                Трансиверы, Коммутаторы, Маршрутизаторы,
                Адаптеры, Беспроводное оборудование, Точки доступа, Кабеля и т
                д.
              </p>
            </div>
            <div class="warranty__item">
              <div class="warranty__icon">
                <i class="fas fa-desktop"></i>
              </div>
              <h3 class="warranty__title">Периферийное оборудование</h3>
              <p class="warranty__txt">
                Мониторы, МФУ, Принтеры, Рабочие
                станции, Ноутбуки, Моноблоки, Комплектующие, Телевизоры,
                Клавиатуры и мыши и т д.
              </p>
            </div>
          </div>
          <n-link to="/catalog" class="btn btn--primary"> Подробнее </n-link>
        </div>
        <div class="half-box__item flex flex-align-items">
          <img
            src="@/assets/img/fn2.png"
            alt="Мы за честную гарантию"
            class="img-main"
          />
        </div>
      </div>
    </div>
  </section>
</template>
