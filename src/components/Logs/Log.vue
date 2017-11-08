<template>
  <a 
      :class="log.action=='BUY_STOCKS' ? 'list-group-item-primary' : 'list-group-item-secondary'"
      class="list-group-item">

    {{ log.timestamp }} | 

    {{ log.action }} | 

    <span class="small">{{ JSON.stringify(log.data) }}</span>

  </a>
</template>


<script>
  export default {
    props: ['log'],
  }
</script>