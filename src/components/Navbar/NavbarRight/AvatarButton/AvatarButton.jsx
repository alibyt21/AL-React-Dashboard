import { useState } from "react";
import Button from "./Button";
import DropdownCard from "./DropdownCard";
import GreenDot from "./GreenDot";

export default function AvatarButton() {
    const [active, setActive] = useState(false);
    return (
        <div className="relative">
            <Button />
            <GreenDot />
            {active ? <DropdownCard /> : null}
        </div>
    )
}