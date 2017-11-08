<template>
  <a 
      :class="getItemColour()"
      class="list-group-item">

    {{ log.timestamp }} | 

    {{ log.action }} | {{ logDataType }}

    <span class="small">{{ JSON.stringify(log.data) }}</span>

  </a>
</template>


<script>
  export default {
    props: ['log'],
    computed: {
      logDataType() {
        if (typeof this.log.data === 'string') 
          return 'string';
        if (typeof this.log.data === 'object') 
          return 'object';
        return 'unknown';
      },
    },
    methods: {
      getItemColour() {
        switch (this.log.action) {
          case 'BUY_STOCK':
            return 'list-group-item-success';
            break;
          case 'SELL_STOCK':
            return 'list-group-item-danger';
            break;
          case 'SET_STOCKS':
            return '';
            break;
          case 'RND_STOCKS':
            return 'list-group-item-secondary';
            break;
          case 'RND_STOCKS':
            return 'list-group-item-primary';
            break;
          default:
            return 'list-group-item-dark';
        }
      },
    },
  }
</script>