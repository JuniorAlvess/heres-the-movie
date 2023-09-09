import next from 'next';
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SearchContext from '../../contexts/SearchContext';
import CardCarousel from '../components/CardCarousel';
import styles from './styles.module.scss';

import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import axios from 'axios';
import { IMovieCategory, IMovieCategoryProps } from '../../interfaces';

const SearchResult = () => {
  const router = useRouter();
  const { searchResults, setSearchResults, searched } = useContext(SearchContext);

  const [countPages, setCountPages] = useState<number>(1);
  const [results, setResults] = useState<IMovieCategory[]>([]);

  const handleSearch = async (search: string, countPages = 1) => {
    try {
      const movieEndpoint = `${process.env.API_URL}/search/movie?api_key=${process.env.API_KEY}&query=${search}&page=${countPages}`;
      const tvEndpoint = `${process.env.API_URL}/search/tv?api_key=${process.env.API_KEY}&query=${search}&page=${countPages}`;
      const [movieResponse, tvResponse] = await Promise.all([
        axios.get<IMovieCategoryProps>(movieEndpoint),
        axios.get<IMovieCategoryProps>(tvEndpoint)
      ]);
      tvResponse.data.results.forEach((tvShow) => {
        if (tvShow) tvShow.isTvShow = true;
      });

      const allResults: any[] = [...movieResponse.data.results, ...tvResponse.data.results];
      setResults(allResults);
      document.getElementById('categories')?.scrollIntoView();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    if (!searchResults) {
      router.back();
    }
    handleSearch(searchResults, countPages);
  }, [searchResults, countPages]); // eslint-disable-line
  return (
    <div>
      {
        results.length !== 0 ? (
          <section id="categories" className={styles.resultsContainer}>
            <span>
              <BsFillArrowLeftCircleFill onClick={() => {
                router.back();
                setResults([])
              }} />
              Você pesquisou por: {searched}
            </span>
            <div className={styles.searchResults}>
              {
                results.map(result => {
                  return (
                    <CardCarousel key={result.id} categories={result} format={result.isTvShow ? 'TvShow' : 'Movie'} />
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
        ) : (
          <section id="categories" className={styles.resultsContainer}>
            <span>
              <BsFillArrowLeftCircleFill onClick={() => {
                router.back();
                setResults([])
              }} />
              Não encontramos nenhum resultado para: {searched}
            </span>
          </section>
        )
      }
    </div>
  )
}

export default SearchResult;