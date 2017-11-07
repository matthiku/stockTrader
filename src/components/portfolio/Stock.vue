<template>
  <div class="col-md-6 col-lg-4">

    <div class="card">
      <div class="card-header bg-secondary">
        {{ stock.name }} 
        <small>(Price: € {{ stock.price }} | {{ stock.quantity }})</small>
      </div>

      <div class="card-body">
        <div class="float-left">
          <input
                  v-model="quantity"
                  type="number" 
                  class="form-control"
                  placeholder="Quantity"
                  >
        </div>
        <div class="float-right">
          <button
                  @click="sellStock"
                  :disabled="quantity <= 0 || !Number.isInteger(quantity * 1)" 
                  class="btn btn-success"
                  >Sell</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
	import {mapActions} from 'vuex';

  export default {
    props: [ 'stock' ],
    data() {
      return {
        quantity: 0,
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
    			quantity: this.quantity
    		};
    		this.placeSellOrder(order);
    		this.quantity = 0;
    	}
    }
  }
</script>