import Vue from 'vue'
import Vuex from 'vuex'
import Axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    setUser(state,payload){
      state.user = payload
    },
  },
  actions: {
    signUserUp({commit},payload){
      Axios.post('http://localhost:5000/api/auth/register',{
        username:payload.username,
        email:payload.email,
        password:payload.password
      })
          .then((response)=>{
            const newUser = response.data
            commit('setUser',newUser);
            localStorage.setItem('user',JSON.stringify(newUser));
          })
          .catch(err=>{
            console.log(err)
          });
    },
    signUserIn({commit},payload){
        console.log(payload)
      Axios.post('http://localhost:5000/api/auth/login',{
        username:payload.username,
        password:payload.password
      }).then((response)=>{
            const newUser = response.data
            console.log(response)
            commit('setUser',newUser)
          })
          .catch(err=>{
            console.log(err)
          });
    },
  },
  modules: {
  }
})
