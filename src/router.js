import { createRouter, createWebHistory } from "vue-router";

import AppHeader from './pages/AppHeader.vue';
import AboutMe from './pages/AboutMe.vue';
import Skills from './pages/Skills.vue';
import Portfolio from './pages/Portfolio.vue';
import Contact from './pages/Contact.vue';

const router = createRouter({
      history: createWebHistory(),
      routes: [
            {
                  path: '/',
                  name: 'homepage',
                  component: AppHeader
            }, {
                  path: '/about-me',
                  name: 'about-me',
                  component: AboutMe
            }, {
                  path: '/skills',
                  name: 'skills',
                  component: Skills
            }, {
                  path: '/portfolio',
                  name: 'portfolio',
                  component: Portfolio
            }, {
                  path: '/contact',
                  name: 'contact',
                  component: Contact
            }
      ]
});

export { router };