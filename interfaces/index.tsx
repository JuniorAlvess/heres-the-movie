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
}

export interface IMovieProps {
    id: number;
    genres: any[];
    title: string;
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
    adult: boolean;
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


