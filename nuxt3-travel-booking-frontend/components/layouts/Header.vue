<template>
  <nav className="navbar flex bg-base-100 mx-auto max-w-7xl mt-4 p-4 shadow-xl rounded-box justify-between">
    <div className="navbar-start">
      <button @click="handleToHome" class="bg-blue-500 text-white px-4 py-2 rounded-[50%]">TRAVEL</button>
    </div>
    <div className="navbar-end">
      <button @click="handleToNewTravel" class="bg-blue-500 text-white px-4 py-2 rounded">Create New Travel</button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
const handleToNewTravel = () => {
  router.push('/create-travel');
};

const handleToHome = () => {
  router.push('/');
};
</script>