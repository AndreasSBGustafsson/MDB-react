import { Credits } from './Credits.types';
import { MoviesArray } from './MoviesArray.type';

export type MovieInfo = {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection?: any;
    budget: number;
    genres: Genre[];
    homepage?: any;
    id: number;
    imdb_id?: string;
    original_language: string;
    original_title: string;
    overview?: string;
    popularity: number;
    poster_path?: string;
    production_companies: Productioncompany[];
    production_countries: Productioncountry[];
    release_date: string;
    revenue: number;
    runtime?: number;
    spoken_languages: Spokenlanguage[];
    status: string;
    tagline?: string;
    title: string;
    videos: Videos;
    vote_average: number;
    vote_count: number;
    similar: MoviesArray;
    credits: Credits;
    images: Images;

};

export type Genre = {
    id: number;
    name: string;
};

export type Productioncompany = {
    id: number;
    logo_path?: string;
    name: string;
    origin_country: string;
};

export type Productioncountry = {
    iso_3166_1: string;
    name: string;
};

export type Spokenlanguage = {
    iso_639_1: string;
    name: string;
};



export type Videos = {
    results: Result[];
};

export type Result = {
    iso_639_1: string;
    iso_3166_1: string;
    name: string;
    key: string;
    site: string;
    size: number;
    type: string;
    official: boolean;
    puplished_at: string;
    id: string;
};

export type Images = {
    backdrops: Backdrop[];
    posters: Backdrop[];
};

export type Backdrop = {
    aspect_ratio: number;
    file_path: string;
    height: number;
    iso_639_1?: string;
    vote_average: number;
    vote_count: number;
    width: number;
};