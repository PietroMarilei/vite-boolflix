<script >
import axios from "axios"
import { store } from './store';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
  },
  data(){
    return {
      store,
      //like to state management
    }
  }, 
  methods: {

  },
  created() {
     axios
      .get("https://api.themoviedb.org/3/discover/movie?api_key=91c455c07b1eb6c90d8fd768159a39c3", {
        params: {
          query: '',
        }
      })
      .then(response => {
        store.filmArr = response.data.results;
        console.log(this.store.filmArr);

      })
  },
}
</script>

<template>

  <HeaderComponent/>

  <MainComponent/>

  <FooterComponent/>

</template>

<style lang="scss">
  @use "./assets/scss/main.scss" as *;
  @use "./assets/scss/partials/variables.scss" as *;
  
  body {
    background-color: lightslategray;
  }
</style>
