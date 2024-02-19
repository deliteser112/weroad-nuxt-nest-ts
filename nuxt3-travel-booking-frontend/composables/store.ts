// store.ts
import { reactive, readonly, watchEffect } from 'vue';
import { useTravels } from './useTravels'; // Import useTravels composable
import type { Travel } from '~/components/travels/types';

interface Store {
  travels: Travel[];
  loading: boolean;
  shouldFetchTravels: boolean;
}

const state = reactive<Store>({
  travels: [],
  loading: false,
  shouldFetchTravels: false,
});

const setShouldFetchTravels = (value: boolean) => {
  state.shouldFetchTravels = value;
};

export const useStore = () => {
  const { fetchTravels } = useTravels(); // Use existing fetchTravels function

  // Fetch travels function
  const fetchTravelsInternal = async () => {
    state.loading = true;
    try {
      state.travels = await fetchTravels(); // Call fetchTravels function from useTravels
    } catch (error) {
      // Handle errors
      console.error('Error fetching travels:', error);
    } finally {
      state.loading = false;
    }
  };

  // Initial fetch
  fetchTravelsInternal();

  // Watch for changes in shouldFetchTravels and fetch travels accordingly
  watchEffect(async () => {
    if (state.shouldFetchTravels) {
      console.log('state.shouldFetchTravels', state.shouldFetchTravels)
      await fetchTravelsInternal();
      state.shouldFetchTravels = false; // Reset it after fetching
    }
  });

  return { ...readonly(state), setShouldFetchTravels };
};
