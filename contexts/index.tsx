import React, { FC, ReactNode } from "react";
import { SearchContextProvider } from './SearchContext';

type GlobalContextProps = {
    children: ReactNode;
    
}


const GlobalContext = ({ children }: GlobalContextProps) => {
    return <SearchContextProvider>{children}</SearchContextProvider>
}

export default GlobalContext;