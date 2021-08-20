<template>
  <div class="single_blog">
    <BreadComponent/>
    <div class="main_section">
      <div class="page-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="page-wrapper">
                <div class="container">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="post post-single">
                        <div class="post-thumb">
                          <img class="img-fluid" src="../assets/images/blog/blog-post-1.jpg" alt="">
                        </div>
                        <h2 class="post-title">{{post.title}}</h2>
                        <div class="post-meta">
                          <ul>
                            <li>
                              <i class="tf-ion-ios-calendar"></i> {{ post.createdAt }}
                            </li>
                            <li>
                              <i class="tf-ion-android-person"></i> POSTED BY {{ post.author }}
                            </li>
                            <li>
                              <span v-for="category in post.categories" :key="category[0]">
                  <i class="tf-ion-ios-pricetags"></i> {{category}}
                </span>
                            </li>
                          </ul>
                        </div>
                        <div class="post-content post-excerpt">
                          <p>{{post.description}}</p>
                        </div>
                        <div class="post-social-share">
                          <h3 class="post-sub-heading">Share this post</h3>
                          <div class="social-media-icons">
                            <ul>
                              <li><a class="facebook" href="https://themefisher.com/"><i class="tf-ion-social-facebook"></i></a></li>
                              <li><a class="twitter" href="https://themefisher.com/"><i class="tf-ion-social-twitter"></i></a></li>
                              <li><a class="dribbble" href="https://themefisher.com/"><i class="tf-ion-social-dribbble-outline"></i></a></li>
                              <li><a class="instagram" href="https://themefisher.com/"><i class="tf-ion-social-instagram"></i></a></li>
                              <li><a class="googleplus" href="https://themefisher.com/"><i class="tf-ion-social-googleplus"></i></a></li>
                            </ul>
                          </div>
                        </div>


                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <RightSideComponent/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadComponent from "../components/BreadComponent";
import RightSideComponent from "../components/RightSideComponent";
export default {
  name: "SingleBlog",
  components: {
    BreadComponent,
    RightSideComponent
  },
  data(){
    return{
      post:[],
    }
  },
  mounted() {
    this.loadPost();
  },
  methods:{
    async loadPost (){
      const endpoint = `post/${this.$route.params.id}`
      await this.$axios.get(this.$api+endpoint)
          .then((response)=>{
            this.post = response.data;
            console.log(this.post)
          })
          .catch();
    },
  }
}
</script>

<style scoped>
.post .post-content p{
text-align: justify;
}
</style>