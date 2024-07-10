<script setup lang="ts">
import { shallowRef, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import type { YMap } from '@yandex/ymaps3-types';
import { YandexMap, YandexMapDefaultSchemeLayer as Layer } from 'vue-yandex-maps';
import { settings } from './settingsMap';

const map = shallowRef<null | YMap>(null);
const store = useStore();
const getPlaces = computed(() => store.getters.getPlaces)

onMounted(() => {
  store.dispatch('fetchPlaces');
})
</script>


<template>
  <YandexMap
      v-model="map"
      :settings="settings"
      width="100%"
      height="500px"
  >
    <Layer/>
  </YandexMap>
  <div v-for="place in getPlaces" :key="place.id">
    {{ place }}
  </div>
</template>