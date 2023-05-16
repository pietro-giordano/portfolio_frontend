<script>
import AppHeader from './components/AppHeader.vue';
import AboutMe from './components/AboutMe.vue';
import Skills from './components/Skills.vue';
import Portfolio from './components/Portfolio.vue';
import Contact from './components/Contact.vue';
import AppFooter from './components/AppFooter.vue';

export default {
      name: 'App',
      components: {
            AppHeader,
            AboutMe,
            Skills,
            Portfolio,
            Contact,
            AppFooter
      }
}
</script>

<template>
      <AppHeader />

      <AboutMe />

      <Skills />

      <Portfolio />

      <Contact />

      <AppFooter />
</template>

<style></style>
