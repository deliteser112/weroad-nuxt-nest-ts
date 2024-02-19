// ~/types/graphql.ts
export interface Mood {
    nature: number;
    relax: number;
    history: number;
    culture: number;
    party: number;
}

export interface TravelInput {
    name: string;
    slug: string;
    description: string;
    startingDate: string;
    endingDate: string;
    price: number;
    maxCapacity: number,
    moods: Mood;
}

export interface Travel {
    id: string;
    name: string;
    description: string;
    startingDate: string;
    endingDate: string;
    price: number;
    maxCapacity: number,
    moods: Mood;
}

export interface TravelsData {
    travels: Travel[];
}

export interface TravelsVars {
    limit: number;
}