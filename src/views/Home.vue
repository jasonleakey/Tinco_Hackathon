<template>
  <div class="home">
    <!--<mock-apple-pay></mock-apple-pay>-->
    <button id="apple-pay-button" @click="window.beginApplePay(19)"></button>
  </div>
</template>

<script>
  import axios from 'axios';
  // import MockApplePay from '../components/MockApplePay'


  export default {
    name: 'home',
    components: {
      // MockApplePay,
    },
    mounted() {
      /*
      axios.get('https://api.dialogflow.com/v1/quer?e=WELCOME&sessionId=4e3bb985-8e76-4f94-90dc-99a08608035b&lang=en&v=20170712', {
        headers: {
          Authorization: '4b6dc071bb194b92b08e1cf5b141bd0c',
        },
      })
      */
    },
    methods: {
    },
  };
</script>

<style lang="scss">
  #apple-pay-button {
    display: none;
    background-color: black;
    background-image: -webkit-named-image(apple-pay-logo-white);
    background-size: 100% 100%;
    background-origin: content-box;
    background-repeat: no-repeat;
    width: 100%;
    height: 44px;
    padding: 10px 0;
    border-radius: 10px;
  }
</style>