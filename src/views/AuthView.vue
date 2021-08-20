<template>
  <div class="AuthView signin-page account">
    <div class="container">
      <router-link to="/">web</router-link>
      <div class="row">
        <div class="col-md-6">
          <div class="signup_image" v-if="$route.name === 'signup'">
            <img src="../assets/images/Sign_in_re_o58h.svg" alt="sign-up image" class="img-fluid">
          </div>
          <div class="login_image" v-if="$route.name === 'login'">
            <img src="../assets/images/Login_re_4vu2.svg" alt="sign-up image" class="img-fluid">
          </div>
          <div class="reset_pass_image" v-if="$route.name === 'reset-password'">
            <img src="../assets/images/forgot_password_gi2d.svg" alt="sign-up image" class="img-fluid">
          </div>
        </div>
        <div class="col-md-6">
          <router-view/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthView"
}
</script>

<style scoped>
.login_image{
  margin-top: 109px;
}
.signup_image{
  margin-top: 281px;
}
.reset_pass_image{
  margin-top: 60px;
}
</style>