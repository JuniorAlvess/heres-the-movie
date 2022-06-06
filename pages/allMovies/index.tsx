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
    const genres = await axios.get<IGenreProps>(`${process.env.apiUrl}/genre/movie/list?api_key=${process.env.apiKey}`);
    const response = []
    for (let i = 1; i <= 5; i++) {
        let teste = await axios.get<IMovieCategoryProps>(`
        ${process.env.apiUrl}/discover/movie?api_key=${process.env.apiKey}&with_genres=${genres}&page=${i}`
        );
        response.push(teste.data.results);
    }
    return {
        props: {
            genres: genres.data.genres,
            movieCategory: [response.flat()]
        }
    }
}

export default AllGenres;