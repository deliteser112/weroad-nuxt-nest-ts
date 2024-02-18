<!-- src/pages/index.vue -->
<template>
    <div class="max-w-[1200px] mx-auto">
        <div v-if="loading">Loading...</div>
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-10">
            <TravelCard v-for="travel in travels" :key="travel.id" :travel="travel" :openModal="openBookingModal" />
            <TravelBookingModal v-if="showBookingModal" :selectedTravel="selectedTravel" @close="closeBookingModal" />
        </div>
    </div>
</template>
    
<script setup lang="ts">
import { TravelCard, TravelBookingModal } from '~/components/travels';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

import { useTravels } from '~/composables/useTravels';
import type { Travel } from '~/components/travels/types';

const { travels, loading, fetchTravels } = useTravels();
const showBookingModal = ref(false);
const selectedTravel = ref<Travel>({
    id: '',
    name: '',
    description: '',
    startingDate: '',
    endingDate: '',
    price: 0,
    bookedSpots: 0,
    maxCapacity: 0,
    moods: {
        nature: 0,
        relax: 0,
        history: 0,
        culture: 0,
        party: 0
    }
});

const router = useRouter();

onMounted(() => {
    fetchTravels();
});

const openBookingModal = (travel: Travel) => {
    showBookingModal.value = true;
    selectedTravel.value = travel;
};

const closeBookingModal = () => {
    showBookingModal.value = false;
};

</script>
  