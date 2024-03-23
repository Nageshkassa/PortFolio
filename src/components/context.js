import  { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

// 1. Create context
const AppContext = createContext();

// API endpoint
const url = 'https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae';

// 2. Create provider component
const AppProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Fetch data from the API endpoint
        axios.get(url)
            .then(response => {
                // Extract data from the response
                const responseData = response.data;
                // Set the data state
                setData(responseData);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error);
                setLoading(false);
            });
    }, [url]);

    // 3. Provide the context value to the children
    return (
        <AppContext.Provider value={{ data, loading, error }}>
            {children}
        </AppContext.Provider>
    );
};

// 4. Create a custom hook to consume the context
const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppProvider,useGlobalContext};
