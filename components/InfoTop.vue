<template>
  <div class="info-top">
    <div class="container">
      <div class="info-box">
        <div class="info-box__item">
          <a href="tel:++74957110515" class="info-box__link">
            <i class="fas fa-phone-alt"></i>
            +7 (495) 711-05-15
          </a>
        </div>
        <div class="info-box__item">
          <a href="mailto:info@qlc-it.ru" class="info-box__link">
            <i class="fas fa-envelope"></i>
            info@qlc-it.ru
          </a>
        </div>
        <div class="info-box__item">
          <a
            href="mailto:info@qlc-it.ru"
            class="info-box__link"
            v-on:click.prevent="isActive = true"
          >
            <i class="fas fa-comment-dots"></i>
            Связаться с нами
          </a>
        </div>
        <div class="info-box__item" v-if="false">
          <n-link to="/request" class="info-box__link">
            <i class="fas fa-solid fa-arrow-right"></i>
            Оставить заявку
          </n-link>
        </div>
        <div class="info-box__item">
          <a href="https://t.me/Suvorov860" target="_blank" class="info-box__link">
            <i class="fab fa-telegram-plane"></i>
            Telegram
          </a>
        </div>
      </div>
    </div>
    
    <transition name="modals">
      <Modal v-on:close="isActive = false" v-if="isActive">
        <ContactsFrom />
      </Modal>
    </transition>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isActive: false,
    };
  },
};
</script>
