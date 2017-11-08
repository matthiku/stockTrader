<template>
  <div class="container">
  	<h1>Stock Trader</h1>
  	<h6>You may Save or Load your data</h6>
  	<h6>Click on <router-link to="endday">End Day</router-link> to being a new day with fresh stock prices</h6>
    <p>
      Your current funds: {{ funds | currency }}
      <br>
	    Your Portfolio Value: {{ portfolioValue | currency }}
    </p>
    <router-link to="/stocks" class="btn btn-info">Buy Stocks</router-link>
    <router-link to="/portfolio" class="btn btn-success" v-if="portfolioValue">Sell Stocks</router-link>
  </div>
</template>

<script>
	export default {
		computed: {
			funds() {
				return this.$store.getters.funds;
			},
      portfolioValue() {
        return this.$store.getters.portfolioValue;
      },
		},
	}
</script>