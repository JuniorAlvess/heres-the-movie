import React, { createContext, useState } from 'react';


const SearchContext = createContext({
    setSearch: (search: string) => { null },
    setSearched: (searched: string) => { },
    searched: '',
    setSearchResults: (searchResults: string) => { null },
    searchResults: '',
});

type Props = {
    children: React.ReactNode
}

const SearchContextProvider = ({ children }: Props) => {
    const [searched, setSearched] = useState<string>('');
    const [searchResults, setSearchResults] = useState<string>('');

    function setSearch(search: string) {
            setSearchResults(search);
            setSearched(search);
            document.getElementById('categories')?.scrollIntoView();
    }

    return (
        <SearchContext.Provider value={{ setSearch, setSearched, searched, setSearchResults, searchResults }}>
            {children}
        </SearchContext.Provider>
    );
}

export { SearchContextProvider };
export default SearchContext;