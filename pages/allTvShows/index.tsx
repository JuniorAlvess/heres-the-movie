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
    tvCategory: IMovieCategory[];
}
const AllGenres = ({ genres, tvCategory }: IAllGenresProps) => {
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
                                {tvCategory[0].map(tv => {
                                    return (
                                        tv.genre_ids.includes(genre.id) && (
                                            <CardCarousel key={tv.id} categories={tv} format="TvShow" />
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
        `${process.env.API_URL}/genre/tv/list?api_key=${apiKey}`
    );
    const genres = genresResponse.data.genres;
    const tvCategoryPromises = Array.from({ length: 5 }, (_, i) =>
        axios.get<IMovieCategoryProps>(
            `${process.env.API_URL}/discover/tv?api_key=${apiKey}&with_genres=${genres}&page=${i + 1}`
        )
    );

    const tvCategoryResponses = await Promise.all(tvCategoryPromises);
    const tvCategory = tvCategoryResponses.map((response) => response.data.results);
    return {
        props: {
            genres,
            tvCategory: [tvCategory.flat()],
            fallback: false,
        },
        revalidate: 60 * 60 * 24
    };
};


export default AllGenres;