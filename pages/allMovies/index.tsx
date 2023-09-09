import axios from 'axios';
import { GetStaticProps } from 'next';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import { IGenreProps, IGenre, IMovieCategoryProps, IMovieCategory } from '../../interfaces';


import CardCarousel from '../components/CardCarousel';
import Header from '../components/Header';
import styles from './styles.module.scss';

interface IAllGenresProps {
    genres: IGenre[];
    movieCategory: IMovieCategory[];
}
const AllGenres = ({ genres, movieCategory }: IAllGenresProps) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 8
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 4
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 2,
        }
    };
    return (

        <>
            <div className={styles.container}>
                {genres.map(genre => {
                    return (
                        <section key={genre.id} className="categories">
                            <span><h2>{genre.name}</h2></span>
                            <Carousel
                                responsive={responsive}
                                draggable={false}
                                itemClass="movie"
                                containerClass="carousel"
                                swipeable={false}
                                partialVisible={true}
                                ssr={true}
                                infinite={true}
                            >
                                {movieCategory[0].map(movie => {
                                    return (
                                        movie.genre_ids.includes(genre.id) && (
                                            <CardCarousel key={movie.id} categories={movie} />
                                        )
                                    )
                                })}
                            </Carousel>
                        </section >
                    )
                })}
            </div>
        </>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const apiKey = process.env.API_KEY;
    const genresResponse = await axios.get<IGenreProps>(
        `${process.env.API_URL}/genre/movie/list?api_key=${apiKey}`
    );
    const genres = genresResponse.data.genres;
    const movieCategoryPromises = Array.from({ length: 5 }, (_, i) =>
        axios.get<IMovieCategoryProps>(
            `${process.env.API_URL}/discover/movie?api_key=${apiKey}&with_genres=${genres}&page=${i + 1}`
        )
    );

    const movieCategoryResponses = await Promise.all(movieCategoryPromises);
    const movieCategory = movieCategoryResponses.map((response) => response.data.results);
    return {
        props: {
            genres,
            movieCategory: [movieCategory.flat()],
            fallback: false,
        },
        revalidate: 60 * 60 * 24
    };
};

export default AllGenres;