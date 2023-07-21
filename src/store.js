
import { reactive } from "vue";


export const store = reactive(
    {
        filmArr: [],
        tvSeriesArr:[],
        searchOn: false,
        
        discoverArr:[],
        popularArr:[],

        genresArr:[],
        selectedGenID: '',
    },
)

//could use Pinia ora Vuex