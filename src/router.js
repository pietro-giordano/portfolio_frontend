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
                  name: 'Home',
                  component: AppHeader
            }, {
                  path: '/about-me',
                  name: 'About',
                  component: AboutMe
            }, {
                  path: '/skills',
                  name: 'Skills',
                  component: Skills
            }, {
                  path: '/projects',
                  name: 'Projects',
                  component: Portfolio
            }, {
                  path: '/contact',
                  name: 'Contact',
                  component: Contact
            }
      ]
});

export { router };