export interface IPopular {
    id: number;
    genre_ids: number[];
    title: string;
    original_title: string;
    overview: string;
    adult: boolean;
    backdrop_path: string;
    originalLanguages: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    video: boolean;
    vote_count: number;
}

export interface IGenre {
    id: number;
    name: string;
}

export interface IMovieCategory {
    map(arg0: (movie: any) => any): any;
    id: number;
    genre_ids: number[];
    title: string;
    poster_path: string;
    vote_average: number;
    total_pages: number;
    isTvShow?: boolean;
}

export interface IMovieProps {
    id: number;
    genres: any[];
    title: string;
    tagline: string;
    poster_path: string;
    backdrop_path: string;
    homepage: string;
    vote_average: number;
    original_language: string;
    overview: string;
    popularity: number;
    release_date: string;
    status: string;
    video: boolean;
    runtime: number;
    adult: boolean;
}

export interface ICast {
    adult: boolean;
    gender: number;
    id: number;
    known_departament: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    cast_id: number;
    character: string;
    order: number;
}

export interface IPopularProps {
    results: IPopular[];
}

export interface IGenreProps {
    genres: IGenre[];
}

export interface IMovieCategoryProps {
    results: IMovieCategory[];
}

export interface IPropsCast {
    cast: ICast[]
}
