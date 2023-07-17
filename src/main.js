import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import VueWriter from "vue-writer";
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas, far, fab)

createApp(App)
      .component('font-awesome-icon', FontAwesomeIcon)
      .use(VueWriter)
      .use(VueSweetalert2)
      .mount('#app')
