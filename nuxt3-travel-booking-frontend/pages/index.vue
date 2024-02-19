<!-- src/pages/index.vue -->
<template>
    <div class="max-w-[1200px] mx-auto">
        <div v-if="loading" class="mt-48">
            <Spinner />
        </div>
        <div v-else-if="travels.length > 0">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-10">
                <TravelCard v-for="travel in travels" :key="travel.id" :travel="travel" :openModal="openBookingModal" />
                <TravelBookingModal v-if="showBookingModal" :selectedTravel="selectedTravel" @close="closeBookingModal" />
            </div>
        </div>

        <div class="mt-20" v-else>
            <NoData />
        </div>

    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useTravels } from '~/composables/useTravels';
import { TravelCard, TravelBookingModal } from '~/components/travels';
import Spinner from '~/components/common/Spinner.vue';
import NoData from '~/components/common/NoData.vue';
import type { Travel } from '~/components/travels/types';

const { travels, loading, fetchTravels } = useTravels();
const showBookingModal = ref(false);
const selectedTravel = ref<Travel | null>(null);

// // Use a ref to control when to fetch travels
// const shouldFetchTravels = ref(true);

// // Watch for changes in shouldFetchTravels and fetch travels accordingly
// watch(shouldFetchTravels, async (newValue) => {
//     if (newValue) {
//         await fetchTravels();
//         shouldFetchTravels.value = false; // Reset it after fetching
//     }
// });

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
