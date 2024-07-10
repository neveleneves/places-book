import axios from "axios";
import type { Action } from "../types";
import config from "../../config.json";

export const fetchPlaces = async ({ commit }: Action) => {
  try {
    const data = await axios.get(`https://search-maps.yandex.ru/v1/`, {params: {...config.search}});
    commit("SET_PLACES", data?.data?.features);
  } catch (error) {
    console.error("Ошибка поиска по организациям:", error);
  }
};