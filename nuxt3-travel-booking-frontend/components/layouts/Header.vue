<template>
  <nav className="navbar flex bg-base-100 mx-auto max-w-7xl mt-4 p-4 shadow-xl rounded-box justify-between">
    <div className="navbar-start">
      <span className="btn btn-ghost normal-case text-3xl">Booking Travel</span>
    </div>
    <div className="navbar-end">
      <button @click="goToTravelForm" class="bg-blue-500 text-white px-4 py-2 rounded">Create New Travel</button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
const goToTravelForm = () => {
  router.push('/create-travel');
};
</script>