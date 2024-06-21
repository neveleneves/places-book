

import { createStore } from "vuex";
import { fetchPlaces } from "./actions/fetchPlaces"

export default createStore({
    state: {
        places: [],
      },
      getters: {
        getPlaces: (state) => state.places,
      },
    actions: {
        fetchPlaces
    },
    mutations: {
        SET_PLACES(state, places) {
            state.places = places;
          },
    }
})