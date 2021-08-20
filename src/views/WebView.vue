<template>
<div class="web_view">
  <HeaderComponent
  :categories="categories"
  />
  <router-view
      :categories="categories"
  />
  <FooterComponent/>
</div>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
export default {
  name: "WebView",
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data(){
    return{
      categories:[]
    }
  },
  mounted() {
    this.loadCategory();
  },
  methods:{
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