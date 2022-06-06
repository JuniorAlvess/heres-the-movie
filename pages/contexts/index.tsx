import React from 'react';
import { SearchContextProvider } from './SearchContext';

const GlobalContext = ({ children }) => {
    return <SearchContextProvider>{children}</SearchContextProvider>
}

export default GlobalContext;