import { useState } from "react";
import Button from "./Button";
import DropdownCard from "./DropdownCard";
import RedDot from "./RedDot";

export default function NotificationButton() {
    const [active, setActive] = useState(false);
    return (
        <div className="relative">
            <RedDot />
            <Button />
            {active ? <DropdownCard /> : null}
        </div>
    )
}