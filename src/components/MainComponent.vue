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
        const scrollStep = rowRef.scrollLeft + event.deltaY * 7; 

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
        <h2>Film</h2>
        <div class="row" ref="filmRow" @wheel="onScroll($event)">
          <div v-for="(singleFilm, i) in store.filmArr" :key="i" class="my_card">
                <CardComponent 
                  :posterPath="singleFilm.poster_path"
                  :mediaTitle="singleFilm.title"
                  :mediaVote="singleFilm.vote_average" 
                  :mediaLanguage="singleFilm.original_language"/>

                </div>
            
          
        </div>
        <!-- tv series here -->
        <h2>Tv Series</h2>
         <div class="row " ref="seriesRow" @wheel="onScroll($event) ">
            <div v-for="(singleSerie, i) in store.tvSeriesArr" :key="i" class="my_card">
                  <CardComponent 
                    :posterPath="singleSerie.poster_path"
                    :mediaTitle="singleSerie.name"
                    :mediaVote="singleSerie.vote_average" 
                    :mediaLanguage="singleSerie.original_language"/>

                </div>
          
          </div>
      </div>
  </main>

</template>

<style lang="scss" scoped>
@use "../assets/scss/partials/variables.scss" as *; 
main {
  overflow-y: hidden;
}

.container {
  max-width: 1000px;
  width: 85%;
  margin: 0 auto;
}

.row {
  margin: 2rem 0;
  overflow-x: hidden;
  display: flex;      
      // flex-wrap: wrap;
      // overflow-x: auto;
      gap: 0.5rem;
}

h2 {
  color: aliceblue;
}
    
     .my_card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 300px;
      height: 100%;
      // padding: 1rem;
    }
     
  
</style>