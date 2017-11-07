<template>
  <div class="col-md-6 col-lg-4">

    <div class="card mb-2">
      <div class="card-header bg-secondary">
        {{ stock.name }} 
        <small>(Price: {{ stock.price | currency }} | {{ stock.quantity }})</small>
      </div>

      <div class="card-body">
        <div class="row mx-auto">        
          <input
                  v-model="quantity"
                  type="number" 
                  class="form-control w-50"
                  :class="{ danger: insufficientQuantity }"
                  placeholder="Quantity"
                  :max="stock.quantity"
                  >
          <button
                  @click="sellStock"
                  :disabled="quantity <= 0 || !Number.isInteger(quantity * 1) || (quantity * 1) > (stock.quantity * 1)" 
                  class="btn btn-success"
                  :class="insufficientQuantity ? 'btn btn-sm btn-danger' : 'btn btn-success'"
                  >{{ insufficientQuantity ? 'Not enough stocks' : 'Sell' }}</button>
        </div>
        <div class="row mx-auto">
          You own {{ stock.quantity }} stocks. Total value:&nbsp;<span class="text-success">{{ stock.quantity * stock.price | currency }}</span>
        </div>
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
	import {mapActions} from 'vuex';

  export default {
    props: [ 'stock' ],
    data() {
      return {
        quantity: 0,
      }
    },
    computed: {
      insufficientQuantity() {
        return this.stock.quantity < this.quantity;
      }
    },
    methods: {
    	...mapActions({
    	    		placeSellOrder: 'sellStock'
    	}),
    	sellStock() {
    		const order = {
    			stockId: this.stock.id,
    			stockPrice: this.stock.price,
    			quantity: Number(this.quantity)
    		};
        if (this.quantity <= this.stock.quantity) {
    		  this.placeSellOrder(order);
        }
    		this.quantity = 0;
    	}
    }
  }
</script>