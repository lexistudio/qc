<template>
  <form v-on:submit.prevent="send" class="form">
    <div class="form__item">
      <input
        type="text"
        v-model="form.firstName"
        placeholder="Имя"
        class="form-fields"
        required
      />
    </div>
    <div class="form__item">
      <input
        type="email"
        v-model="form.email"
        placeholder="Email"
        class="form-fields"
      />
    </div>
    <div class="form__item">
      <input
        type="text"
        v-model="form.phone"
        placeholder="+7 (###) ###-##-##"
        class="form-fields"
        required
        v-mask="'+7 (###) ###-##-##'"
      />
    </div>
    <div class="form__item">
      <textarea
        required
        v-model="form.txt"
        placeholder="Ваше сообщение"
        class="form-fields form-fields--textarea"
      ></textarea>
    </div>
    <div v-if="mess.length != 0" class="success">
      {{ this.mess }}
    </div>
    <div class="form__item center">
      <n-link to="/info">
        Политика компании в отношении персональных данных.
      </n-link>
    </div>
    <div class="form__btn">
      <button type="submit" class="btn btn--primary">Отправить</button>
    </div>
  </form>
</template>

<script>
import VueDadata from "vue-dadata";
export default {
  components: { VueDadata },
  data: () => {
    return {
      form: {
        firstName: "",
        email: "",
        txt: "",
        phone: "",
      },
      mess: "",
    };
  },
  methods: {
    send() {
      const url =
        "https://api.telegram.org/bot1605529503:AAEMGX6DbT5OOhQwFT11przbZhXJ8mlDqLQ/sendMessage";

      const mess = `Имя:${this.form.firstName}, Email:${this.form.email}, Сообщение:${this.form.txt}, Тел: ${this.form.phone}`;

      fetch(`${url}?chat_id=257800690&text=${mess}`);
      fetch(`${url}?chat_id=385143338&text=${mess}`);

      this.mess = "Спасибо! Ваше сообщение  отправлено";

      this.form.firstName = "";
      this.form.email = "";
      this.form.txt = "";
      this.form.phone = "";
    },
    addChange(e) {
      this.form.firstName = e.value;
    },
  },
};
</script>
