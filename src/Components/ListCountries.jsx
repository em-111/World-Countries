import { useState } from "react";
import { useCountryContext } from "../CountryContextProvider";
import PopUpModal from "./PopUpModal";

export default function ListCountries({ continent }) {
    const { countries } = useCountryContext();
    const [showComponent, setShowComponent] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState();

    const modal = (country) => {
        setSelectedCountry(country);

        setShowComponent(true);
    };

    return (
        <>
            <div className="list-countries">
                {countries
                    .filter((country) => country.continents.includes(continent))
                    .map((country, index) => (
                        <div
                            className="country"
                            key={index}
                            onClick={() => modal(country)}
                        >
                            <img
                                className="flag"
                                src={country.flags.svg}
                                width={100}
                                alt={country.name.common}
                            />
                            <p>{country.name.common}</p>
                        </div>
                    ))}
            </div>
            {showComponent && (
                <PopUpModal
                    country={selectedCountry}
                    cancel={() => setShowComponent(false)}
                />
            )}
        </>
    );
}
