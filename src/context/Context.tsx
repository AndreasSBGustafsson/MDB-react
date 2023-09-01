//@ts-nocheck
import React, { createContext } from "react";

export type ResultContextType = {
    updateGenreList: (genreList:number[]) => void;
  };

// Create two context:
// UserContext: to query the context state
// UserDispatchContext: to mutate the context state
const initialState = {
    genreListContext: [] as number[],
    updateGenreList: (genreList:number[]) => {},
    }
const ResultContext = createContext(initialState);

const ResultUpdateContext = createContext<ResultContextType|null>(null);

// A "provider" is used to encapsulate only the
// components that needs the state in this context
function ResultProvider({ children }:{children:React.ReactNode}) {
    const [genreListContext, setGenreListContext] = React.useState<number[]>([])


    const updateGenreList = (genreList:number[]):void => {
        setGenreListContext(genreList);
    }

  return (
    <ResultContext.Provider value={{genreListContext,updateGenreList}}>
        {children}
    </ResultContext.Provider>
  );
}




export { ResultProvider, ResultContext, ResultUpdateContext};