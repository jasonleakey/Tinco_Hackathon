<template>
  <div class="home">
    <mock-apple-pay ref="mockaa"></mock-apple-pay>
    <button id="apple-pay-button" @click="window.beginApplePay(19)"></button>
  </div>
</template>

<script>
  import MockApplePay from '../components/MockApplePay'


  export default {
    name: 'home',
    components: {
      MockApplePay,
    },
    mounted() {

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