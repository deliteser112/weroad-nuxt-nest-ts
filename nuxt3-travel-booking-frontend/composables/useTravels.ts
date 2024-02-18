// composables/useTravels.ts
import { ref } from 'vue';
import { useNuxtApp } from '#app';
import { gql } from '@apollo/client/core';
import type { TravelsData, TravelInput } from '~/types/graphql';

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
                            bookedSpots
                            maxCapacity
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

    const bookTravel = async (userId: string, travelId: string, spots: number) => {
        try {
            const { data } = await $apollo.mutate({
                mutation: gql`
                    mutation createBooking($createBookingInput: CreateBookingInput!) {
                        createBooking(createBookingInput: $createBookingInput) {
                            id
                            userId
                            travel {
                                id
                                name
                                description
                                startingDate
                                endingDate
                                price
                                maxCapacity
                                bookedSpots
                            }
                            spots
                            createdAt
                        }
                    }
                `,
                variables: {
                    createBookingInput: {
                        userId,
                        travelId,
                        spots,
                    },
                },
            });
            console.log('data', data);
        } catch (error) {
            console.error("Error booking travel:", error);
        }
    };

    const createTravel = async (travelData: TravelInput) => {
        try {
            const { data } = await $apollo.mutate({
                mutation: gql`
                    mutation createTravel($createTravelInput: CreateTravelInput!) {
                        createTravel(createTravelInput: $createTravelInput) {
                            id
                            name
                            description
                            startingDate
                            endingDate
                            price
                            bookedSpots
                            maxCapacity
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
                variables: {
                    createTravelInput: travelData,
                },
            });

            return data.createTravel;
        } catch (error) {
            console.error('Error creating travel:', error);
            throw error;
        }
    };

    return { travels, loading, fetchTravels, bookTravel, createTravel };
}