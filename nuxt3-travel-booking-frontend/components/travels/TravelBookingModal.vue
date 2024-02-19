<!-- src/components/travels/TravelBookingModal.vue -->
<template>
  <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
    <div class="bg-white p-8 max-w-md rounded shadow-lg relative min-w-[400px]">
      <button class="absolute top-4 right-4 text-gray-600" @click="closeModal">
        <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
      <h2 class="text-lg font-semibold mb-4">Book Travel - {{ selectedTravel.name }}</h2>
      <div>
        <p>Available Spots: {{ calculateAvailableSpots(selectedTravel) }}</p>
        <label for="spots">Number of Spots:</label>
        <input class="border border-gray-300 p-2 mb-4 block w-full rounded-md" type="number" v-model="selectedSpots"
          :max="maxAvailableSpots" />
        <CountdownTimer v-if="showCountdown" />
        <div class="w-full text-right">
          <button class="bg-blue-500 text-white px-4 py-1 mt-3 rounded" @click="confirmBooking(selectedTravel)">Confirm
            Booking</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, onMounted, onBeforeUnmount, computed, defineEmits } from 'vue';
import CountdownTimer from './CountdownTimer.vue';
import type { Travel } from '~/components/travels/types';
import { useTravels } from '~/composables/useTravels';

const props = defineProps<{ selectedTravel: Travel }>();
const emits = defineEmits();

const showCountdown = ref(true); // Adjust as needed
const selectedSpots = ref(1); // Adjust as needed

const { travels, bookTravel, fetchTravels } = useTravels();

const maxAvailableSpots = computed(() => {
  return props.selectedTravel.maxCapacity - props.selectedTravel.bookedSpots;
});

const calculateAvailableSpots = (travel: Travel) => {
  // Implement the logic to calculate available spots
  return travel.maxCapacity - travel.bookedSpots;
};

const isTravelBookable = (travel: Travel) => {
  return calculateAvailableSpots(travel) > 0;
}

const confirmBooking = async (travel: Travel) => {
  if (isTravelBookable(travel)) {
    // travel.bookedSpots += selectedSpots.value;
    await handleBookTravel();
    location.reload();
    emits('close');
  }
};

const closeModal = () => {
  emits('close');
}

const handleBookTravel = async () => {
  const userId = 'd9b25062-954f-49ba-9274-3b8103d1b3c3' // Assume that the user logged in with this ID
  const travelId = props.selectedTravel.id;
  const spots = selectedSpots.value;

  await bookTravel(userId, travelId, spots);
};
</script>

<style scoped>
/* Additional component-specific styles if needed */
</style>
