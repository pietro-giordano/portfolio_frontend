<script>
import Navbar from './components/Navbar.vue';
import AppFooter from './components/AppFooter.vue';

export default {
      name: 'App',
      components: {
            Navbar,
            AppFooter
      }
}
</script>

<template>
      <Navbar />

      <router-view></router-view>>

      <AppFooter />
</template>

<style>
/* ===== Scrollbar CSS ===== */
/* Firefox */
* {
      scrollbar-width: auto;
      scrollbar-color: #ffa559 #ffe6c7;
}

/* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
      width: 8px;
}

*::-webkit-scrollbar-track {
      background: #ffe6c7;
}

*::-webkit-scrollbar-thumb {
      background-color: #ffa559;
      border-radius: 10px;
      border: 0px solid #ffa559;
}

/* ======================= */

body {
      overflow-x: hidden;
}
</style>
