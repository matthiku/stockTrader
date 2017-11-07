<template>
  <div class="container">
    
    <app-header></app-header>

    <div class="row">    
      <transition name="slide" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>

  </div>
</template>


<script>
  import Header from './components/Header.vue';
  export default {
    components: {
      appHeader: Header,
    },
    created() {
      this.$store.dispatch('initStocks');
    },
  }
</script>


<style>
  body {
    padding: 30px;
  }

  .slide-enter-active {
    animation: slide 200ms ease-out normal;
  }
  .slide-leave-active {
    animation: slide 200ms ease-out reverse;
  }
  @keyframes slide {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    text-outline: {
      transform: translateY(0);
      opacity: 1;
    }
  }
</style>
