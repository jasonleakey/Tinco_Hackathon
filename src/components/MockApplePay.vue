<template>
  <div class="shade" v-show="show">
    <div class="modal" :class="{ hide: !show }">
      <img src="~@/assets/applepay_doing.png" @click="dismiss">
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MockApplePay',
    data: () => ({
      show: false,
      sessionId: '',
    }),
    mounted() {
      this.$ws.on('message', function (message) {
        if (message.type === 'utf8' && message.utf8Data.action === 'pay') {
          this.sessionId = message.utf8Data.sessionId;
          this.show = true;
        }
      })
    },
    methods: {
      dismiss() {
        this.$ws.sendUTF({
          action: 'pay_done',
          sessionId: this.sessionId,
        });
        this.show = false;
      }
    },
  };
</script>

<style scoped lang="scss">
  .shade {
      position: fixed;
      z-index: 900;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
    }
  .modal {
    width: 100%;
    height: 350px;
    z-index: 1000;
    position: fixed;
    bottom: 0;
    left: 0;

    &.hide {
      bottom: -350px;
      transition: all .3s ease-out;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }



</style>