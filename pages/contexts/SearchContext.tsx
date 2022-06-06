import React, { createContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import axios from 'axios';
import { IMovieCategory } from '../../interfaces'


export const SearchContext = createContext({
    handleSearch: (search: any) => { },
    setSearched: (searched: any) => { },
    searched: '',
    setSearchResults: (searchResults: any) => { },
    searchResults: [{} as IMovieCategory],
    setCountPages: (countPages: any) => { },
    countPages: 1,
});

type Props = {
    children: React.ReactNode
}

const SearchContextProvider = ({ children }: Props) => {
    const [searched, setSearched] = useState<string>('');
    const [searchResults, setSearchResults] = useState<IMovieCategory[]>([]);
    const [countPages, setCountPages] = useState<number>(1);
    const router = useRouter();    
    // useEffect(() => {
    //     if(!searched) {
    //         router.push('/#home');
    //     }
    // }, [searched]);

    async function handleSearch(search: string) {
        try {
            const response = await axios.get(`${process.env.apiUrl}/search/movie?api_key=${process.env.apiKey}&query=${search}&page=${countPages}`);
            setSearchResults(response.data.results);
            setSearched(search);
            document.getElementById('categories')?.scrollIntoView();
        } catch (error) { console.log(error); }
    }

    return (
        <SearchContext.Provider value={{ setSearched, searched, handleSearch, setSearchResults, searchResults, countPages, setCountPages }}>
            {children}
        </SearchContext.Provider>
    );
}

export { SearchContextProvider };
export default SearchContext;