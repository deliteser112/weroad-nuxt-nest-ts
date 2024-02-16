// composables/useTravels.ts
import { ref } from 'vue';
import { useNuxtApp } from '#app';
import { gql } from '@apollo/client/core';
import { TravelsData } from '~/types/graphql';

export function useTravels() {
    const { $apollo } = useNuxtApp(); // Accessing the provided Apollo Client instance
    const travels = ref<TravelsData>([]);
    const loading = ref(true);

    const fetchTravels = async () => {
        try {
            const { data } = await $apollo.query<TravelsData>({
                query: gql`
                    query {
                        travels {
                            id
                            name
                            description
                            startingDate
                            endingDate
                            price
                            moods {
                                nature
                                relax
                                history
                                culture
                                party
                            }
                        }
                    }
                `,
            });

            travels.value = data.travels;
        } catch (error) {
            console.error("Error fetching travels:", error);
        } finally {
            loading.value = false;
        }
    };

    return { travels, loading, fetchTravels };
}