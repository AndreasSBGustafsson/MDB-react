import React, { ReactElement, createContext, useEffect, useState } from "react";

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
/* const UserDispatchContext = createContext(undefined); */
const ResultUpdateContext = createContext<ResultContextType|null>(null);

// A "provider" is used to encapsulate only the
// components that needs the state in this context
function ResultProvider({ children }:{children:React.ReactNode}) {
    const [genreListContext, setGenreListContext] = React.useState<number[]>([])

  useEffect(() => {
      console.log('from Context:',genreListContext);
  }, [genreListContext]);

    const updateGenreList = (genreList:number[]):void => {
        setGenreListContext(genreList);
    }

  return (
    <ResultContext.Provider value={{genreListContext,updateGenreList}}>
      {/* <ResultUpdateContext.Provider value={setGenreList}> */}
        {children}
      {/* </ResultUpdateContext.Provider> */}
    </ResultContext.Provider>
  );
}

export { ResultProvider, ResultContext, ResultUpdateContext};