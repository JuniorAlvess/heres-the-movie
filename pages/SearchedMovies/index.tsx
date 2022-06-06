import next from 'next';
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SearchContext from '../contexts/SearchContext';
import CardCarousel from '../components/CardCarousel';
import styles from './styles.module.scss';

import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import axios from 'axios';
import { IMovieCategory, IMovieCategoryProps } from '../../interfaces';

/**
 * TODO:
 * - Create a arrow to back to home
 * - Create a pagination
 */

const SearchedMovies = () => {
    const router = useRouter();
    const { searchResults, setSearchResults, searched } = useContext(SearchContext);

    const [countPages, setCountPages] = useState<number>(1);
    const [searchMovieResults, setSearchMovieResults] = useState<IMovieCategory[]>([]);

    const handleSearch = async (search: string, countPages = 1) => {
        try {
            const response = await axios.get<IMovieCategoryProps>(`${process.env.API_URL}/search/movie?api_key=${process.env.API_KEY}&query=${search}&page=${countPages}`);

            setSearchMovieResults(response.data.results);
            document.getElementById('categories')?.scrollIntoView();
        } catch (error) { console.log(error); }
    }

    useEffect(() => {
        console.log('test ', searchResults);
        handleSearch(searchResults, countPages);
    }, [searchResults, countPages]); // eslint-disable-line
    return (
        <div>
            {
                searchMovieResults.length !== 0 ? (
                    <section id="categories" className={styles.resultsContainer}>
                        <span>
                            <BsFillArrowLeftCircleFill onClick={() => {
                                router.push('/#home');
                                setSearchMovieResults([])
                            }} />
                            Você pesquisou por: {searched}
                        </span>
                        <div className={styles.searchResults}>
                            {
                                searchMovieResults.map(movie => {
                                    return (
                                        <CardCarousel key={movie.id} categories={movie} />
                                    )
                                })
                            }
                        </div>
                        <span>
                            <button className={styles.prev} disabled={countPages <= 1 ? true : false} onClick={() => setCountPages(countPages - 1)} >&#10094;</button>
                            {countPages}
                            <button className={styles.next} onClick={() => setCountPages(countPages + 1)}>&#10095;</button>
                        </span>
                    </section>
                ) : ("")
            }
        </div>
    )
}

export default SearchedMovies;