import { createRouter, createWebHistory } from "vue-router";

import AppHeader from './views/AppHeader.vue';
import AboutMe from './views/AboutMe.vue';
import Skills from './views/Skills.vue';
import Portfolio from './views/Portfolio.vue';
import Contact from './views/Contact.vue';

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