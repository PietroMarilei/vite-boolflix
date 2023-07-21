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
    doubleAxios () {
      axios.all([
        axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=91c455c07b1eb6c90d8fd768159a39c3"),
        axios.get("https://api.themoviedb.org/3/genre/tv/list?api_key=91c455c07b1eb6c90d8fd768159a39c3")
      ])
        .then(axios.spread((movieResponse, tvResponse) => {
          this.store.genresArr = {
            movieGenres: movieResponse.data,
            tvGenres: tvResponse.data
          };
          console.log(this.store.genresArr);
        }))
        
    }
  },
  created() {
    //discover call
     axios
      .get("https://api.themoviedb.org/3/discover/movie?api_key=91c455c07b1eb6c90d8fd768159a39c3", {
        params: {         
        }
      })
      .then(response => {
        this.store.discoverArr = response.data.results;
        //console.log(this.store.discoverArr);
        
      });
      //popular call
      axios
      .get("https://api.themoviedb.org/3/movie/popular?api_key=91c455c07b1eb6c90d8fd768159a39c3", {
        params: {
          page:2,
          //fake a different page
        }
      })
      .then(response => {
        this.store.popularArr = response.data.results;
      })
      axios.all([
      axios.get("https://api.themoviedb.org/3/genre/movie/list?api_key=91c455c07b1eb6c90d8fd768159a39c3"),
      axios.get("https://api.themoviedb.org/3/genre/tv/list?api_key=91c455c07b1eb6c90d8fd768159a39c3")
    ])
      .then(axios.spread((movieResponse, tvResponse) => {
        this.store.genresArr.push(movieResponse.data);
        this.store.genresArr.push(tvResponse.data);

        console.log(this.store.genresArr);
      }))
      //genres call
      // axios
      //   .get("https://api.themoviedb.org/3/genre/movie/list?api_key=91c455c07b1eb6c90d8fd768159a39c3", {
      //     params: {
      //     }
      //   })
      //   .then(response => {
      //     this.store.genresArr = response.data;
      //     console.log(this.store.genresArr);
      //   })
      // axios
      // .get("https://api.themoviedb.org/3/genre/tv/list?api_key=91c455c07b1eb6c90d8fd768159a39c3", {
      //     params: {
      //     }
      // })
      // .then(response => {
      //     this.store.genresArr = response.data;
      //     console.log(this.store.genresArr);
      // }),
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
