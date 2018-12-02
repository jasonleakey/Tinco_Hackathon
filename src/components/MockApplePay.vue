<template>
  <div class="modal">
    <img src="~@/assets/applepay_doing.png">
  </div>
</template>

<script>
  export default {
    name: 'MockApplePay'
  };
</script>

<style scoped lang="scss">
  .modal {
    width: 100%;
    height: 400px;
    z-index: 1000;
    margin: -8px;
    position: fixed;
  }
</style>