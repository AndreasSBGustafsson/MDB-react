import { Credits } from "./Credits.types"

export type ActorInfo = {
    adult: boolean;
    also_known_as: string[];
    biography: string;
    birthday?: string;
    deathday?: string;
    gender: number;
    homepage?: string;
    id: number;
    imdb_id?: string;
    known_for_department: string;
    name: string;
    place_of_birth?: string;
    popularity: number;
    profile_path?: string;
    credits: Credits;
    images: ImagesAct;
}

export type ImagesAct = {
    profiles: Profile[];
}

export type Profile = {
    aspect_ratio: number;
    height: number;
    iso_639_1?: string;
    file_path: string;
    vote_average: number;
    vote_count: number;
    width: number;
}