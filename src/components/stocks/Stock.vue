<template>
  <div class="col-md-6 col-lg-4">

    <div class="card">
      <div class="card-header">
        {{ stock.name }} 
        <small>(Price: {{ stock.price | currency }})</small>
      </div>

      <div class="card-body">
        <div class="row mx-auto">        
          <input
                  v-model="quantity"
                  type="number" 
                  class="form-control w-50"
                  :class="{ danger: insufficientFunds }"
                  placeholder="Quantity"
                  :max="maxShares"
                  >
          <button
                  @click="buyStock"
                  :disabled="quantity <= 0 || !Number.isInteger(quantity * 1) || quantity > maxShares" 
                  :class="insufficientFunds ? 'btn btn-sm btn-danger' : 'btn btn-success'"
                  >{{ insufficientFunds ? 'Not enough funds' : 'Buy' }}</button>
        </div>
        <div class="row small mx-auto">Maximum you can buy: {{ maxShares }}</div>
      </div>
    </div>

  </div>
</template>


<style scoped="">
  .danger {
    border: 1px solid red;
  }
</style>


<script>
  export default {
    props: [ 'stock' ],
    data() {
      return {
        quantity: 0,
      }
    },
    computed: {
      funds() {
        return this.$store.getters.funds;
      },
      maxShares() {
        return Math.floor(this.funds / this.stock.price) ;
      },
      insufficientFunds() {
        return this.stock.price * this.quantity > this.funds;
      }
    },
    methods: {
      buyStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: Number(this.quantity),          
        };
        this.$store.dispatch('buyStock', order);
        this.quantity = 0;
      }
    }
  }
</script>