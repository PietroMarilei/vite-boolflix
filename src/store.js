
import { reactive } from "vue";


export const store = reactive(
    {
        filmArr: [],
        tvSeriesArr:[],
        searchOn: false,

        supportedFlags: [
            'de',
            'en',
            'es',
            'jp',
            'it',
            
        ],
        
        discoverArr:[],
        popularArr:[],
        topRatedArr: [],

        genresArr:[],
        selectedGenID: '',
        
    },
)

//could use Pinia ora Vuex