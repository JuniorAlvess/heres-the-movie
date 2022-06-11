import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { FaUserAlt } from 'react-icons/fa';
import SearchContext from '../../../contexts/SearchContext';
import Link from 'next/link';

const Header = () => {
    const { setSearch } = useContext(SearchContext);
    const [inputValue, setInputValue] = useState('');
    const test = () => {
        if (inputValue.length >= 3) {
            // console.log(searchResults);
            // handleSearch(search);
            setSearch(inputValue);
        }
    }

    return (
        <header className={styles.header}>
            <h1>Here&apos;s The Movie</h1>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/#home">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/allMovies">
                            Movies
                        </Link>
                    </li>
                    <li>
                        <Link href="/allTvShows">
                            TV Shows
                        </Link>
                    </li>
                    {/* <li>
                        <select name="genres" id="genres">
                            <option disabled>Genres</option>
                        </select>
                    </li> */}
                    <li>People</li>
                    <li>
                        <input
                            type="searchMovie"
                            name="searchMovie"
                            id="search"
                            placeholder="Buscar"
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button onClick={() => test()}><Link href="/SearchedMovies">
                            Buscar
                        </Link></button>
                    </li>
                </ul>
            </nav >
            <FaUserAlt className={styles.user} />
        </header >
    );
}

export default Header;