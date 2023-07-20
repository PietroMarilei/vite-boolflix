<script>
import axios from "axios"
import{ store }  from '../store'
export default {
  data() {
    return {
        queryInput: '',
        store,
    }
  },
  methods: {
     searchFunctionFilm() {
      axios
        .get("https://api.themoviedb.org/3/search/movie?api_key=91c455c07b1eb6c90d8fd768159a39c3", {
          params: {
            query: this.queryInput,
          }
        })
        .then(response => {
          store.filmArr = response.data.results;
          //console.log( this.store.filmArr);

        })
        
    },
    searchFunctionTv() {
      axios
        .get("https://api.themoviedb.org/3/search/tv?api_key=91c455c07b1eb6c90d8fd768159a39c3", {
          params: {
            query: this.queryInput,
          }
        })
        .then(response => {
          store.tvSeriesArr = response.data.results;
          console.log('tv series result' , this.store.tvSeriesArr);

        })
    }

  },
  
}
</script>

<template>
    
   <header>
    <h1>
      <img src="../assets/img/Netflix-logo.png" alt="">
    </h1>
    <form @submit.prevent="searchFunctionFilm(); searchFunctionTv()" action="">
      <input v-model="queryInput" type="text">
      <button>submit</button>
    </form>

    
    
  </header>

</template>

<style lang="scss" scoped>
    header {
        padding: 0.5rem 1rem;
        text-align: center;
        display: flex;
        justify-content: space-between;
        align-items: center;

        h1 {
          img {
            width: 150px;
          }
        }
    }
</style>