import { useState } from "react";
import ListCountries from "./ListCountries";

export default function Asia() {
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
                Asia
            </h1>
            {showComponent && <ListCountries continent={"Asia"} />}
        </>
    );
}
