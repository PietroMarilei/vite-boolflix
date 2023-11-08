<script>
import { store } from '../store';
import axios from "axios"
import CardComponent from './CardComponent.vue';
import ButtonComp from './ButtonComp.vue';
export default {
  components:{
    CardComponent,
    ButtonComp,
  },
  data() {
    return {
      store,   
    }
  },
  methods: {
    onScroll(event) {
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
              <div v-for="(singleMedia, i) in store.discoverArr" :key="i" class="my_card">
                    <CardComponent 
                      :posterPath="singleMedia.poster_path"
                      :mediaTitle="singleMedia.original_title"
                      :mediaVote="singleMedia.vote_average" 
                      :mediaLanguage="singleMedia.original_language"/>
  
                  </div>
                   <button class="arrow"><i class="fa-solid fa-chevron-right"></i></button>
            </div>
            <!-- popular section here -->
            <h2>Popular</h2>
             <div class="row discoverRow" ref="discoverRow" @wheel="onScroll($event)">
                <div v-for="(singleMedia, i) in store.popularArr" :key="i" class="my_card">
                      <CardComponent 
                        :posterPath="singleMedia.poster_path"
                        :mediaTitle="singleMedia.original_title"
                        :mediaVote="singleMedia.vote_average" 
                        :mediaLanguage="singleMedia.original_language"/>
  
                    </div>
                     <button class="arrow"><i class="fa-solid fa-chevron-right"></i></button>
              </div>
              <h2>Top rated</h2>
               <div class="row discoverRow" ref="discoverRow" @wheel="onScroll($event)">
                  <div v-for="(singleMedia, i) in store.topRatedArr" :key="i" class="my_card">
                        <CardComponent 
                          :posterPath="singleMedia.poster_path"
                          :mediaTitle="singleMedia.original_title"
                          :mediaVote="singleMedia.vote_average" 
                          :mediaLanguage="singleMedia.original_language"/>  
                      </div>
        
                      <ButtonComp :array2UpdateProp="'topRatedArr'"/>
                </div>
        </div>
        <div v-else class="searchBoard">
          <h1>I tuoi risultati:</h1>
          <h2 >Film</h2>
          <div v-if="this.store.tvSeriesArr.length == 0" class="row" ref="filmRow" @wheel="onScroll($event)">
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
           <div v-if="this.store.tvSeriesArr.length == 0"  class="row " ref="seriesRow" @wheel="onScroll($event)">
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
 //overflow-y: auto;
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
  overflow: hidden;
  display: flex; 
  align-items: center;  
  gap: 0.5rem;
 
}

h1 {
  padding: 2rem 0;
}

h3 {
  margin: 2rem 0;
  margin-left: 1rem;
}

button{
  all: unset;
  cursor: pointer;
  font-size: 2rem;
  height: 300px;
  width: 100px;
  margin-right: 10px;
  padding: 0 5px;
  border-radius: 5px;
  transition: 0.1s all ease-in-out;
  position: relative;
  top: -3px
}

button:hover {
  background-color: $dark_grey;
  //transform: scaleY(110%);
  font-size: 2.3rem;
  
}

     .my_card {
       
      //border: 2px dashed red;
      //display: flex;
      //flex-direction: column;
      //justify-content: space-between;
      // width: 300px;
      
      
      //height: 100%;
      //height: 300px;
      
      // padding: 1rem;
    }
     
  
</style>