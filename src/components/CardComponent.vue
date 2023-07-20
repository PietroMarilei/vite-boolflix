<script>
export default {
   data() {
      return {
      
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
   <div class="filmThumbnail">
      <img :src="'https://image.tmdb.org/t/p/w300/' + posterPath" alt="">
   </div>
   <div class="filmDetalis">
      {{ mediaTitle }}

      <p>{{ voteDivider(mediaVote) }}</p>

      <!-- lang flag down here -->
      <div class="lang_flag">
         <!-- lang flag here -->
         <img :src="getImagePath(`${mediaLanguage}.svg`)" :alt="mediaLanguage">

      </div>

      <div class="my_rating">       
         <i v-for="singleStar in voteDivider(mediaVote)" class="fa-solid fa-star"></i>
         <i v-for="singleStar in (5 - voteDivider(mediaVote))" class="fa-regular fa-star"></i>
         
      </div>
   </div>
</template>

<style lang="scss" scoped>
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