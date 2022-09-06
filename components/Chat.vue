<template>
  <div class="chat">
    <div class="chat__btn" v-if="!isActive" v-on:click="add">
      <div>
        <i class="fas fa-comment-dots"></i>
      </div>
    </div>
    <div class="chat__box" v-if="isActive">
      <div class="chat__close" v-on:click="add">
        <i class="fas fa-times"></i>
      </div>
      <div class="chat__head">Онлайн чат</div>
      <div class="chat__body">
        <div class="chat__mess" ref="mess">
          <div class="chat__mess-item" v-for="chat in chates" :key="chat.update_id">
            <span>{{ chat.message.text }}</span>
          </div>
        </div>
      </div>
      <div class="chat__fields">
        <form v-on:submit.prevent="send">
          <input type="text" class="chat__field" placeholder="Сообщение" v-model="mess" />
          <button type="submit" class="chat__send">
            <i class="fas fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      isActive: false,
      mess: '',
      chates: []
    };
  },
  methods: {
    add() {
      this.isActive = this.isActive != true ? true : false;
    },
    updates() {
      const url = 'https://api.telegram.org/bot1605529503:AAEMGX6DbT5OOhQwFT11przbZhXJ8mlDqLQ/getUpdates'

      fetch(url).then(async resp => {
        const r = await resp.json()
        this.chates = r.result
      })
    },
    send() {
      this.updates()

      const el = document.createElement("div")
            el.className = 'chat__mess-item active'
            el.innerHTML = `<span>${this.mess}</span>`

      this.$refs.mess.insertAdjacentElement("beforeend", el)
      this.mess = ''
    }
  },
  mounted() {
    this.updates()
  }
};
</script>
