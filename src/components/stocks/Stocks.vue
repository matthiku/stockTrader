<template>
  <div class="container">
    <div class="row">
      <app-stock v-for="stock in stocks" key="stock.id"  :stock="stock"></app-stock>      
    </div>
  </div>
</template>

<script>
  import Stock from './Stock.vue';

  export default {
    components: {
      appStock: Stock,
    },
    data() {
      return {
        stocks: [
          {id: 1, name: "BMW", price: 110 },
          {id: 2, name: "Google", price: 200 },
          {id: 3, name: "Apple", price: 205 },
          {id: 4, name: "Mercedes", price: 80 },
        ]
      }
    },
  }
</script>