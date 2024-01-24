export default function PopUpModal({ country, cancel = (f) => f }) {
    // CHECK IF THE COUNTRY HAS A CURRENCY
    let hasCurrency = {};
    if (country.currencies) {
        hasCurrency = Object.keys(country.currencies)[0];
    }

    // ENABLE AND DISABLE SCROLLING
    document.body.style.overflow = "hidden";
    const bodyOverflow = () => {
        document.body.style.overflow = "";
    };

    return (
        <div className="modal">
            <div className="modal-info">
                {/* IMG */}
                <img src={country.flags.svg} className="modal-img" />

                <div className="country-info">
                    {/* NAME */}
                    <h3>
                        Country Name :{" "}
                        <span className="bold">{country.name.common}</span>
                    </h3>

                    {/* CAPITAL */}
                    <h3>
                        Capital :{" "}
                        <span className="bold">{country.capital}</span>
                    </h3>

                    {/* POPULATION */}
                    <h3>
                        Population :{" "}
                        <span className="bold">{country.population}</span>
                    </h3>

                    {/* AREA */}
                    <h3>
                        Area :{" "}
                        <span className="bold">
                            {country.area} km<sup>2</sup>
                        </span>
                    </h3>

                    {/* CONTINENTS */}
                    <h3>
                        Continent/s :{" "}
                        <span className="bold">{country.continents}</span>
                    </h3>

                    {/* CURRENCY */}
                    {country.currencies ? (
                        <div>
                            <h3>
                                Currency :{" "}
                                <span className="bold">{hasCurrency}</span>
                            </h3>
                            <ul>
                                <li>
                                    Currency name :{" "}
                                    <span className="bold">
                                        {country.currencies[hasCurrency].name}
                                    </span>
                                </li>
                                <li>
                                    Currency symbol :{" "}
                                    <span className="bold">
                                        {country.currencies[hasCurrency].symbol}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <div>
                            <h3>Currency :</h3>
                            <ul>
                                <li>Currency name :</li>
                                <li>Currency symbol :</li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* CANCEL MODAL */}
                <button
                    className="modalBTN"
                    onClick={() => {
                        cancel();
                        bodyOverflow();
                    }}
                >
                    X
                </button>
            </div>
        </div>
    );
}
