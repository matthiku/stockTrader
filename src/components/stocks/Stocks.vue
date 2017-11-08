<template>
  <div class="container">

    <div class="row">
      <h5>Stocks and Stock Prices:</h5>
    </div>

    <div class="row">
      <app-stock v-for="stock in stocks" key="stock.id" :stock="stock"></app-stock>      
    </div>

      <hr>
    <div class="row">
      <router-link to="/portfolio" class="btn btn-success mx-auto">Check Your Portfolio</router-link>
    </div>
      
  </div>
</template>



<script>
  import Stock from './Stock.vue';

  export default {
    components: {
      appStock: Stock,
    },
    computed: {
      stocks() {
        return this.$store.getters.stocks;
      }
    }
  }
</script>