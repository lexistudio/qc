<template>
  <footer class="foot">
    <div class="container">
      <div class="copyright">
        <div class="copyright__item">
          <n-link to="/" class="logo"> qlc-it </n-link>
        </div>
        <div class="copyright__item">
          Разработка, <a href="https://teleg.run/U901KN" target="_blank">lhab</a>
        </div>
      </div>
    </div>

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
