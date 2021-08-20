<template>
  <div class="home_page">
    <BreadComponent/>
    <div class="main_section">
      <div class="page-wrapper">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="category_text">
<!--                <h3 class="text-capitalize mb-5">{{posts.categories}}</h3>-->
              </div>
              <div class="post"
              v-for="post in posts.slice(0,3)"
                   :key="post._id"
              >
                <div class="post-media post-thumb">
                  <router-link :to="{ name: 'singleBlog', params: { id: post._id }}">
                    <img src="../assets/images/blog/blog-post-1.jpg" :alt="post.title">
                  </router-link>
                </div>
                <h2 class="post-title"><router-link :to="{ name: 'singleBlog', params: { id: post._id }}">{{post.title}}</router-link></h2>
                <div class="post-meta">
                  <ul>
                    <li>
                      <i class="tf-ion-ios-calendar"></i> {{post.createdAt}}
                    </li>
                    <li>
                      <i class="tf-ion-android-person"></i> POSTED BY {{post.author}}
                    </li>
                    <li>
                      <span v-for="category in post.categories" :key="category[0]">
                  <i class="tf-ion-ios-pricetags"></i> {{category}}
                </span>
                    </li>
                  </ul>
                </div>
                <div class="post-content">
                  <p>{{post.description.substring(0,432)+' ...'}}</p>
                  <router-link :to="{ name: 'singleBlog', params: { id: post._id }}" class="btn btn-main">Continue Reading</router-link>
                </div>

              </div>

              <div class="post">
                <h2 class="post-title"><a href="blog-single.html">Standard Text Post</a></h2>
                <div class="post-meta">
                  <ul>
                    <li>
                      <i class="tf-ion-ios-calendar"></i> 20, MAR 2017
                    </li>
                    <li>
                      <i class="tf-ion-android-person"></i> POSTED BY ADMIN
                    </li>
                    <li>
                      <a href="#!"><i class="tf-ion-ios-pricetags"></i> LIFESTYLE</a>,<a href="#!"> TRAVEL</a>, <a href="#!">FASHION</a>
                    </li>
                    <li>
                      <a href="#!"><i class="tf-ion-chatbubbles"></i> 4 COMMENTS</a>
                    </li>
                  </ul>
                </div>
                <div class="post-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vitae placeat ad architecto nostrum asperiores vel aperiam, veniam eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque veniam fugiat quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio vitae ab doloremque accusamus sit, eos dolorum officiis a perspiciatis aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, facere</p>
                  <a href="blog-single.html" class="btn btn-main">Continue Reading</a>
                </div>
              </div>
              <div class="post">
                <div class="post-media post-media-audio">
                  <iframe src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/115637399&amp;color=ff5500&amp;auto_play=false&amp;show_artwork=true" class="DRAGDIS_iframe"></iframe>
                </div>
                <h2 class="post-title"><a href="blog-single.html">Standard Audio Post</a></h2>
                <div class="post-meta">
                  <ul>
                    <li>
                      <i class="tf-ion-ios-calendar"></i> 20, MAR 2017
                    </li>
                    <li>
                      <i class="tf-ion-android-person"></i> POSTED BY ADMIN
                    </li>
                    <li>
                      <a href="#!"><i class="tf-ion-ios-pricetags"></i> LIFESTYLE</a>,<a href="#!"> TRAVEL</a>, <a href="#!">FASHION</a>
                    </li>
                    <li>
                      <a href="#!"><i class="tf-ion-chatbubbles"></i> 4 COMMENTS</a>
                    </li>
                  </ul>
                </div>
                <div class="post-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vitae placeat ad architecto nostrum asperiores vel aperiam, veniam eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque veniam fugiat quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio vitae ab doloremque accusamus sit, eos dolorum officiis a perspiciatis aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, facere</p>
                  <a href="blog-single.html" class="btn btn-main">Continue Reading</a>
                </div>
              </div>
              <div class="post">
                <div class="post-media post-media-audio">
                  <iframe height="400" src="https://www.youtube.com/embed/Ljik3zsGNF4"  allowfullscreen></iframe>
                </div>
                <h2 class="post-title"><a href="blog-single.html">Standard Video Post</a></h2>
                <div class="post-meta">
                  <ul>
                    <li>
                      <i class="tf-ion-ios-calendar"></i> 20, MAR 2017
                    </li>
                    <li>
                      <i class="tf-ion-android-person"></i> POSTED BY ADMIN
                    </li>
                    <li>
                      <a href="#!"><i class="tf-ion-ios-pricetags"></i> LIFESTYLE</a>,<a href="#!"> TRAVEL</a>, <a href="#!">FASHION</a>
                    </li>
                    <li>
                      <a href="#!"><i class="tf-ion-chatbubbles"></i> 4 COMMENTS</a>
                    </li>
                  </ul>
                </div>
                <div class="post-content">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit vitae placeat ad architecto nostrum asperiores vel aperiam, veniam eum nulla. Maxime cum magnam, adipisci architecto quibusdam cumque veniam fugiat quae. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio vitae ab doloremque accusamus sit, eos dolorum officiis a perspiciatis aliquid. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod, facere</p>
                  <a href="blog-single.html" class="btn btn-main">Continue Reading</a>
                </div>
              </div>
              <div class="text-center">
                <ul class="pagination post-pagination">
                  <li><a href="#!">Prev</a>
                  </li>
                  <li class="active"><a href="#!">1</a>
                  </li>
                  <li><a href="#!">2</a>
                  </li>
                  <li><a href="#!">3</a>
                  </li>
                  <li><a href="#!">4</a>
                  </li>
                  <li><a href="#!">5</a>
                  </li>
                  <li><a href="#!">Next</a>
                  </li>
                </ul>
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
  name: "SingleCategory",
  components: {
    BreadComponent,
    RightSideComponent
  },
  data(){
    return{
      posts:[],
    }
  },
  mounted() {
    this.loadPost();
  },
  methods:{
    async loadPost (){
      const endpoint = `post?cat=${this.$route.params.id}`
      //const endpoint = `post`
      await this.$axios.get(this.$api+endpoint)
          .then((response)=>{
            this.posts= response.data;
            console.log(endpoint)
          })
          .catch();
    },
  }
}
</script>

<style scoped>

</style>