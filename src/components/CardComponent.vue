<script>
export default {
   data() {
      return {
         hover:false,
      }
   },
   methods: {
       getImagePath: function (img) {
         return new URL(`../assets/img/${img}`, import.meta.url).href
         // un if che se img è nellárray invece se no restiscuire null e quindi posso usare ??
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
   <div class="filmThumbnail" @mouseover="hover = true" @mouseleave="hover = false">
      <img :src="'https://image.tmdb.org/t/p/w300/' + posterPath" alt="">
   </div>
   <h4>{{ mediaTitle }}</h4>'
   '
   <div v-if="hover==true" class="filmDetalis">
      
      <p>{{ voteDivider(mediaVote) }}</p>
      <!-- lang flag down here -->
      <div class="lang_flag">
         <!-- lang flag here -->
         <img :src="getImagePath(`${mediaLanguage}.svg`) ?? getImagePath('posternotfound.png')" :alt="mediaLanguage">
         <!-- ❌📛 not working alternative poster -->

      </div>

      <div class="my_rating">       
         <i v-for="singleStar in voteDivider(mediaVote)" class="fa-solid fa-star"></i>
         <i v-for="singleStar in (5 - voteDivider(mediaVote))" class="fa-regular fa-star"></i>
         
      </div>
   </div>
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/variables.scss' as*;
      .filmThumbnail:hover {
         opacity: 50%;
      }
      .filmThumbnail {
        img {
          width: 200px;
          border-radius: 5px ;
          position: relative;
        }
      }

      .filmDetails {
         position: absolute;
         top: 100px;
      }
      .lang_flag {
        img {
          width:20px;
          border-radius: 2px;
        }
      }
      .my_rating {
        color: $text_grey;
      }
     
</style>