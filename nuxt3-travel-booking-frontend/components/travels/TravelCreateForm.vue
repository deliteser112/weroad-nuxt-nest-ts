<!-- src/components/travels/TravelCreateForm.vue -->
<template>
  <form @submit.prevent="createNewTravel" class="space-y-4">
    <div class="flex flex-col">
      <label for="name" class="text-sm font-medium text-gray-600">Name:</label>
      <input class="border border-gray-300 p-2 mb-4 block w-full rounded-md" v-model="name" type="text" id="name"
        required />
    </div>

    <div class="flex flex-col">
      <label for="slug" class="text-sm font-medium text-gray-600">Slug:</label>
      <input class="border border-gray-300 p-2 mb-4 block w-full rounded-md" v-model="slug" type="text" id="slug"
        required />
    </div>

    <div class="flex flex-col">
      <label for="description" class="text-sm font-medium text-gray-600">Description:</label>
      <textarea class="border border-gray-300 p-2 mb-4 block w-full rounded-md" v-model="description" id="description"
        required></textarea>
    </div>

    <div class="flex flex-col">
      <label for="startingDate" class="text-sm font-medium text-gray-600">Starting Date:</label>
      <input class="border border-gray-300 p-2 mb-4 block w-full rounded-md" v-model="startingDate" type="date"
        id="startingDate" required />
    </div>

    <div class="flex flex-col">
      <label for="endingDate" class="text-sm font-medium text-gray-600">Ending Date:</label>
      <input class="border border-gray-300 p-2 mb-4 block w-full rounded-md" v-model="endingDate" type="date"
        id="endingDate" required />
    </div>

    <div class="flex flex-col">
      <label for="price" class="text-sm font-medium text-gray-600">Price:</label>
      <input class="border border-gray-300 p-2 mb-4 block w-full rounded-md" v-model.number="price" type="number"
        id="price" required />
    </div>

    <div class="flex flex-col">
      <label for="maxCapacity" class="text-sm font-medium text-gray-600">Max Capacity:</label>
      <input class="border border-gray-300 p-2 mb-4 block w-full rounded-md" v-model.number="maxCapacity" type="number"
        id="maxCapacity" required />
    </div>

    <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Create Travel</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTravels } from '~/composables/useTravels';

const name = ref('');
const slug = ref('');
const description = ref('');
const startingDate = ref('');
const endingDate = ref('');
const price = ref(0);
const maxCapacity = ref(0);

const { createTravel } = useTravels();

const createNewTravel = async () => {
  try {
    const newTravel = await createTravel({
      name: name.value,
      slug: slug.value,
      description: description.value,
      startingDate: startingDate.value,
      endingDate: endingDate.value,
      price: price.value,
      maxCapacity: maxCapacity.value,
      moods: {
        nature: 0, // Add logic to get mood values from your form
        relax: 0,
        history: 0,
        culture: 0,
        party: 0,
      },
    });

    // Handle successful creation, e.g., navigate to the newly created travel page
    console.log('New Travel Created:', newTravel);

    // Optionally reset form fields after successful creation
    name.value = '';
    description.value = '';
    startingDate.value = '';
    endingDate.value = '';
    price.value = 0;
    maxCapacity.value = 0;
  } catch (error) {
    // Handle error
    console.error('Error creating travel:', error);
  }
};
</script>
