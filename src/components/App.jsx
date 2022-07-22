import React from "react";
import ShowSelector from "./ShowSelector";
import DataContextProvider from './../contexts/dataContext';

const App = () => {
    return(
        <DataContextProvider>
            <ShowSelector />
        </DataContextProvider>
    )
}

export default App; 