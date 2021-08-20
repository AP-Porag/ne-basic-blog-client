<template>
  <div class="write_post_page">
    <BreadComponent/>

    <div class="page-wrapper">
      <div class="checkout shopping">
        <div class="container">
          <div class="row">
            <div class="col-md-8">
              <div class="block billing-details">
                <h4 class="widget-title">Create post</h4>
                <form class="checkout-form" @submit.prevent="createNewPost">
                  <div class="form-group">
                    <label for="full_name">Title</label>
                    <input type="text" class="form-control" id="full_name" placeholder="" v-model="formData.title">
                  </div>
                  <div class="checkout-country-code clearfix">
                    <div class="form-group" style="display:none;">
                      <label for="user_address">Author</label>
                      <input type="text" class="form-control" v-model="formData.author" id="user_address"
                             placeholder="" disabled readonly>
                    </div>
                    <div class="form-group">
                      <label for="post_category">Category</label>
                      <select class="form-control" v-model="formData.categories" id="post_category">
                        <option v-for="category in categories">{{ category.title }}</option>
                      </select>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="image_preview">Image Preview</label>
                    <div class="" id="image_preview" v-if="imageUrl">
                      <img v-if="imageUrl" :src="imageUrl" class="img-fluid"/>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="user_post_code">Thumbnail</label>
                    <input type="file" accept="image/*" @change="onChange" class="form-control" id="user_post_code"/>
                  </div>
                  <div class="form-group">
                    <label for="user_country">Description</label>
                    <textarea rows="10" type="text" class="form-control" id="user_country" placeholder=""
                              v-model="formData.description"></textarea>
                  </div>
                  <div class="">
                    <button class="btn btn-main mt-20">Save Post</button>
                  </div>
                </form>
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
                      <h4 class="media-heading text-capitalize text-center mt-3 mb-5"><a
                          href="product-single.html">{{ user.username }}</a></h4>
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
import Axios from "axios";

export default {
  name: "WritePost",
  components: {
    BreadComponent,
  },
  data() {
    return {
      user: '',
      posts: [],
      categories: [],
      imageUrl: null,
      formData: {
        title: '',
        description: '',
        thumbnail: null,
        author: '',
        categories: []
      }
    }
  },
  mounted() {
    this.getUserFromLocalStorage();
    this.loadPost();
    this.loadCategory();
  },
  methods: {
    getUserFromLocalStorage() {
      this.user = JSON.parse(localStorage.getItem('user'));
      this.formData.author = this.user.username
      console.log(this.user.username)

    },
    async loadPost() {
      const endpoint = `post?user=${this.user.username}`
      //const endpoint = `post`
      await this.$axios.get(this.$api + endpoint)
          .then((response) => {
            this.posts = response.data;
          })
          .catch();
    },
    onChange(e) {
      const file = e.target.files[0]
      this.formData.thumbnail = file
      this.imageUrl = URL.createObjectURL(file)
    },
    async createNewPost() {
      await Axios.post('http://localhost:5000/api/post', this.formData)
          .then((response) => {
            console.log(response)
          })
          .catch(err => {
            console.log(err)
          });
    },
    async loadCategory() {
      const endpoint = 'category'
      await this.$axios.get(this.$api + endpoint)
          .then((response) => {
            this.categories = response.data;
          })
          .catch(err => {
            console.log(err)
          });
    },
  }
}
</script>

<style scoped>
#image_preview {
  height: 250px;
  width: 100%;
  border: 4px solid #999999;
  border-radius: 4px;
}

#image_preview img {
  height: 242px;
  width: 100%;
}
</style>