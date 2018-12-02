<template>
  <div class="shade" v-show="show">
    <div class="modal" :class="{ hide: !show }">
      <img src="~@/assets/applepay_doing.png" @click="dismiss">
    </div>
  </div>
</template>

<script>
  // import axios from 'axios';

  export default {
    name: 'MockApplePay',
    data: () => ({
      show: false,
      sessionId: '',
    }),
    mounted() {
    },
    methods: {
      dismiss() {
        // axios.post(`https://dialogflow.googleapis.com/v2/projects/tinco-1e8d6/agent/sessions/${}:detectIntent`, {
        //   queryInput: {
        //     event: {
        //       name: 'PAY_DONE_CONFIRM',
        //       languageCode: 'en-US'
        //     }
        //   }
        // }, {
        //   headers: {
        //     Authorization: `Bearer 4b6dc071bb194b92b08e1cf5b141bd0c`
        //   }
        // });
        // this.show = false;
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