<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-2">

    <router-link to="/" class="navbar-brand">Stock Trader</router-link>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>


    <div class="collapse navbar-collapse" id="navbarSupportedContent">

      <ul class="navbar-nav mr-auto">

        <li class="nav-item">
          <router-link to="/portfolio" activeClass="active"><a class="nav-link">Portfolio</a></router-link>
        </li>

        <li>
          <router-link to="/stocks" activeClass="active"><a class="nav-link">Stocks</a></router-link>
        </li>
      </ul>

      <span class="navbar-text mr-auto">
        Funds:
        <strong :class="fundsColour">{{ funds | currency }}</strong>
        Portfolio Value:
        <strong :class="valueColour">{{ portfolioValue | currency }}</strong>
      </span>

      <ul class="navbar-nav">
        <li class="nav-item">
          <a href="#" @click="endDay" activeClass="active" class="nav-link">End Day</a>
        </li>
        <li class="nav-item dropdown">
          <a  
              class="nav-link dropdown-toggle" 
              href="#" 
              id="navbarDropdown" 
              role="button" 
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false">
            Save / Load
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Save Data</a>
            <a class="dropdown-item" href="#">Load Data</a>
          </div>
        </li>
      </ul>

    </div>

  </nav>
</template>

<script>
  import {mapActions} from 'vuex';

  export default {
    computed: {
      funds() {
        return this.$store.getters.funds;
      },
      portfolioValue() {
        return this.$store.getters.portfolioValue;
      },
      fundsColour() {
        return this.funds > 1000 ? 'text-success' : this.funds > 250 ? 'text-warning' : 'text-danger';
      },
      valueColour() {
        return this.portfolioValue > 1000 ? 'text-success' : 'text-info';
      },
    },
    methods: {
      ...mapActions([
        'randomizeStocks'
      ]),
      endDay() {
        this.randomizeStocks();
      }
    }
  }
</script>
