<template>
    <div class="max-w-md rounded overflow-hidden shadow-lg bg-white">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{{ travel.name }}</div>
            <p class="text-gray-700 text-base mb-4">
                {{ travel.description }}
            </p>
            <p class="text-gray-600 text-sm">Starting: {{ formatDate(travel.startingDate) }}</p>
            <p class="text-gray-600 text-sm">Ending: {{ formatDate(travel.endingDate) }}</p>
            <p class="text-gray-600 text-sm">Price: ${{ (travel.price / 100).toFixed(2) }}</p>
        </div>
        <div class="px-6 pt-4 pb-2">
            <span v-for="(value, key) in travel.moods" :key="key"
                class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"> #{{
                    key }}: {{ value }}</span>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps<{
    travel: {
        id: string;
        name: string;
        description: string;
        startingDate: string;
        endingDate: string;
        price: number;
        // bookedSpots: number;
        // imageUrl: string; // Assuming you have an image URL
        moods: {
            nature: number;
            relax: number;
            history: number;
            culture: number;
            party: number;
        };
    };
}>();

function formatDate(dateString: string) {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}
</script>
  
<style scoped>
/* Additional component-specific styles if needed */
</style>