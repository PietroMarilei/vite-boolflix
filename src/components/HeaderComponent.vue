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
            language: 'it-IT'
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

    <div class="container">
      <div class="row">
        <div class="my_left_header">
        <img src="../assets/img/Netflix-logo.png" alt="">
        <ul id="my_ul">
          <li>Film</li>
          <li>Serie Tv</li>
          <li>Kids</li>
          <li>Trending</li>
        </ul>
      </div>
      <form @submit.prevent="searchFunctionFilm(); searchFunctionTv()" action="">
        <input id="my_input" v-model="queryInput" type="text" placeholder="cerca">
        <select name="" id="">

        </select>
        <button  @keydown.enter.prevent="searchFunctionFilm(); searchFunctionTv()">
          <i class="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
      </div>
    </div>
    

    
    
  </header>

</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *; 
    header {
        padding: 0.5rem 1rem;
        text-align: center;
        .container {
          max-width: 1200px;
          width: 90%;
          margin:auto;
        }
        .row {
          display: flex;
        justify-content: space-between;
        align-items: center;
        }

        .my_left_header {
          display: flex;
          align-items: center;
          ul {
            display: flex;
            padding: 1rem 2rem;
            color: $text_grey;
          }
          li {
            padding: 0 1rem;
            cursor: pointer;
          }
          img {
            width: 150px;
          }
        }

        form {
          display: flex;

          button {
            all:unset;
            color: $text_grey;
            padding: 0 1rem;
            cursor: pointer;
            font-size: 20px;
          }
          input {
            all:unset;
            text-align: start;
            color: $text_grey;
            background-color: #3e3e3e;
            padding: 0.4rem;
            border-radius: 5px;
            border: 0.5px solid rgb(106, 72, 72);
          }
        }
    }


    @media screen and (max-width: 900px) {
      #my_ul {
        display: none;
      }   
    }

    @media screen and (max-width: 600px) {
      #my_input {
        // display: none;
        width: 100px;
      }   
      
    }
</style>