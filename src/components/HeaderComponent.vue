<template>
  <div id="top_section">

    <!-- Start Top Header Bar -->
    <section class="top-header">
      <div class="container" style="border-bottom: 1px solid #999999">
        <div class="row">
          <div class="col-md-6 col-xs-12 col-sm-6">
            <!-- Site Logo -->
            <div class="logo">
              <router-link to="/">
                <!-- replace logo here -->
                <svg width="135px" height="29px" viewBox="0 0 155 29" version="1.1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink">
                  <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" font-size="40"
                     font-family="AustinBold, Austin" font-weight="bold">
                    <g id="Group" transform="translate(-108.000000, -297.000000)" fill="#000000">
                      <text id="AVIATO">
                        <tspan x="108.94" y="325">NEAVIATO</tspan>
                      </text>
                    </g>
                  </g>
                </svg>
              </router-link>
            </div>
          </div>
          <div class="col-md-6 col-xs-12 col-sm-6">
            <div class="auth_button_box" style="float: right">
              <router-link :to="{ name: 'login'}" class="btn btn-dark" style="margin-right: 30px;"
                           v-if="user===null"
              >login
              </router-link>
              <router-link :to="{ name: 'signup'}" class="btn btn-dark" style="margin-right: 30px;"
                           v-if="user===null"
              >Signup
              </router-link>
              <button class="btn btn-dark" style="margin-right: 30px;" @click="userLogout"
                      v-if="user"
              >logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </section><!-- End Top Header Bar -->

    <!-- Main Menu Section -->

    <div class="menu">
      <b-navbar toggleable="lg" type="dark" class="navbar navigation">

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav style="margin-top: 15px">
          <div class="container">
            <!-- Navbar Links -->
            <b-navbar-nav id="navbar" class="navbar-collapse collapse text-center">
              <ul class="nav navbar-nav" style="margin: 0 auto">

                <!-- Home -->
                <li class="dropdown nav-item">
                  <router-link :to="{ name: 'home'}">Home</router-link>
                </li>
                <!-- / Home -->

                <!-- Category -->
                <li class="dropdown dropdown-slide nav-item">
                  <a href="#!" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-delay="350"
                     role="button" aria-haspopup="true" aria-expanded="false">Blog <span
                      class="tf-ion-ios-arrow-down"></span></a>
                  <ul class="dropdown-menu">
                    <li
                        v-for="category in categories"
                        :key="category._id"
                    >
                      <router-link :to="{ name: 'category', params: { id: category._id }}">{{ category.title }}
                      </router-link>
                    </li>
                  </ul>
                </li>
                <!-- / Category -->

                <!-- Write -->
                <li class="dropdown nav-item" v-if="user">
                  <router-link :to="{ name: 'write'}">Write</router-link>
                </li>
                <!-- / Write -->

                <!-- Profile -->
                <li class="dropdown nav-item" v-if="user">
                  <router-link :to="{ name: 'profile'}">Profile</router-link>
                </li>
                <!-- / Profile -->

                <!-- About -->
                <li class="dropdown nav-item">
                  <router-link :to="{ name: 'about'}">About</router-link>
                </li>
                <!-- / About -->

                <!-- Contact -->
                <li class="dropdown nav-item">
                  <router-link :to="{ name: 'contact'}">Contact</router-link>
                </li>
                <!-- / Contact -->

              </ul><!-- / .nav .navbar-nav -->

            </b-navbar-nav>
            <!--/.navbar-collapse -->
          </div>
          <!-- Right aligned nav items -->
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderComponent",
  props: ['categories'],
  data() {
    return {
      user: '',
    }
  },
  mounted() {
    this.getUserFromLocalStorage();
  },
  methods: {
    getUserFromLocalStorage() {
      this.user = JSON.parse(localStorage.getItem('user'));
      console.log(this.user)

    },
    userLogout() {
      localStorage.removeItem('user');
    }
  }
}
</script>

<style scoped>
.top-header .container {
  padding-top: 25px;
  padding-bottom: 25px;
}
</style>