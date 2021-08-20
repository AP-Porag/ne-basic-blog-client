<template>
  <div class="home_page">
    <CarouselComponent class="mt-3"/>
    <section class="category_section">
      <div class="section_heading">
        <h3 class="text-capitalize mb-5">top category</h3>
      </div>
      <div class="row">
        <div class="col-md-4"
             v-for="category in categories.slice(0, 3)"
             :key="category._id"
        >
          <router-link :to="{ name: 'category', params: { id: category._id }}">
            <b-card
                overlay
                :img-src="category.thumbnail"
                :img-alt="category.title"
                text-variant="white"
                :title="category.title"
            >
            </b-card>
          </router-link>
        </div>
      </div>
      <div class="row mt-3"
           v-if="categories.length > 3"
      >
        <div class="col-md-6"
             v-for="category in categories.slice(4,6)"
             :key="category._id"
        >
          <router-link :to="{ name: 'category', params: { id: category._id }}">
            <b-card
                overlay
                :img-src="category.thumbnail"
                :img-alt="category.title"
                text-variant="white"
                :title="category.title"
            >
            </b-card>
          </router-link>
        </div>
      </div>
    </section>
    <section class="latest_post_section">
      <div class="section_heading">
        <h3 class="text-capitalize mb-5">Latest Post</h3>
      </div>
      <div class="row">
        <div class="col-md-3"
             v-for="post in posts"
             :key="post.id"
        >
          <div class="post">
            <div class="post-thumb">
              <router-link :to="{ name: 'singleBlog', params: { id: post._id }}">
                <img class="img-fluid" :src="post.thumbnail" alt="">
              </router-link>
            </div>
            <h2 class="post-title">
              <router-link :to="{ name: 'singleBlog', params: { id: post._id }}">{{ post.title }}</router-link>
            </h2>
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
                  <i class="tf-ion-ios-pricetags"></i> {{ category }}
                </span>
                </li>
              </ul>
            </div>
            <div class="post-content">
              <p>{{ post.description }}</p>
              <router-link :to="{ name: 'singleBlog', params: { id: post._id }}" class="btn btn-main">Continue Reading
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import CarouselComponent from "../components/CarouselComponent";
// @ is an alias to /src
export default {
  name: 'Home',
  components: {
    CarouselComponent
  },
  props: ['categories'],
  data() {
    return {
      posts: [],
    }
  },
  mounted() {
    this.loadPost();
  },
  methods: {
    async loadPost() {
      const endpoint = 'post'
      await this.$axios.get(this.$api + endpoint)
          .then((response) => {
            this.posts = response.data;
          })
          .catch();
    },

  }
}
</script>

<style lang="scss">

.home_page {
}

.category_section {
  margin-top: 100px;
  padding-right: 15px;
  padding-left: 15px;
}

.latest_post_section {
  margin-top: 100px;
  padding-right: 15px;
  padding-left: 15px;
}

.latest_post_section .post {
  border: 1px solid #b9b9b9;
  border-radius: 3px;
}

.position-relative {
  height: 280px;
}

.position-relative img {
  height: 280px;
}
</style>
