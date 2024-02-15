export interface Mood {
    nature: number;
    relax: number;
    history: number;
    culture: number;
    party: number;
}

export interface Travel {
    id: string;
    slug: string;
    name: string;
    description: string;
    startingDate: string; // or Date if you convert the string to a Date object
    endingDate: string; // or Date
    price: number;
    moods: Mood;
}