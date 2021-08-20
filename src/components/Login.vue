<template>
  <div class="block text-center">
    <a class="logo" href="index.html">
      <img src="images/logo.png" alt="">
    </a>
    <h2 class="text-center">Welcome Back</h2>
    <form class="text-left clearfix" @submit.prevent="loginUser">
      <div class="form-group">
        <input type="text" class="form-control"  placeholder="Email" v-model="formData.username">
      </div>
      <div class="form-group">
        <input type="password" class="form-control" placeholder="Password" v-model="formData.password">
      </div>
      <div class="text-center">
        <button class="btn btn-main text-center" >Login</button>
      </div>
    </form>
    <p class="mt-20">New in this site ?<router-link :to="{ name: 'signup'}"> Create New Account</router-link></p>
  </div>
</template>

<script>
export default {
  name: "Login",
  data(){
    return{
      formData:{
        username:'Asraf',
        password:'asraf@aic.mail.com',
      }
    }
  },
  methods:{
    async loginUser (){
      await this.$store.dispatch('signUserIn',this.formData)
    }
  }
}
</script>

<style scoped>
.form-group{
  margin-bottom: 15px;
}
</style>