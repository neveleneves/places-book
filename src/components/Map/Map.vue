<template>
  <div v-for="place in getPlaces" :key="place.id">
    {{ place.id }} {{ place.name }} {{ place.address }}
  </div>
</template>

<script setup lang="ts">
  import { onMounted, computed } from "vue";
  import { useStore } from "vuex";
  
  const store = useStore();
  const getPlaces = computed(() => {
    return store.getters.getPlaces;
  });

  onMounted(() => {
    store.dispatch("fetchPlaces");
  });
</script>
