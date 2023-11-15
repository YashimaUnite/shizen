import { useState, useEffect } from "react";

const useKeyboardMovement = () => {
    const [position, setDPosition] = useState({ x: 0, y: 0 });
    const maxRows = 50;
    const maxCols = 80;

    useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
        setDPosition((prev) => {
            let newX = prev.x;
            let newY = prev.y;

            switch (e.key) {
                case "w":
                    newY = Math.max(prev.y - 1, 0);
                    break;
                case "s":
                    newY = Math.min(prev.y + 1, maxRows - 1);
                    break;
                case "a":
                    newX = Math.max(prev.x - 1, 0);
                    break;
                case "d":
                    newX = Math.min(prev.x + 1, maxCols - 1);
                    break;
                default:
                    return prev;
            }

            return { x: newX, y: newY };
        });
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
        window.removeEventListener("keydown", handleKeyDown);
    };
    }   , [maxRows, maxCols]);

    return position;

}

export default useKeyboardMovement;