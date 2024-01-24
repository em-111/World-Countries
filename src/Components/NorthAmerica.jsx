import { useState } from "react";
import ListCountries from "./ListCountries";

export default function NorthAmerica() {
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
                North America
            </h1>
            {showComponent && <ListCountries continent={"North America"} />}
        </>
    );
}
