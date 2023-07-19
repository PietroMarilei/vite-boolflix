<script>
import { store } from '../store';
import axios from "axios"
export default {
  data() {
    return {
      greeting: 'Hello World!',
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
            {{ singleFilm.title }} {{ singleFilm.original_title }} {{ singleFilm.original_language }} {{ singleFilm.vote_average }}
            </div>
            

          </div>
        </div>
      </div>
  </main>

</template>

<style lang="scss" scoped>
    
</style>