<template>
  <footer class="foot">
    <div class="container">
      <div class="foot-label">
        <div class="foot-label__item quiz-btn" onclick="Marquiz.showModal('603b8b2ccc3aeb0044b8511d')">
          <span>Заберите вашу скидку 10%</span>
        </div>
      </div>
    </div>

    <div class="foot-box">
      <div class="container">
        <div class="foot-content">
          <div v-for="item in contacts" :key="item.id" class="foot-content__item">
            <div class="foot-content__title">{{ item.title }}</div>
            <div class="foot-content__body" v-for="itm in item.children" :key="itm.id" v-html="itm.title"></div>
          </div>
        </div>
      </div>
      <div class="foot-box__copyright">
        <div class="container">
          <div class="foot-copyright">
            <div class="foot-copyright__item">Все права защищены &copy;</div>
            <div class="foot-copyright__item">
              Разработка сайта <a href="https://teleg.run/U901KN" target="_blank">lhab</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <SocialButton />

    <!-- <Chat /> -->
  </footer>
</template>

<script>
import Nav from "@/mixins/nav";
import Contacts from '@/mixins/contacts'

export default {
  mixins: [Nav, Contacts],
  data: () => ({
    isQuiz: false
  }),
  mounted() {
    (function(t, p) {window.Marquiz ? Marquiz.add([t, p]) : document.addEventListener('marquizLoaded', function() {Marquiz.add([t, p])})})('Pop', {id: '604a44803022310044369202', title: '', text: 'Заберите вашу скидку !', delay: 20, textColor: '#ffffff', bgColor: '#A7D382', bonusCount: 1, bonusText: '', type: 'full', position: 'position_bottom', shadow: 'rgba(211, 64, 133, 0)', blicked: true, svgColor: '#fff', closeColor: '#fff'})
  }
};
</script>
