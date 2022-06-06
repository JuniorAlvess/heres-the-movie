import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import SearchContext from '../contexts/SearchContext';
import CardCarousel from '../components/CardCarousel';
import styles from './styles.module.scss';

import { BsFillArrowLeftCircleFill } from 'react-icons/bs'

/**
 * TODO:
 * - Create a arrow to back to home
 * - Create a pagination
 */

const SearchedMovies = () => {
    const router = useRouter();

    const { searchResults, countPages, setCountPages, setSearchResults, searched } = useContext(SearchContext);
    console.log(searched);
    return (
        <div>
            {
                searchResults.length !== 0 ? (
                    <section id="categories" className={styles.resultsContainer}>
                        <span>
                            <BsFillArrowLeftCircleFill onClick={() => {
                                router.push('/#home');
                                setSearchResults([])
                            }} />
                            Você pesquisou por: {searched}
                        </span>
                        <div className={styles.searchResults}>
                            {
                                searchResults.map(movie => {
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