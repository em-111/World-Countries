import { useState } from "react";
import ListCountries from "./ListCountries";

export default function Antarctica() {
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
                Antarctica
            </h1>
            {showComponent && <ListCountries continent={"Antarctica"} />}
        </>
    );
}
