<template>
    <div class="container">
    	<h1>Trade or View your Portfolio</h1>
    	<h6>You may Save and Load your Data</h6>
    	<h6>Click on 'End Day' to being a New Day</h6>
    	<p>Your funds: {{ funds }}</p>
    </div>
</template>

<script>
	export default {
		computed: {
			funds() {
				return this.$store.getters.funds;
			}
		}
	}
</script>