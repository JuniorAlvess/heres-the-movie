import React, { useContext, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { FaUserAlt } from 'react-icons/fa';
import SearchContext from '../../../contexts/SearchContext';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = () => {
    const { setSearch } = useContext(SearchContext);
    const router = useRouter();
    const [inputValue, setInputValue] = useState('');
    const handleSearch = () => {
        if (inputValue.length >= 3) {
            ;
            setSearch(inputValue);
            router.push('/SearchResult');
            setInputValue('');
        }
    }

    return (
        <header className={styles.header}>
            <h1 onClick={() => router.push('/')}>Here&apos;s The Movie</h1>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href="/">
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
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button
                            disabled={inputValue.length < 3}
                            onClick={() => handleSearch()}
                        >
                            Buscar
                        </button>
                    </li>
                </ul>
            </nav >
            <FaUserAlt className={styles.user} />
        </header >
    );
}

export default Header;