<template>
  <div class="col-md-6 col-lg-4">

    <div class="card">
      <div class="card-header">
        <strong>{{ stock.name }}</strong> 
        current: {{ stock.price | currency }} 
        <small 
            :class=" falling ? 'text-danger' :'text-success' "
            v-if="stock.oldPrice">
          (<span v-if="!falling">+</span>{{ difference }})
        </small>
      </div>

      <div class="card-body">
        <div class="row">        
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
          <button
                  @click="buyMaximum"
                  class="btn btn-sm btn-warning"
                  >Buy {{ maxShares }} Shares</button>
        </div>
        <div class="row small">Maximum you can buy: {{ maxShares }}</div>
      </div>
    </div>

  </div>
</template>


<style scoped="">
  .danger {
    border: 1px solid red;
  }
  button {
    cursor: pointer;
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
      },
      falling() {
        return (this.stock.price - this.stock.oldPrice) < 0;
      },
      difference() {
        return this.stock.price - this.stock.oldPrice;
      },
    },
    methods: {
      buyMaximum() {
        this.buyStock('max');
      },
      buyStock(what) {
        if (what=='max') this.quantity = this.maxShares;
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: Number(this.quantity),          
        };
        this.$store.dispatch('buyStock', order);
        this.quantity = 0;
        if (this.funds < this.stock.price)
          this.$router.push({ name: 'portfolio'})
      }
    }
  }
</script>