<!-- src/components/travels/CountdownTimer.vue -->
<template>
  <div>
    <p>Time Remaining: {{ minutes }}:{{ seconds < 10 ? '0' + seconds : seconds }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';

const totalSeconds = ref(900); // 15 minutes in seconds
let timer: NodeJS.Timeout;

const minutes = ref(Math.floor(totalSeconds.value / 60));
const seconds = ref(totalSeconds.value % 60);

const updateTimer = () => {
  if (totalSeconds.value > 0) {
    totalSeconds.value--;
    minutes.value = Math.floor(totalSeconds.value / 60);
    seconds.value = totalSeconds.value % 60;
  } else {
    clearInterval(timer);
    // Add logic for timeout
  }
};

onMounted(() => {
  timer = setInterval(updateTimer, 1000);
});

onBeforeUnmount(() => {
  clearInterval(timer);
});
</script>

<style scoped>
/* Additional component-specific styles if needed */
</style>
