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
    //  getImgUrl(pic) {
    //   return require('../assets/img/' + pic)
    // }
  },
  
}
</script>

<template>
    <!-- main template -->
    <main>
      <div class="container">
        <div class="row">
          <div class="col">
            
            <div v-for="(singleFilm,i) in store.filmArr" :key="i" class="my_card">
              <div class="filmThumbnail">
                <img :src="'https://image.tmdb.org/t/p/w300/'+singleFilm.poster_path" alt="">
              </div>
              <div class="filmDetalis">
                 {{ singleFilm.title }} {{ singleFilm.original_title }}  
                 <div class="lang_flag">
                  <!-- ❌📛 not working img patch dynamic -->
                  <!-- <img :src="getImgUrl('ac.svg')"  alt=""> -->
                  <!-- <img :src="require(`@/assets/img/${'en'}.svg`)"  alt=""> -->
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
      justify-content: center;
      flex-wrap: wrap;
    }
     
     .my_card {
      width: 300px;
      height: 100%;
     }
</style>