import { useCountryContext } from "./CountryContextProvider";

import "./App.css";
import Africa from "./Components/Africa";
import Antarctica from "./Components/Antarctica";
import Asia from "./Components/Asia";
import Europe from "./Components/Europe";
import NorthAmerica from "./Components/NorthAmerica";
import Oceania from "./Components/Oceania";
import SouthAmerica from "./Components/SouthAmerica";
import Loading from "./Components/Loading";

function App() {
    const { loading } = useCountryContext();
    if (loading) {
        return <Loading />;
    } else {
        return (
            <>
                <h1 id="heading">World Countries</h1>
                <Africa />
                <Asia />
                <Europe />
                <NorthAmerica />
                <SouthAmerica />
                <Oceania />
                <Antarctica />
            </>
        );
    }
}

export default App;
