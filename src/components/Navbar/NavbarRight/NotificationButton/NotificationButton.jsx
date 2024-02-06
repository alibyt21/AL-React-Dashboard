import { useState } from "react";
import Button from "./Button";
import DropdownCard from "./DropdownCard";
import RedDot from "./RedDot";

export default function NotificationButton() {
    const [active, setActive] = useState(false);
    return (
        <div className="relative mx-3">
            <RedDot />
            <Button />
            {active ? <DropdownCard /> : null}
        </div>
    )
}