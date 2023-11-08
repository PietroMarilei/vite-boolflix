<script>
import { store } from '../store';
export default {
   data() {
      return {
         store,

      }
   },
   methods: {
      getImagePath: function (img) {
         return new URL(`../assets/img/${img}`, import.meta.url).href;
      },
      voteDivider(value) {
         let exitNum = Math.floor((value / 2))
         return exitNum
      }
   },
   props: {
      posterPath: String,
      mediaTitle: String,
      mediaVote: Number,
      mediaLanguage: String,
   }
}
</script>

<template>
   <div class="filmThumbnail">
      <img id="my_poster" :src="posterPath != null ? 'https://image.tmdb.org/t/p/w300/' + posterPath : getImagePath('posternotfound.png')" alt="film poster">
      <div class="filmDetails">
         
         <h4>{{ mediaTitle }}</h4>
         <div v-if="this.store.supportedFlags.includes(mediaLanguage)" class="lang_flag">
            <img :src="getImagePath(`${mediaLanguage}.svg`)" :alt="mediaLanguage">
         </div>

         <div v-else class="lang_flag">
               <p>{{ mediaLanguage }}</p>
            </div>

         <div class="my_rating">
            <i v-for="singleStar in voteDivider(mediaVote)" class="fa-solid fa-star"></i>
            <i v-for="singleStar in (5 - voteDivider(mediaVote))" class="fa-regular fa-star"></i>

         </div>
      </div>
   </div>
  
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as*;

.filmThumbnail {
   position: relative;
   overflow-y: hidden;
   
   img {
      width: 200px;
      border-radius: 2px;
   }
}

.filmDetails {
   
   height: 200px;
   background-color: rgba(0, 0, 0, 0.677);
   visibility:hidden;
   //display: none;
 

   flex-direction: column;
   justify-content: space-evenly;
   align-items: center;
   position: absolute;
   top: 100%;
   bottom: 0;
   right: 0;
   left: 0;

   transition: 0.3s all ease-in-out;

   h4 {
      text-align: start;
      padding: 1rem;
   }

}

.filmThumbnail:hover .filmDetails {
   display: flex;
   height: 100%;
   top: 0px;
   visibility: visible;
}

.filmThumbnail:hover {
   #my_poster {
  
   }

   h4 {
      color: aliceblue;
      text-align: center;
   }
}

h4 {
   text-align: center;
}


.lang_flag {
   img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin: 0.5rem 1rem;
   }
}

.my_rating {
   color: $text_grey;
   padding: 0.5rem 1rem;

   .fa-solid {
      color: goldenrod;

   }
}</style>