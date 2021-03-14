import { createStore } from 'vuex';

const store = createStore({
    state () {
        return {
            count: 0
        }
    },
    mutations: {
        add (state) {
            state.count++
        }
    }
 })
export default store