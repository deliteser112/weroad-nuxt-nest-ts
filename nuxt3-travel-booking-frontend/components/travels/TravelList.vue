<template>
    <div v-if="loading">Loading...</div>
    <div v-else>
        <TravelCard v-for="travel in travels" :key="travel.id" :travel="travel" />
    </div>
</template>
  
<script setup lang="ts">
import TravelCard from './TravelCard.vue';
import { useTravels } from '~/composables/useTravels';

const { travels, loading, fetchTravels } = useTravels();

onMounted(() => {
    fetchTravels();
});
</script>