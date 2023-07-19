<script>
import { store } from '../store';
import axios from "axios"
export default {
  data() {
    return {
      store,
      
    }
  },
  methods: {
  //    getImgUrl(pic) {
  //     return require('../assets/img/' + pic)
  //   }
  getImagePath: function (img) {
      return new URL(`../assets/img/${img}`, import.meta.url).href  
  },
  voteNormalizer(value) {
    let exitNum = Math.floor((value / 2))
    return exitNum

    }
    
    },
  
  computed: {
  },
  
}
</script>

<template>
    <!-- main template -->
    <main>
      <div class="container">
        <div class="row">
          <h3>film</h3>
          <div class="col">

            <div v-for="(singleFilm, i) in store.filmArr" :key="i" class="my_card">
                <div class="filmThumbnail">
                  <img :src="'https://image.tmdb.org/t/p/w300/' + singleFilm.poster_path" alt="">
                </div>
                <div class="filmDetalis">
                   {{ singleFilm.title }} 
                   
                   <!-- {{ singleFilm.vote_average }} -->
                   <p>{{ voteNormalizer(singleFilm.vote_average) }}</p>
                   <div class="lang_flag">
                      <!-- lang flag here -->
                    <img :src="getImagePath(`${singleFilm.original_language}.svg`)" :alt="singleFilm.original_language">

                   </div>
              </div>
           
              </div>
            

          </div>
          
        </div>
        <!-- tv series here -->
         <div class="row">
          <h3>tv series</h3>
            <div class="col">
              <div v-for="(singleSerie, i) in store.tvSeriesArr" :key="i" class="my_card">
                <div class="filmThumbnail">
                  <img :src="'https://image.tmdb.org/t/p/w300/' + singleSerie.poster_path" alt="">
                </div>
                <div class="filmDetalis">
                   {{ singleSerie.name }} 
                   <!-- {{ singleSerie.original_title }}   -->
                   {{ singleSerie.vote_average }}
                   <div class="lang_flag">
                      <!-- lang flag here -->
                    <img :src="getImagePath(`${singleSerie.original_language}.svg`)" :alt="singleSerie.original_language">

                   </div>
              </div>
           
              </div>
            

            </div>
          
          </div>
      </div>
  </main>

</template>

<style lang="scss" scoped>
    .col {
      display: flex;
      
      // flex-wrap: wrap;
      overflow-x: auto;
    }
     
     .my_card {
      width: 300px;
      height: 100%;
      padding: 1rem;
      .filmThumbnail {
        img {
          width: 200px;
        }
      }


      .lang_flag {
        img {
          width:20px;
          border-radius: 2px;
        }
      }
     }
</style>