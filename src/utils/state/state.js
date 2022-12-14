import Vue from "vue";
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLogin: false,
        roles : [],
        info : {}
    },
    mutations: {
        login(state) {
            state.isLogin = true
        },
        setRoles(state,data) {
            state.roles = data
        },
        setInfo(state,info) {
            state.info = info
        }
    },
    getters:{
        isTuanOwnerOrTuanAdmin:(state)=>()=>{
            return state.roles.filter(it => it === 2 || it === 3).length > 0
        },
        isTuanOwner:(state)=>()=>{
            return state.roles.filter(it => it === 2).length > 0
        },
        isTuanAdmin:(state)=>()=>{
            return state.roles.filter(it => it === 3).length > 0
        }
    }
})