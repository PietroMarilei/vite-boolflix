<script>
import { store } from '../store';
export default {
    components: {
    },
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
    <div class="imgWrapper">
        <img src="../assets/img/glitchNetflixLogo.gif" alt="glitched logo">
        <!--TODO add better gif -->
    </div>
    
</template>

<style lang="scss" scoped>
.imgWrapper {
    //border: 2px dashed red;  
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
}

img {
    
    width: 100vw;
}

</style>