<!-- src/pages/create-travel.vue -->
<template>
  <div class="max-w-lg mx-auto">
    <h2 class="text-center mt-16">Create New Travel</h2>
    <TravelCreateForm />
  </div>
</template>

<script setup lang="ts">
import { TravelCreateForm } from '~/components/travels';
</script>
