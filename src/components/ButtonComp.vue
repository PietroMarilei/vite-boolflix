<script>
import axios from "axios";
import { store } from '../store';

export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        // ❌📛 why creates a new array instead of update?
        updateArray(arr2Update) {
            axios
                .get("https://api.themoviedb.org/3/discover/movie", {
                    params: {
                        api_key: "91c455c07b1eb6c90d8fd768159a39c3",
                        include_adult: false,
                        include_video: false,
                        language: "en-US",
                        page: 2,
                        sort_by: "vote_average.desc",
                        without_genres: "99,10755",
                        "vote_count.gte": 200,
                    }
                })
                .then(response => {
                    this.store[arr2Update] = response.data.results;
                    console.log('this.$store.arr2Update', arr2Update);
                    console.log('store', this.store);
                    console.log('topRatedArr', this.store.topRatedArr);
                })
                .catch(error => {
                    console.error("Errore durante la richiesta:", error);
                });
        },

        onButtonClick() {
            this.updateArray(this.array2UpdateProp);
        },
    },
    props: {
        array2UpdateProp: String,
    }
}
</script>

<template>
    <button @click="onButtonClick(array2UpdateProp)" class="arrow">
        <i class="fa-solid fa-chevron-right"></i>
    </button>
</template>

<style lang="scss" scoped>
/* Utilizza le tue variabili se necessario */
</style>