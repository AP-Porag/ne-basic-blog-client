<template>
  <div class="carousel_box">
    <b-carousel
        id="carousel"
        v-model="slide"
        :interval="4000"
        controls
        indicators
        background="#ababab"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide
          v-for="category in categories"
          :key="category._id"
          :caption="category.title"
          :img-src="category.thumbnail"
          img-height="100px"
      ></b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  name: "CarouselComponent",
  data() {
    return {
      slide: 0,
      sliding: null,
      categories: []
    }
  },
  mounted() {
    this.loadCategory();
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true
    },
    onSlideEnd(slide) {
      this.sliding = false
    },
    async loadCategory() {
      const endpoint = 'category'
      await this.$axios.get(this.$api + endpoint)
          .then((response) => {
            this.categories = response.data;
            console.log(this.categories)
          })
          .catch();
    },
  }
}
</script>

<style lang="scss">
.carousel_box {
  height: 760px;
}

.carousel_box img {
  height: 760px;
}

.carousel-caption h3 {
  text-transform: uppercase;
}
</style>
