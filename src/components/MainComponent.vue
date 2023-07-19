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
              <div class="singleFilm">
                 {{ singleFilm.title }} {{ singleFilm.original_title }}  {{ singleFilm.vote_average }} 
                 <div class="lang_flag">
                  {{ singleFilm.original_language }}
                 </div>
              </div>
           
            </div>
            

          </div>
        </div>
      </div>
  </main>

</template>

<style lang="scss" scoped>
    
</style>