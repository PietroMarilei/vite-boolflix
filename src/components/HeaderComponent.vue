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
    <h1>Netflix?</h1>
    <form @submit.prevent="searchFunctionFilm(); searchFunctionTv()" action="">
      <input v-model="queryInput" type="text">
      <button>submit</button>
    </form>

    
    
  </header>

</template>

<style lang="scss" scoped>
    header {
        padding: 1rem;
        text-align: center;
    }
</style>