import { useState } from "react";
import Button from "./Button";
import DropdownCard from "./DropdownCard";

export default function OptionsButton() {
    const [active, setActive] = useState(false);
    return (
        <div className="relative">
            <Button />
            {active ? <DropdownCard /> : null}
        </div>
    )
}