import { useState } from "react";
import ListCountries from "./ListCountries";

export default function Oceania() {
    const [showComponent, setShowComponent] = useState(false);

    const showHide = () => {
        if (showComponent) {
            setShowComponent(false);
        } else {
            setShowComponent(true);
        }
    };

    return (
        <>
            <h1 className="headings" onClick={showHide}>
                Oceania
            </h1>
            {showComponent && <ListCountries continent={"Oceania"} />}
        </>
    );
}
