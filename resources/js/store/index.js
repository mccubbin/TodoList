import Vue from "vue"
import Vuex from "vuex"
import itemsStatus from "./modules/itemsStatus"

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        itemsStatus
    }
})
