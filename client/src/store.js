import Vue from 'vue'
import Vuex from 'vuex'

import Auth from './modules/Auth'
import Posts from './modules/Posts'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Auth,
        Posts
    },
    state: {},
    mutations: {},
    actions: {}
})
