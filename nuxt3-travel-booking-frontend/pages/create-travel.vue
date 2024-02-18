<!-- src/pages/create-travel.vue -->
<template>
  <div class="max-w-lg mx-auto">
    <div class="w-full text-right">
      <button @click="goBack" class="mt-4 bg-blue-500 text-white p-2 rounded-md">Go Back</button>
    </div>
    <h2 class="text-center mt-16">Create New Travel</h2>
    <TravelCreateForm />
  </div>
</template>

<script setup lang="ts">
import { TravelCreateForm } from '~/components/travels';
import { useRouter } from 'vue-router';

const router = useRouter();

const goBack = () => {
  router.go(-1); // This navigates back one step in the history stack
};
</script>
