import axios from "axios";
import type { CommitOptions, Payload } from "vuex";

// Вынести в отедельный файл
export interface Commit {
  (type: string, payload?: any, options?: CommitOptions): void;
  <P extends Payload>(payloadWithType: P, options?: CommitOptions): void;
}

export const fetchPlaces = async ({ commit }: {commit: Commit}) => {
  try {
    //Чуть позже будет api от Яндекса (нужно оформить бесплатную лицензию)
    const data = await axios.get(
      "https://jsonplaceholder.typicode.com/places"
    );
    
    commit("SET_PLACES", data.data);
  } catch (error) {
    console.log(error);
  }
};