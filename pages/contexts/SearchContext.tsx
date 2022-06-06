import React, { createContext, useEffect, useState } from 'react';
import Link from 'next/link';
// import { useRouter } from 'next/router';
// import dotenv from  'dotenv'
// import axios from 'axios';
import { IMovieCategory } from '../../interfaces'


export const SearchContext = createContext({
    setSearch: (search: string) => { },
    setSearched: (searched: any) => { },
    searched: '',
    setSearchResults: (searchResults: any) => { },
    // searchResults: [{} as IMovieCategory],
    searchResults: '',
});

type Props = {
    children: React.ReactNode
}

const SearchContextProvider = ({ children }: Props) => {
    const [searched, setSearched] = useState<string>('');
    // const [searchResults, setSearchResults] = useState<IMovieCategory[]>([]);
    const [searchResults, setSearchResults] = useState<string>('');
    // const [countPages, setCountPages] = useState<number>(1);
    // const router = useRouter();

    function setSearch(search: string) {
        // try {
            // const response = await axios.get(`${process.env.API_URL}/search/movie?api_key=${process.env.API_KEY}&query=${search}&page=${countPages}`);
            setSearchResults(search);
            setSearched(search);
            document.getElementById('categories')?.scrollIntoView();
        // } catch (error) { console.log(error); }
    }

    return (
        <SearchContext.Provider value={{ setSearch, setSearched, searched, setSearchResults, searchResults }}>
            {children}
        </SearchContext.Provider>
    );
}

export { SearchContextProvider };
export default SearchContext;