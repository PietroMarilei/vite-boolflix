
import { reactive } from "vue";


export const store = reactive(
    {
        filmArr: [],
        tvSeriesArr:[],
        searchOn: false,
        
        discoverArr:[],
        popularArr:[],

        onlyFilms
    },
)

//could use Pinia ora Vuex