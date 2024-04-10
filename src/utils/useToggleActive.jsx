import { useState } from "react";

export default function useToggleActive(init) {
    const [isActive, setIsActive] = useState(init);
    const handleToggle = () => {
        setIsActive(!isActive);
    }
    return { isActive, handleToggle };
}