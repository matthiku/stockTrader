<template>
  <div class="container">
  	<h1>A new Day in Stocks Trading!</h1>
  	<h6>Check out the new stock prices: </h6>
      <router-link to="/stocks">Stocks</router-link>
  	<p>Your funds: {{ funds }}</p>
  </div>
</template>

<script>
  import {mapActions} from 'vuex';

	export default {
		computed: {
			funds() {
				return this.$store.getters.funds;
			}
		},
    created() {
      this.endDay();
    },
    methods: {
      ...mapActions([
        'randomizeStocks'
      ]),
      endDay() {
        this.randomizeStocks();
        this.$router.push({ name: 'stocks'})
      }
    }
	}
</script>