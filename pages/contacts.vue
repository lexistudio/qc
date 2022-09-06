<template>
  <div>
    <div class="container">
      <div class="content">
        <div class="content-half contacts-page">
          <div class="content-half__item full-width-phone">
            <div v-for="item in contacts" :key="item.id">
              <h2 class="title-contacts">{{ item.title }}</h2>
              <ul style="padding-top: 15px">
                <LiItem v-for="itm in item.children" :key="itm.id">
                  <span v-html="itm.title"></span>
                </LiItem>
              </ul>
            </div>
          </div>
          <div class="content-half__item hide-phone">
            <img
              src="@/assets/img/contacts.png"
              style="border-radius: 100%"
              alt="Контакты"
              class="img-content img-content--custom"
            />
          </div>
        </div>
      </div>
    </div>

    <yandex-map
      ref="map"
      :controls="['zoomControl']"
      :settings="settings"
      :coords="[55.570405, 37.588611]"
      class="yandex-maps"
    >
      <ymapMarker :marker-id="0" :coords="[55.570405, 37.588611]">
        <div slot="balloon">
          <strong>Фактический адрес</strong><br />
          117628, г. Москва, ул. Старокачаловская, д.18, помещ. IIIБ, ком. 6
        </div>
      </ymapMarker>
    </yandex-map>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";
import Contacts from "@/mixins/contacts";

export default {
  layout: "work",
  components: {
    yandexMap,
    ymapMarker,
  },
  mixins: [Contacts],
  head: {
    title: "Контакты",
  },
  data: () => ({
    settings: {
      apiKey: "",
      lang: "ru_RU",
      coordorder: "latlong",
      version: "2.1",
      suppressMapOpenBlock: false,
    },
  }),
};
</script>
