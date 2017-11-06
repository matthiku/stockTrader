<template>
  <div class="col-sm-6 col-md-4">

    <div class="card">
      <div class="card-header">
        {{ stock.name }} 
        <small>(Price: € {{ stock.price }})</small>
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
                  @click="buyStock"
                  :disabled="quantity <= 0 || !Number.isInteger(quantity * 1)" 
                  class="btn btn-success"
                  >Buy</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    props: [ 'stock' ],
    data() {
      return {
        quantity: 0,
      }
    },
    methods: {
      buyStock() {
        const order = {
          stockId: this.stock.id,
          stockPrice: this.stock.price,
          quantity: this.quantity,          
        };
        console.log(order);
        this.quantity = 0;
      }
    }
  }
</script>