import { useState } from "react";
import Button from "./Button";
import DropdownCard from "./DropdownCard";

export default function ServicesButton() {
    const [active, setActive] = useState(false);
    const handleClick = () => {
        setActive(!active);
    }
    return (
        <div>
            <Button handleClick={handleClick}/>
            <DropdownCard active={active}/>
        </div>
    )
}