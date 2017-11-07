<template>
  <div class="container">
    <div class="row">
      <h5>Your Current Portfolio</h5>
    </div>
    <div class="row">


      <app-stock v-for="stock in stocks" key="stock.id" :stock="stock"></app-stock>
      
      <div v-if="!stocks.length" class="mx-auto">
        Your portfolio is empty!<br>
        <router-link to="/stocks" class="btn btn-info">Buy some Stocks</router-link>
      </div>
    </div>
    <hr>
    <div class="row">     
      <div v-if="stocks.length && funds > 0" class="mx-auto">
        <router-link to="/stocks" class="btn btn-info">Buy more Stocks</router-link></div>
      </div>
    </div>

  </div>
</template>


<script>
  import {mapGetters} from 'vuex';
  import Stock from './Stock.vue';

  export default {
    computed: {
      ...mapGetters({
        stocks: 'stockPortfolio'
      }),
      funds() {
        return this.$store.getters.funds;
      },
    },
    components: {
      appStock: Stock
    }
  }
</script>