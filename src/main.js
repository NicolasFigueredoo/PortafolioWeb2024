import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


import 'animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDesktop, faDiamond} from '@fortawesome/free-solid-svg-icons'
import { faMoon} from '@fortawesome/free-regular-svg-icons'

import { faGithub, faLinkedin, faWhatsapp} from '@fortawesome/free-brands-svg-icons'

import './assets/css/font.css';






library.add(faMoon, faDesktop,faGithub,faLinkedin,faWhatsapp,faDiamond)



createApp(App)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)

.mount('#app')


