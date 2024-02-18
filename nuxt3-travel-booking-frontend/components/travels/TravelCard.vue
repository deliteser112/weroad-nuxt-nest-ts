<!-- src/components/travels/TravelCard.vue -->
<template>
    <div class="relative rounded overflow-hidden shadow-lg bg-white">
        <div class="absolute top-0 right-0 mt-2 mr-2 bg-red-500 text-white px-2 py-1 rounded"
            v-if="!isTravelBookable(travel)">
            Sold Out
        </div>
        <div class="px-6 py-4 pt-10">
            <div class="font-bold text-xl mb-2">{{ travel.name }}</div>
            <p class="text-gray-700 text-base mb-4 max-h-[100px] overflow-y-hidden">
                {{ travel.description }}
            </p>
            <p class="text-gray-600 text-sm">Starting: {{ formatDate(travel.startingDate) }}</p>
            <p class="text-gray-600 text-sm">Ending: {{ formatDate(travel.endingDate) }}</p>
            <p class="text-gray-600 text-sm">Price: ${{ (travel.price / 100).toFixed(2) }}</p>
            <p class="text-gray-600 text-sm">Available Spots: {{ calculateAvailableSpots(travel) }}</p>
            <button class="bg-blue-500 text-white px-4 py-1 mt-3 rounded" v-if="isTravelBookable(travel)"
                @click="openBookingModal">Book Now</button>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span v-for="(value, key) in travel.moods" :key="key"
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #{{ key }}: {{ value }}
            </span>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue';
import type { Travel } from './types';

const props = defineProps<{
    travel: {
        id: string;
        name: string;
        description: string;
        startingDate: string;
        endingDate: string;
        price: number;
        bookedSpots: number;
        maxCapacity: number;
        moods: {
            nature: number;
            relax: number;
            history: number;
            culture: number;
            party: number;
        };
    };
    openModal: (travel: Travel) => void;
}>();

const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

const calculateAvailableSpots = (travel: Travel) => {
    return travel.maxCapacity - travel.bookedSpots;
}

const isTravelBookable = (travel: Travel) => {
    return calculateAvailableSpots(travel) > 0;
}

const openBookingModal = () => {
    if (isTravelBookable(props.travel)) {
        props.openModal(props.travel);
    }
};
</script>
  
<style scoped>
/* Additional component-specific styles if needed */
</style>
