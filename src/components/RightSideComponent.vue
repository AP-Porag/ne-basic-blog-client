<template>
  <aside class="sidebar">
    <div class="widget widget-subscription">
      <h4 class="widget-title">Get notified updates</h4>
      <form>
        <div class="form-group">
          <input type="email" class="form-control" placeholder="Your Email Address">
        </div>
        <button type="submit" class="btn btn-main">I am in</button>
      </form>
    </div>

    <!-- Widget Latest Posts -->
    <div class="widget widget-latest-post">
      <h4 class="widget-title">Latest Posts</h4>
      <div class="media" style="display: flex;"
      v-for="post in posts.slice(0,4)"
      >
        <router-link class="pull-left" :to="{ name: 'singleBlog', params: { id: post._id }}" style="margin-right: 7px;margin-top: 12px;">
          <img class="media-object" src="../assets/images/blog/post-thumb.jpg" alt="Image">
        </router-link>
        <div class="media-body" style="margin-left: 7px;">
          <h4 class="media-heading"><a href="#!">{{post.title}}</a></h4>
          <p style="text-align: justify">{{post.description.substring(0,72)+' ...'}}</p>
        </div>
      </div>
    </div>
    <!-- End Latest Posts -->

    <!-- Widget Category -->
    <div class="widget widget-category">
      <h4 class="widget-title">Categories</h4>
      <ul class="widget-category-list">
        <li
        v-for="category in categories"
        :key="category._id"
        >
          <a href="#!">{{ category.title }}</a>
        </li>
      </ul>
    </div> <!-- End category  -->

    <!-- Widget tag -->
    <div class="widget widget-tag">
      <h4 class="widget-title">Tag Cloud</h4>
      <ul class="widget-tag-list">
        <li><a href="#!">Animals</a>
        </li>
        <li><a href="#!">Landscape</a>
        </li>
        <li><a href="#!">Portrait</a>
        </li>
        <li><a href="#!">Wild Life</a>
        </li>
        <li><a href="#!">Video</a>
        </li>
      </ul>
    </div> <!-- End tag  -->
  </aside>
</template>

<script>
export default {
  name: "RightSideComponent",
  data(){
    return{
      categories:[],
      posts : [],
    }
  },
  mounted() {
    this.loadCategory();
    this.loadPost();
  },
  methods:{
    async loadPost (){
      const endpoint = 'post'
      await this.$axios.get(this.$api+endpoint)
          .then((response)=>{
            this.posts= response.data;
          })
          .catch();
    },
    async loadCategory (){
      const endpoint = 'category'
      await this.$axios.get(this.$api+endpoint)
          .then((response)=>{
            this.categories= response.data;
          })
          .catch();
    },

  }
}
</script>

<style scoped>

</style>