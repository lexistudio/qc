<template>
  <div class="maps-box">
    <yandex-map
      ref="map"
      :controls="['zoomControl']"
      :settings="settings"
      :coords="[55.570405, 37.588611]"
      class="yandex-maps"
    >
      <ymapMarker :marker-id="0" :coords="[55.570405, 37.588611]">
        <div slot="balloon">
          <strong>{{ contacts[0].title }}</strong><br />
          <p v-for="mps in contacts[0].children" :key="mps.id">
            {{ mps.title }}
          </p>
        </div>
      </ymapMarker>
    </yandex-map>

    <div class="container">
      <div class="contacts">
        <div v-for="item in contacts" :key="item.id" class="contacts__item">
          <h2 class="contacts__title">{{ item.title }}</h2>
          <ul class="contacts__ul">
            <li v-for="itm in item.children" :key="itm.id"  class="contacts__li">
              <span v-html="itm.title"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { yandexMap, ymapMarker } from "vue-yandex-maps";
import Contacts from "@/mixins/contacts";

export default {
  layout: "contacts",
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
