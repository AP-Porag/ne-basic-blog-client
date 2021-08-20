<template>
  <div class="profile_page">
    <BreadComponent/>

    <div class="page-wrapper">
      <div class="checkout shopping">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="page-wrapper">
                <div class="container">
                  <div class="row">
                    <div class="col-md-6"
                    v-for="post in posts"
                         :key="post._id"
                    >
                      <div class="post">
                        <div class="post-thumb">
                          <router-link :to="{ name: 'singleBlog', params: { id: post._id }}">
                            <img class="img-responsive" src="../assets/images/blog/blog-post-1.jpg" alt="">
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
                          <a :to="{ name: 'singleBlog', params: { id: post._id }}" class="btn btn-main">Continue Reading</a>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="post">
                        <div class="post-media post-media-audio">
                          <iframe height="390" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/115637399&amp;color=ff5500&amp;auto_play=false&amp;show_artwork=true" class="DRAGDIS_iframe"></iframe>
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
                              <a href="blog-full-width.html"><i class="tf-ion-ios-pricetags"></i> LIFESTYLE</a>,<a href="blog-full-width.html"> TRAVEL</a>, <a href="blog-full-width.html">FASHION</a>
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
                    </div>
                    <div class="col-md-6">
                      <div class="post">
                        <div class="post-media post-media-audio">
                          <iframe width="100%" height="400" src="https://www.youtube.com/embed/Ljik3zsGNF4" frameborder="0" allowfullscreen></iframe>
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
                              <a href="blog-full-width.html"><i class="tf-ion-ios-pricetags"></i> LIFESTYLE</a>,<a href="blog-full-width.html"> TRAVEL</a>, <a href="blog-full-width.html">FASHION</a>
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
                    </div>
                  </div>
                  <div class="text-center">
                    <ul class="pagination post-pagination">
                      <li><a href="blog-left-sidebar.html">Prev</a>
                      </li>
                      <li class="active"><a href="blog-left-sidebar.html">1</a>
                      </li>
                      <li><a href="blog-left-sidebar.html">2</a>
                      </li>
                      <li><a href="blog-left-sidebar.html">3</a>
                      </li>
                      <li><a href="blog-left-sidebar.html">4</a>
                      </li>
                      <li><a href="blog-left-sidebar.html">5</a>
                      </li>
                      <li><a href="blog-left-sidebar.html">Next</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="product-checkout-details">
                <div class="block">
                  <h4 class="widget-title">User Details</h4>
                  <div class="media product-card">
                    <div class="avatar_box">
                      <div class="avatar_box_inner">
                        <img v-if="user.avatar ==null" src="../assets/images/user1.png" class="media-object">
                        <img v-else :src="user.avatar" class="media-object">
                      </div>
                    </div>
                    <div class="media-body">
                      <h4 class="media-heading text-capitalize text-center mt-3 mb-5"><a href="product-single.html">{{user.username}}</a></h4>
                    </div>
                  </div>
                  <div class="summary-total">
                    <span>Total Post</span>
                    <span>23</span>
                  </div>
                  <div class="discount-code">
                  </div>
                  <ul class="summary-prices">
                    <li>
                      <span>Share:</span>
                      <span class="price">20</span>
                    </li>
                    <li>
                      <span>Like:</span>
                      <span>190</span>
                    </li>
                    <li>
                      <span>Comment:</span>
                      <span>25</span>
                    </li>
                  </ul>
                  <div class="summary-total">
                    <span>Total Engagement</span>
                    <span>235</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadComponent from "../components/BreadComponent";
export default {
  name: "Profile",
  components: {
    BreadComponent,
  },
  data(){
    return{
      user:'',
      posts:[],
    }
  },
  mounted() {
    this.getUserFromLocalStorage();
    this.loadPost();
  },
  methods:{
    getUserFromLocalStorage(){
      this.user = JSON.parse(localStorage.getItem('user'));
      console.log(this.user)

    },
    async loadPost (){
      const endpoint = `post?user=${this.user.username}`
      //const endpoint = `post`
      await this.$axios.get(this.$api+endpoint)
          .then((response)=>{
            this.posts= response.data;
            console.log(this.posts)
          })
          .catch();
    },
  }
}
</script>

<style scoped>
.avatar_box{
  margin: 0 auto;
  width: 35%;
  padding: 5px;
  border: 4px solid #999999;
  border-radius: 50%;
}
.avatar_box .avatar_box_inner{
  border: 4px solid #757575;
  padding: 15px;
  border-radius: 50%;
  margin: 0 auto;
}
</style>