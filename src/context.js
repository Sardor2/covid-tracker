import React,{useState,useContext} from 'react';

const AppContext = React.createContext();


const AppProvider = ({children}) => {
    const [isLoading,setLoading] = useState(true);

    const setLoadingFalse = () => setLoading(false);
    const setLoadingTrue = () => setLoading(true);

    return <AppContext.Provider value={{isLoading,setLoadingFalse,setLoadingTrue}}>
        {children}
    </AppContext.Provider>
}

export const  useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext,AppProvider}