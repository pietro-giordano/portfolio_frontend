<script>
import AppHeader from './components/AppHeader.vue';
import Contact from './components/Contact.vue';
import AppFooter from './components/AppFooter.vue';

export default {
      name: 'App',
      components: {
            AppHeader,
            Contact,
            AppFooter
      }
}
</script>

<template>
      <AppHeader />

      <Contact />

      <AppFooter />
</template>

<style></style>
