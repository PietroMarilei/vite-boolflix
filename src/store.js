import { reactive } from "vue";

export const store = reactive(
    {
        someData: "",
        anArr: [],
        aBoolean: true,
        aFunction() {
            console.log("a function");
        }
    },
)

//could use Pinia ora Vuex