<template>
  <header class="head">
    <div class="info-txt">
      <div class="container" v-if="isInfoActive">
        <div class="info-txt__box">
          <div class="info-txt__item">
            Санкции осложнили поставки зарубежного оборудования, но не для нас.<br>
            Поставляем весь спектр серверного и сетевого оборудования, по параллельному импорту.<br>
            <strong>Сервера, СХД любой конфигурации и запчасти к ним, вендоры Dell, HPE, Lenovo, Huawei.</strong>
          </div>
          <div class="info-txt__item info-txt__icon">
            <i class="fa fa-regular fa-server"></i>
            <i class="fa fa-regular fa-server"></i>
            <i class="fa fa-regular fa-server"></i>
            <i class="fa fa-regular fa-server"></i>
            <i class="fa fa-regular fa-server"></i>
          </div>
        </div>
      </div>

      <div class="info-txt__btn" @click.prevent="infoBtn">
        <div class="container">
          <i class="fas fa-regular fa-truck"></i>
          <span v-if="isInfoActive">Свернуть</span>
          <span v-else>Параллельный импорт</span>
        </div>
      </div>
    </div>

    <InfoTop />

    <div class="head-top">
      <div class="container">
        <div class="head-box">
          <div class="head-box__item">
            <n-link to="/" class="logo"> qlc-it </n-link>
          </div>
          <div class="head-box__item">
            <ul class="nav">
              <li v-for="item in nav" :key="item.id" class="nav__li">
                <n-link :to="item.path" class="nav__a">
                  {{ item.name }}
                </n-link>
              </li>
            </ul>
            <div class="nav-btn" :class="{ active: isNavActive }" @click="addNavActive"></div>
          </div>
        </div>

        <div class="nav-phone" v-if="isNavActive">
          <ul class="nav-phone__ul">
            <li v-for="item in nav" :key="item.id">
              <n-link :to="item.path">
                <span @click="addNavActive">{{ item.name }}</span>
              </n-link>
            </li>
          </ul>
          <div class="nav-phone__info">
            <a href="tel:++74957110515">
              <span>Связаться с нами</span>
              8 (495) 711-05-15
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="head-fixed" :class="{ active: isActive }">
      <div class="container">
        <div class="head-fixed-box">
          <div class="head-fixed-box__item">
            <div class="head-fixed-menu">
              <div
                class="head-fixed-menu__item"
                v-for="item in nav"
                :key="item.id"
              >
                <n-link :to="item.path" class="head-fixed-menu__a">
                  {{ item.name }}
                </n-link>
              </div>
            </div>
          </div>
          <div class="head-fixed-box__item">
            <div class="head-fixed-contacts">
              <a href="tel:++74957110515" class="head-fixed-contacts__a">
                +7 (495) 711-05-15
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <slot></slot>
  </header>
</template>

<script lsng="ts">
import Nav from "@/mixins/nav";

export default {
  mixins: [Nav],
  data: () => ({
    isNavActive: false,
    isActive: false,
    isInfoActive: false
  }),
  methods: {
    addNavActive() {
      this.isNavActive = this.isNavActive != true ? true : false
    },
    infoBtn() {
      this.isInfoActive = !this.isInfoActive
    }
  },
  mounted() {
    document.addEventListener("scroll", e => {
      if ( window.scrollY > 110 ) {
        this.isActive = true
      }
      else {
        this.isActive = false
      }
    })

    const getIsInfoAction = sessionStorage.getItem("getIsInfoAction")

    if ( getIsInfoAction === null ) {
      sessionStorage.setItem("getIsInfoAction", true)
      this.isInfoActive = true
    }
  }
};
</script>
