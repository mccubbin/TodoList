require('./bootstrap');

import Vue from 'vue'
import App from './vue/app'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faPlusSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from "./store"

library.add(faPlusSquare, faTrash)

Vue.component('font-awesome-icon', FontAwesomeIcon)

var vm = new Vue({
    store,
    el: '#app',
    components: { App }
});
