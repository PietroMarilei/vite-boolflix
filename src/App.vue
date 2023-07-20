<script >
import axios from "axios"
import { store } from './store';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';



export default {
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
  },
  data(){
    return {
      store,
      //like to state management
    }
  }, 
  methods: {

  },
  created() {
     axios
      .get("https://api.themoviedb.org/3/discover/movie?api_key=91c455c07b1eb6c90d8fd768159a39c3", {
        params: {
          genre_ids: 5,
        }
      })
      .then(response => {
        store.filmArr = response.data.results;
        console.log(this.store.filmArr);

      });
      axios
      .get("https://api.themoviedb.org/3/discover/tv?api_key=91c455c07b1eb6c90d8fd768159a39c3", {
        params: {
          genre_ids: 3,
        }
      })
      .then(response => {
        store.tvSeriesArr = response.data.results;
        console.log(this.store.tvSeriesArr);

      })
  },
}
</script>

<template>

  <HeaderComponent/>

  <MainComponent/>

  

</template>

<style lang="scss">
  @use "./assets/scss/main.scss" as *;
  @import "./assets/scss/partials/variables.scss" ;
  
  body {
    background-color: rgb(37, 37, 37);
    font-family: Arial, Helvetica, sans-serif;
    color: $text_grey;
  }
</style>
