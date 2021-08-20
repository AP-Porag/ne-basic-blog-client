<template>
  <div class="block text-center">
    <a class="logo" href="index.html">
      <img src="images/logo.png" alt="">
    </a>
    <h2 class="text-center">Create Your Account</h2>
    <form class="text-left clearfix" @submit.prevent="registerUser">
<!--      <div class="form-group">-->
<!--        <input type="text" class="form-control"  placeholder="First Name">-->
<!--      </div>-->
<!--      <div class="form-group">-->
<!--        <input type="text" class="form-control"  placeholder="Last Name">-->
<!--      </div>-->
      <div class="form-group">
        <input type="text" class="form-control"  placeholder="Username" v-model="formData.username">
      </div>
      <div class="form-group">
        <input type="email" class="form-control"  placeholder="Email" v-model="formData.email">
      </div>
      <div class="form-group">
        <input type="password" class="form-control"  placeholder="Password" v-model="formData.password">
      </div>
      <div class="text-center">
        <button class="btn btn-main text-center">Sign In</button>
      </div>
    </form>
    <p class="mt-20">Already hava an account ?<router-link :to="{ name: 'login'}"> Login</router-link></p>
    <p><router-link :to="{ name: 'reset-password'}"> Forgot your password?</router-link></p>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data(){
    return{
      formData:{
        username:'Asraf',
        email:'asraf@aic.mail.com',
        password:'asraf@aic.mail.com',
      }
    }
  },
  methods:{
    async registerUser (){
      await this.$store.dispatch('signUserUp',this.formData)
    }
  }
}
</script>

<style scoped>
.form-group{
  margin-bottom: 15px;
}
</style>