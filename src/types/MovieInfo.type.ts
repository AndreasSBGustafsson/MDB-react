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
    video: boolean;
    vote_average: number;
    vote_count: number;
    // similar: Similar[];
    credits: Credits;
    // videos: Videos[];
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

export type Similar = {
    adult: boolean;
    backdrop_path?: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview?: string;
    popularity: number;
    poster_path?: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
};

export type Credits = {
    cast: Cast[];
    crew: Crew[];
};  

export type Cast = {
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

export type Videos = {
    results: Result[];
};

export type Result = {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    site: string;
    size: number;
    type: string;
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