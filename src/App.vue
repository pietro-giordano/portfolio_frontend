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

<style></style>
