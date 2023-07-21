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

    onScroll(event) {
      
      // const scrollStep = 500; // Numero di pixel di scorrimento per volta
      // const rowRef = event.currentTarget; // Ottieni il riferimento all'elemento di riga

      // if (event.deltaY > 0) {
      //   // Scroll verso il basso
      //   rowRef.scrollBy({
      //     right: scrollStep,
      //     left: scrollStep,
      //     behavior: "smooth",
      //   });
      // } else {
      //   // Scroll verso l'alto
      //   rowRef.scrollBy({
      //     left: -scrollStep,
      //     behavior: "smooth",
      //   });
      // }
        event.preventDefault(); 
        
        const rowRef = event.currentTarget; 
        const scrollStep = rowRef.scrollLeft + event.deltaY * 5; 

        // Applica la nuova posizione di scorrimento con una transizione fluida
        rowRef.scrollTo({
          left: scrollStep,
          behavior: "smooth",
        });
    }
  },
  computed: {
  },
  
}
</script>

<template>
    
    <main>
      <div class="container">
        <div v-if="this.store.searchOn == false" class="homepageBoard">
          <h2>Discover</h2>
           <div class="row discoverRow" ref="discoverRow" @wheel="onScroll($event)">
              <div v-for="(singleSerie, i) in store.discoverArr" :key="i" class="my_card">
                    <CardComponent 
                      :posterPath="singleSerie.poster_path"
                      :mediaTitle="singleSerie.original_title"
                      :mediaVote="singleSerie.vote_average" 
                      :mediaLanguage="singleSerie.original_language"/>
  
                  </div>
        
            </div>
            <!-- popular section here -->
            <h2>Popular</h2>
             <div class="row discoverRow" ref="discoverRow" @wheel="onScroll($event)">
                <div v-for="(singleSerie, i) in store.popularArr" :key="i" class="my_card">
                      <CardComponent 
                        :posterPath="singleSerie.poster_path"
                        :mediaTitle="singleSerie.original_title"
                        :mediaVote="singleSerie.vote_average" 
                        :mediaLanguage="singleSerie.original_language"/>
  
                    </div>
        
              </div>
        </div>
        <div v-else class="searchBoard">
          <h1>I tuoi risultati:</h1>
          <h2 >Film</h2>
          <div v-if="this.store.filmArr != []" class="row" ref="filmRow" @wheel="onScroll($event)">
            <div v-for="(singleFilm, i) in store.filmArr" :key="i" class="my_card">
                  <CardComponent 
                    :posterPath="singleFilm.poster_path"
                    :mediaTitle="singleFilm.title"
                    :mediaVote="singleFilm.vote_average" 
                    :mediaLanguage="singleFilm.original_language"
                    />

                  </div>
 
          </div>

          <div v-else>
            <h3>Nothing found ...</h3>
          </div>
          <!-- tv series here -->
          <h2 >Tv Series</h2>
           <div v-if="this.store.tvSeriesArr.length = 0"  class="row " ref="seriesRow" @wheel="onScroll($event)">
              <div v-for="(singleSerie, i) in store.tvSeriesArr" :key="i" class="my_card">
                    <CardComponent 
                      :posterPath="singleSerie.poster_path"
                      :mediaTitle="singleSerie.name"
                      :mediaVote="singleSerie.vote_average" 
                      :mediaLanguage="singleSerie.original_language"/>

                  </div>
          
            </div>
            <div v-else>
              <h3>Nothing found ...</h3>
            </div>
        </div>
        
      </div>
  </main>

</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *; 
main {
  overflow-y: auto;
  background-color: rgb(24, 24, 24);
  padding: 2rem 0;
}

.container {
  max-width: 1000px;
  width: 85%;
  margin: 0 auto;
}

.row {
  margin: 2rem 0;
  overflow-x: auto;
  display: flex;      
      gap: 0.5rem;
}

h1 {
  padding: 2rem 0;
}

     .my_card {
      //border: 2px dashed red;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      // width: 300px;
      
      height: 100%;
      
      // padding: 1rem;
    }
     
  
</style>