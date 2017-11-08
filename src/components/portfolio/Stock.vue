<template>
  <div class="col-md-6 col-lg-4">

    <div class="card mb-2">
      <div class="card-header bg-secondary">
        <strong>{{ stock.name }}</strong> 
        current: {{ stock.price | currency }} 
        <small 
            :class=" falling ? 'text-danger' :'text-warning' "
            v-if="stock.oldPrice">
          (<span v-if="!falling">+</span>{{ difference }})
        </small>
      </div>

      <div class="card-body">
        <div class="row">
          You own <strong>&nbsp; {{ stock.quantity }} &nbsp;</strong> stocks. Current value:&nbsp;
          <span :class=" loss ? 'text-danger' : 'text-success' ">{{ stock.quantity * stock.price | currency }}</span>
        </div>

        <div class="row">        
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
                  :class="insufficientQuantity ? 'btn btn-sm btn-danger' : 'btn btn-success'"
                  >{{ insufficientQuantity ? 'Not enough stocks' : 'Sell' }}</button>
          <button
                  @click="sellAllStock"
                  class="btn btn-warning"
                  >Sell all {{ stock.quantity }}</button>
        </div>

        <div class="row small">
          Initial purchase @ <strong>&nbsp;{{ stock.initPrice | currency }}</strong>. Purchase value:&nbsp;
          <span class="text-success">{{ stock.quantity * stock.initPrice | currency }}</span>
        </div>
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
      },
      falling() {
        return (this.stock.price - this.stock.oldPrice) < 0;
      },
      difference() {
        return this.stock.price - this.stock.oldPrice;
      },
      loss() {
        return (this.stock.quantity * this.stock.price - this.stock.quantity * this.stock.initPrice) < 0;
      }
    },
    methods: {
    	...mapActions({
    	    		placeSellOrder: 'sellStock'
    	}),
      sellAllStock() {
        this.sellStock('all');
      },
    	sellStock(what) {
        if (what=='all') this.quantity = this.stock.quantity;
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