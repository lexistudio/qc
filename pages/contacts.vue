<template>
  <div class="maps-box" v-if="isMounted">
    <yandex-map
      ref="map"
      :controls="[]"
      :coords="[55.570405, 37.588611]"
      class="yandex-maps"
    >
      <ymap-marker
        markerId="1"
        marker-type="placemark"
        hint-content="Мы тут :)"
        :coords="[55.570405, 37.588611]"
      >
        <div slot="balloon">
          <strong>{{ contacts[0].title }}</strong
          ><br />
          <p v-for="mps in contacts[0].children" :key="mps.id">
            {{ mps.title }}
          </p>
        </div>
      </ymap-marker>
    </yandex-map>

    <div class="container">
      <div class="contacts">
        <div v-for="item in contacts" :key="item.id" class="contacts__item">
          <h2 class="contacts__title">{{ item.title }}</h2>
          <ul class="contacts__ul">
            <li v-for="itm in item.children" :key="itm.id" class="contacts__li">
              <span v-html="itm.title"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Contacts from "@/mixins/contacts";

export default {
  mixins: [Contacts],
  head: {
    title: "Контакты",
  },
  data: () => ({
    isMounted: false,
  }),
  mounted() {
    this.isMounted = true;
  },
};
</script>
