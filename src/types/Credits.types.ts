import { ReactNode } from "react";

export type Credits = {
    cast: Cast[];
    crew: Crew[];
};  

export type Cast = {
    poster_path: any;
    backdrop_path: any;
    title: ReactNode;
    release_date: ReactNode;
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path?: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
};

type Crew = {
    adult: boolean;
    gender: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path?: string;
    credit_id: string;
    department: string;
    job: string;
};