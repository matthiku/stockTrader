<template>
  <div class="container">

    <h2>Stock Trader - Transaction Log</h2>

    <ul class="list-group">
      <show-log v-for="log in logs" :log="log" key="log.timestamp"></show-log>
    </ul>


    <router-link to="/stocks" class="btn btn-info">Buy Stocks</router-link>
    <router-link to="/portfolio" class="btn btn-success" v-if="portfolioValue">Sell Stocks</router-link>

  </div>
</template>

<script>
  import LogBook from './Log.vue';

  export default {
    computed: {
      funds() {
        return this.$store.getters.funds;
      },
      stocks() {
        return this.$store.getters.stocks;
      },
      portfolioValue() {
        return this.$store.getters.portfolioValue;
      },
      logs() {
        return this.$store.getters.logs;
      },
    },
    components: {
      showLog: LogBook,
    },
  }
</script>