import { createContext, useContext, useState, useEffect } from "react";

const CountryContextProvider = createContext();
export const useCountryContext = () => useContext(CountryContextProvider);

export default function Provider({ children }) {
    const [countries, setCountry] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("https://restcountries.com/v3.1/all");
            const data = await response.json();
            setCountry(data);
            setLoading(false);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <CountryContextProvider.Provider value={{ countries, loading }}>
            {children}
        </CountryContextProvider.Provider>
    );
}
