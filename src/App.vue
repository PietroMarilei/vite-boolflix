<script >
import { store } from '../store';
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
      .get("alinkGoesHere")
      .then(response => {
        store.someData = response.data
        ;
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
