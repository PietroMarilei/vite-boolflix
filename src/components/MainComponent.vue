<script>
import { store } from '../store';
import axios from "axios"
import CardComponent from './CardComponent.vue';
export default {
  components:{
    CardComponent,
  },
  data() {
    return {
      store,
      
    }
  },
  methods: {

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
              <CardComponent 
                :posterPath="singleFilm.poster_path"
                :mediaTitle="singleFilm.title "
                :mediaVote="singleFilm.vote_average" 
                :mediaLanguage="singleFilm.original_language"/>

              </div>
            

          </div>
          
        </div>
        <!-- tv series here -->
         <div class="row">
          <h3>tv series</h3>
            <div class="col">
              <div v-for="(singleSerie, i) in store.tvSeriesArr" :key="i" class="my_card">
                <CardComponent 
                  :posterPath="singleSerie.poster_path"
                  :mediaTitle="singleSerie.name"
                  :mediaVote="singleSerie.vote_average" 
                  :mediaLanguage="singleSerie.original_language"/>

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
     
     
</style>